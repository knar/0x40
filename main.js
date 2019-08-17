import { SpriteSheet } from './tiles.js'
import * as Game from './game.js'
import { levels } from './levels.js'

const resolution = 32

const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
let spriteSheet
let gameState
let canMove = true
let updateTimer

let levelIndex = 0

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
	gameState = Game.newGame(levels[levelIndex])
}

function levelUp() {
	levelIndex = (levelIndex + 1) % levels.length
	initGame()
}

function onResize() {
	const size = Math.min(window.innerWidth, window.innerHeight) * 0.8
	
	const pixelRatio = Math.round(size / resolution)

	canvas.width = resolution
	canvas.height = resolution

	canvas.style.width = `${resolution * pixelRatio}px`
	canvas.style.height = `${resolution * pixelRatio}px`


	const render = () => {
		context.clearRect(0, 0, canvas.width, canvas.height)
		spriteSheet.drawTiles(context, gameState.tiles, 8, 8, 2)
		requestAnimationFrame(render)
	}
	render()
}

function onKeyDown(e) {
	const keyActions = {
		'ArrowUp': Game.jumpAction,
		'ArrowLeft': Game.moveLeftAction,
		'ArrowRight': Game.moveRightAction,
		'r': (gameState) => initGame(),
		'n': (gameState) => levelUp(),
	}

	const action = keyActions[e.key];

	if (action) {
		if (!canMove) {
			Game.updateAction(gameState)
			clearInterval(updateTimer)
		}

		action(gameState)
		canMove = false
	
		if (gameState.won) {
			levelUp();
			return;
		}
		
		updateTimer = setTimeout(() => {
			Game.updateAction(gameState)
			canMove = true

			if (gameState.won) {
				levelUp();
				return;
			}
		}, 500)
	}
}
