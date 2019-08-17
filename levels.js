const rawLevels = [
	[
		0, 0, 1, 0, 0, 0, 0, 1,
		7, 0, 3, 0, 0, 0, 0, 0,
		1, 1, 0, 1, 1, 1, 1, 0,
		0, 0, 0, 0, 1, 0, 0, 0,
		0, 0, 0, 0, 3, 2, 0, 0,
		0, 0, 0, 0, 0, 3, 8, 2,
		0, 0, 0, 1, 1, 1, 1, 3,
		0, 0, 0, 0, 0, 0, 0, 0,
	],
]

function addEdges(level, width, height) {
	const rowOfEdges = [ 9, 9, 9, 9, 9, 9, 9, 9, 9 ]
	
	let l = [...rowOfEdges, ...rowOfEdges]
	
	for (let i = 0; i < height; i++) {
		let row = level.slice(i * width, width)
		l.push(9, 9, ...row, 9, 9)
	}

	l.push(...rowOfEdges, ...rowOfEdges)

	return l
}

export const levels = rawLevels.map(level => addEdges(level, 8, 8))
