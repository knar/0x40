const TILES = ['AIR', 'STONE', 'DIRT', 'GRASS', 'COAL'];

const drawMap = {
	'AIR': (ctx) => {
		ctx.fillStyle = '#96c7ff'
		ctx.fillRect(0, 0, 4, 4)
	},
	'STONE': (ctx) => {
		ctx.fillStyle = '#555'
		ctx.fillRect(0, 0, 4, 4)
		ctx.fillStyle = '#777'
		ctx.fillRect(1, 1, 1, 1)
		ctx.fillRect(3, 2, 1, 1)
		ctx.fillRect(2, 3, 1, 1)
	},
	'DIRT': (ctx) => {
		ctx.fillStyle = '#a5682a'
		ctx.fillRect(0, 0, 4, 4)
	},
	'GRASS': (ctx) => {
		ctx.fillStyle = '#6f6'
		ctx.fillRect(0, 0, 4, 2)
		ctx.fillStyle = '#a5682a'
		ctx.fillRect(0, 2, 4, 2)
	},
	'COAL': (ctx) => {
		ctx.fillStyle = '#333'
		ctx.fillRect(0, 0, 4, 4)
		ctx.fillStyle = '#434'
		ctx.fillRect(1, 2, 1, 1)
	},
}

const map = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 3, 3, 0, 0],
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

window.addEventListener('load', init)
window.addEventListener('resize', onResize)

function init() {
	canvas.style.background = '#fff'
	
	onResize()
}

function onResize() {
	const size = Math.min(window.innerWidth, window.innerHeight) * 0.5
	
	const pixelRatio = Math.round(size / 64)

	canvas.width = 64
	canvas.height = 64

	canvas.style.width = `${64 * pixelRatio}px`
	canvas.style.height = `${64 * pixelRatio}px`

	renderTiles(context, map)
}

function renderTiles(context, tiles) {
	for (let i = 0; i < 16; i++) {
		for (let j = 0; j < 16; j++) {
			const tile = tiles[i][j]
			context.save()
			context.translate(j * 4, i * 4);
			drawMap[TILES[tile]](context);
			context.restore()
		}
	}
}