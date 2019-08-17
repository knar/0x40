export const TILES = {
	'AIR': 0,
	'STONE': 1,
	'DIRT': 2,
	'BALLOON': 3,
	'GOAL': 7,
	'PLAYER': 8,
	'EDGE': 9,
}

const tileSize = 4;

const spriteSheet = {
    // [x, y]
	[ TILES.AIR ]: [0, 0],
    [ TILES.STONE ]: [0, 1],
    [ TILES.DIRT ]: [0, 2],
	[ TILES.BALLOON ]: [0, 3],
    [ TILES.GOAL ]: [0, 4],
	[ TILES.PLAYER ]: [0, 5],
}

export class SpriteSheet {
    constructor(elem) {
        this.elem = elem
    }

    drawTiles(context, tiles, height, width) {
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                const tile = tiles[i * 8 + j];
                const [sx, sy] = spriteSheet[tile];
                context.drawImage(this.elem, sx * tileSize, sy * tileSize, tileSize, tileSize, j * tileSize, i * tileSize, tileSize, tileSize);
            }
        }
    }
}
