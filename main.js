import { SpriteSheet } from './tiles.js'
import * as Game from './game.js'
import { levels } from './levels.js'

const resolution = 32

const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
let spriteSheet
let gameState

window.addEventListener('load', init)
window.addEventListener('resize', onResize)
window.addEventListener('keydown', onKeyDown)

function init() {
	canvas.style.background = '#87cefa'

	const img = new Image()
	img.src = 'tiles.png'
	img.onload = () => {
		spriteSheet = new SpriteSheet(img)
		initGame()
		onResize()
	}
}

function initGame() {
	gameState = Game.newGame(levels[0])

}

function onResize() {
	const size = Math.min(window.innerWidth, window.innerHeight) * 0.8
	
	const pixelRatio = Math.round(size / resolution)

	canvas.width = resolution
	canvas.height = resolution

	canvas.style.width = `${resolution * pixelRatio}px`
	canvas.style.height = `${resolution * pixelRatio}px`

	spriteSheet.drawTiles(context, gameState.tiles, 12, 12)
}

function onKeyDown(e) {
	const keyActions = {
		'ArrowUp': Game.jumpAction,
		'ArrowLeft': Game.moveLeftAction,
		'ArrowRight': Game.moveRightAction,
	}

	const action = keyActions[e.key];

	if (action) {
		action(gameState)

		onResize()
	}
}
