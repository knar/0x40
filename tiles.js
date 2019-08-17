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
	[ TILES.EDGE ]: [0, 0],
    [ TILES.STONE ]: [1, 0],
    [ TILES.DIRT ]: [2, 0],
	[ TILES.BALLOON ]: [3, 0],
    [ TILES.GOAL ]: [4, 0],
	[ TILES.PLAYER ]: [5, 0],
}

export class SpriteSheet {
    constructor(elem) {
        this.elem = elem
    }

    drawTiles(context, tiles, height, width, edges) {
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                const tile = tiles[(i + edges) * (width + 2 * edges) + (j + edges)];
                const [sx, sy] = spriteSheet[tile];
                context.drawImage(this.elem, sx * tileSize, sy * tileSize, tileSize, tileSize, j * tileSize, i * tileSize, tileSize, tileSize);
            }
        }
    }
}
