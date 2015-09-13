const positioner = Object.create(null);

function move(num, code) {
	if (!Number.isNaN(Number(num))) {
		process.stdout.write(`\x1b[${Math.round(num)}${code}`);
	}
}

positioner.columns = () => process.stdout.columns;
positioner.rows = () => process.stdout.rows;

positioner.moveTo = (x = 0, y = 0) => {
	process.stdout.write(`\x1b[${y};${x}f`);
	return positioner;
};

positioner.center = () => {
	const centerX = Math.round(positioner.columns() / 2);
	const centerY = Math.round(positioner.rows() / 2);

	return positioner.moveTo(centerX, centerY);
};

positioner.moveUp = (lines = 0) => {
	if (lines < 0) {
		return positioner.moveDown(-lines);
	}
	move(lines, "A");
	return positioner;
};

positioner.moveDown = lines => {
	if (lines < 0) {
		return positioner.moveUp(-lines);
	}
	move(lines, "B");
	return positioner;
};

positioner.moveLeft = columns => {
	if (columns < 0) {
		return positioner.moveRight(-columns);
	}
	move(columns, "C");
	return positioner;
};

positioner.moveRight = columns => {
	if (columns < 0) {
		return positioner.moveLeft(-columns);
	}
	move(columns, "D");
	return positioner;
};

module.exports = positioner;
