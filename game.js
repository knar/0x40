import { TILES } from './tiles.js'

export function newGame(level) {
	const deepCopy = obj => JSON.parse(JSON.stringify(obj))
	return {
		tiles: deepCopy(level),
	}
}

export function jumpAction(gameState) {
	moveBy(gameState, TILES.PLAYER, -8, false)
}

export function moveLeftAction(gameState) {
	moveBy(gameState, TILES.PLAYER, -1, true)
}

export function moveRightAction(gameState) {
	moveBy(gameState, TILES.PLAYER, 1, true)
}

function moveBy(gameState, tileType, offset, push) {
	const { tiles } = gameState

	const isFree = tile => tile === TILES.AIR || tile === TILES.EDGE

	tiles.forEach((tile, i) => {
		if (tile === tileType) {
			const current = tiles[i + offset]
			const next = tiles[i + 2 * offset] 

			if (push && !isFree(current) && isFree(next)) {
				tiles[i] = TILES.AIR
				tiles[i + offset] = tileType
				tiles[i + 2 * offset] = current
			} else if (isFree(current)) {
				tiles[i] = TILES.AIR
				tiles[i + offset] = tileType
			}
		}
	})
}
