import { SpriteSheet } from './tiles.js'

const map = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 6, 6, 5, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 6, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0],
	[3, 3, 0, 5, 0, 0, 3, 3, 3, 3, 3, 0, 3, 3, 0, 0],
	[2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 3, 2, 2, 3, 3],
	[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	[2, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 2, 1, 2, 2, 2],
	[2, 1, 1, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1],
	[1, 4, 4, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1],
]

const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
let spriteSheet

window.addEventListener('load', init)
window.addEventListener('resize', onResize)

function init() {
	canvas.style.background = '#87cefa'

	const img = new Image()
	img.src = 'tilesheet.png'
	img.onload = () => {
		spriteSheet = new SpriteSheet(img)
		onResize()
	}
}

function onResize() {
	const size = Math.min(window.innerWidth, window.innerHeight) * 0.5
	
	const pixelRatio = Math.round(size / 64)

	canvas.width = 64
	canvas.height = 64

	canvas.style.width = `${64 * pixelRatio}px`
	canvas.style.height = `${64 * pixelRatio}px`

	spriteSheet.drawTiles(context, map)
}
