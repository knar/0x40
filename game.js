import { TILES } from './tiles.js'

export function newGame(level) {
	const deepCopy = obj => JSON.parse(JSON.stringify(obj))
	return {
		tiles: deepCopy(level),
		jumping: false,
		justJumped: false,
		won: false,
	}
}

export function jumpAction(gameState) {
	moveBy(gameState, TILES.PLAYER, -12, false, true)
	gameState.jumping = true
}

export function moveLeftAction(gameState) {
	const j = (gameState.justJumped || gameState.jumping)
	moveBy(gameState, TILES.PLAYER, -1, !j, !j);
}

export function moveRightAction(gameState) {
	console.log(gameState)
	const j = (gameState.justJumped || gameState.jumping)
	moveBy(gameState, TILES.PLAYER, 1, !j, !j);
}

export function updateAction(gameState) {
	repeatWhile(() => moveBy(gameState, TILES.BALLOON, -12, false))
	repeatWhile(() => moveBy(gameState, TILES.DIRT, 12, false))

	if (!gameState.jumping) {
		repeatWhile(() => moveBy(gameState, TILES.PLAYER, 12, false))
	}
	gameState.justJumped = gameState.jumping
	gameState.jumping = false
}

function repeatWhile(callback) {
	let result = callback()
	while (result) result = callback()
}

function moveBy(gameState, tileType, offset, push, grounded) {
	const { tiles } = gameState

	const isFree = tile => tile === TILES.AIR || tile === TILES.EDGE
	const canPush = tile => tile === TILES.DIRT || tile === TILES.BALLOON || tile === TILES.GOAL

	const indexes = []
	tiles.forEach((tile, i) => tile === tileType && indexes.push(i))

	const results = indexes.map((i) => {
		const current = tiles[i + offset]
		const next = tiles[i + 2 * offset]

		if (current === TILES.GOAL && tileType === TILES.PLAYER) {
			gameState.won = true
			return false
		}

		if (grounded && isFree(tiles[i + 12])) {
			return false
		}

		if (push && canPush(current) && isFree(next)) {
			tiles[i] = TILES.AIR
			tiles[i + offset] = tileType
			tiles[i + 2 * offset] = current
			return true
		} else if (isFree(current)) {

			tiles[i] = TILES.AIR
			tiles[i + offset] = tileType
			return true
		}

		return false
	})

	for (let i = 0; i < 24; i++) tiles[i] = TILES.EDGE
	for (let j = 2; j < 10; j++)
		for (let i of [0, 1, 10, 11])
			tiles[i + j * 12] = TILES.EDGE
	for (let i = 120; i < 144; i++) tiles[i] = TILES.EDGE

	return results.some(Boolean)
}
