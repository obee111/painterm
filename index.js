const fg = {
	black: 30,
	red: 31,
	green: 32,
	yellow: 33,
	blue: 34,
	magenta: 35,
	cyan: 36,
	white: 37,
	default: 39,
}

const bg = {
	bgBlack: 40,
	bgRed: 41,
	bgGreen: 42,
	bgYellow: 43,
	bgBlue: 44,
	bgMagenta: 45,
	bgCyan: 46,
	bgWhite: 47,
	bgDefault: 49,
}

const brightness = {
	bold: 1,
	dim: 2,
	defaultBrightness: 0
}

const colourize = function(text, ...args){
	// Defaults
	let boldness = 0;
	let foreground = 39;
	let background = 49;
	// Find if the arguments are in fg, bg, brightness
	// after if assign new values to defaults
	for (var i = 0; i < args.length; i++) {
		if (args[i] in fg) {
			foreground = fg[args[i]]
		}
		else if (args[i] in bg) {
			background = bg[args[i]]
		}
		else if (args[i] in brightness) {
			boldness = brightness[args[i]]
		}
	}

	return `\x1b[${boldness};${foreground};${background}m${text}\x1b[0m`
}
module.exports.style = colourize;
// console.log(colorize("hello", "red"))