export const TILES = ['AIR', 'STONE', 'DIRT', 'GRASS', 'COAL', 'TRUNK', 'LEAVES', 'BALLOON']

const tileSize = 4;

const spriteSheet = {
    // [x, y]
    AIR: [2, 2],
    STONE: [2, 0],
    DIRT: [0, 0],
    GRASS: [1, 0],
    COAL: [2, 1],
    TRUNK: [0, 2],
    LEAVES: [0, 1],
	BALLOON: [1, 1],
}

export class SpriteSheet {
    constructor(elem) {
        this.elem = elem
    }

    drawTiles(context, tiles) {
        const h = tiles.length;
        const w = tiles[0].length;

        for (let i = 0; i < h; i++) {
            for (let j = 0; j < w; j++) {
                const tile = TILES[tiles[i][j]];
                const [sx, sy] = spriteSheet[tile];
                context.drawImage(this.elem, sx * tileSize, sy * tileSize, tileSize, tileSize, j * tileSize, i * tileSize, tileSize, tileSize);
            }
        }
    }
}
