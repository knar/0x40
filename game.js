import { TILES } from './tiles.js'

export function newGame(level) {
	const deepCopy = obj => JSON.parse(JSON.stringify(obj))
	return {
		tiles: deepCopy(level),
	}
}

export function moveLeftAction(gameState) {
	moveBy(gameState, TILES.PLAYER, 1)
}

export function moveRightAction(gameState) {
	moveBy(gameState, TILES.PLAYER, -1)
}

function moveBy(gameState, tileType, offset) {
	const { tiles } = gameState

	const index = tiles.indexOf(tileType)

	tiles[index] = TILES.AIR
	tiles[index + offset] = tileType
}
