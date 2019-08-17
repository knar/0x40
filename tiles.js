export const TILES = {
	'AIR': 0,
	'STONE': 1,
	'DIRT': 2,
	'BALLOON': 3,
	'GOAL': 8,
	'PLAYER': 9,
}

const tileSize = 4;

const spriteSheet = {
    // [x, y]
	[ TILES.AIR ]: [2, 2],
    [ TILES.STONE ]: [2, 0],
    [ TILES.DIRT ]: [0, 0],
	[ TILES.BALLOON ]: [1, 1],
    [ TILES.GOAL ]: [0, 1],
	[ TILES.PLAYER ]: [1, 1],
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
