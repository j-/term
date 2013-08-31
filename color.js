var term = require('./core');

/**
 * @module term.color
 */

/**
 * Apply colors and styles to a string.
 *
 * @example
 * term.color('black text on green background', term.color.BLACK, term.color.GREEN);
 * term.color('bright blue text', term.color.BLUE, null, term.color.BRIGHT);
 *
 * @static
 * @param {string} text Text to colorise
 * @param {int=} fg Foreground color to use
 * @param {int=} bg Background color to use
 * @param {...int=} styles Styles to apply
 * @return {string}
 */
var color = function (text, fg, bg) {
	var open, close;
	var styles = Array.prototype.slice.call(arguments, 3).map(term.val);
	fg = term.val(fg);
	bg = term.val(bg);
	open = term.CSI +
	       FG + fg + term.SEP +
	       BG + bg + term.SEP +
	       styles.join(term.SEP) + END;
	close = term.CSI + color.RESET + END;
	return open + text + close;
};
exports = module.exports = color;

/**
 * Foreground component code.
 * @constant
 * @type {int}
 * @default
 */
exports.FG = 3;
const FG = color.FG.toString();

/**
 * Background component code.
 * @constant
 * @type {int}
 * @default
 */
exports.BG = 4;
const BG = color.BG.toString();

const END = 'm';

/* COLORS */

/**
 * @constant
 * @type {int}
 * @default
 */
exports.BLACK = 0;

/**
 * @constant
 * @type {int}
 * @default
 */
exports.RED = 1;

/**
 * @constant
 * @type {int}
 * @default
 */
exports.GREEN = 2;

/**
 * @constant
 * @type {int}
 * @default
 */
exports.YELLOW = 3;

/**
 * @constant
 * @type {int}
 * @default
 */
exports.BLUE = 4;

/**
 * @constant
 * @type {int}
 * @default
 */
exports.MAGENTA = 5;

/**
 * @constant
 * @type {int}
 * @default
 */
exports.CYAN = 6;

/**
 * @constant
 * @type {int}
 * @default
 */
exports.WHITE = 7;

/* STYLES */

/**
 * @constant
 * @type {int}
 * @default
 */
exports.RESET = 0;

/**
 * @constant
 * @type {int}
 * @default
 */
exports.BRIGHT = 1;

/**
 * @constant
 * @type {int}
 * @default
 */
exports.DIM = 2;

/**
 * @constant
 * @type {int}
 * @default
 */
exports.ITALIC = 3;

/**
 * @constant
 * @type {int}
 * @default
 */
exports.UNDERSCORE = 4;

/**
 * @constant
 * @type {int}
 * @default
 */
exports.BLINK = 5;

/**
 * @constant
 * @type {int}
 * @default
 */
exports.BLINKFAST = 6;

/**
 * @constant
 * @type {int}
 * @default
 */
exports.REVERSE = 7;

/**
 * @constant
 * @type {int}
 * @default
 */
exports.HIDDEN = 8;

var buildFgFn = function (input) {
	return function (text) {
		return color.fg(text, input);
	};
};

/* CONVENIENCE FUNCTIONS */

/**
 * Make text black.
 * @function
 * @param {string}
 * @return {string}
 */
exports.black = buildFgFn(color.BLACK);

/**
 * Make text red.
 * @function
 * @param {string}
 * @return {string}
 */
exports.red = buildFgFn(color.RED);

/**
 * Make text green.
 * @function
 * @param {string}
 * @return {string}
 */
exports.green = buildFgFn(color.GREEN);

/**
 * Make text yellow.
 * @function
 * @param {string}
 * @return {string}
 */
exports.yellow = buildFgFn(color.YELLOW);

/**
 * Make text blue.
 * @function
 * @param {string}
 * @return {string}
 */
exports.blue = buildFgFn(color.BLUE);

/**
 * Make text magenta.
 * @function
 * @param {string}
 * @return {string}
 */
exports.magenta = buildFgFn(color.MAGENTA);

/**
 * Make text cyan.
 * @function
 * @param {string}
 * @return {string}
 */
exports.cyan = buildFgFn(color.CYAN);

/**
 * Make text white.
 * @function
 * @param {string}
 * @return {string}
 */
exports.white = buildFgFn(color.WHITE);

/* METHODS */

/**
 * Set the foreground color for a string.
 *
 * @example
 * term.color.fg('Warning', term.color.YELLOW);
 *
 * @param {string} text Some text
 * @param {int} fg Foreground color
 * @return {string}
 */
exports.fg = function (text, fg) {
	return term.CSI + FG + term.val(fg) + END +
	       text +
	       term.CSI + color.RESET + END;
};

/**
 * Set the background color for a string.
 *
 * @example
 * term.color.bg('Failed', term.color.RED);
 *
 * @param {string} text Some text
 * @param {int} bg Background color
 * @return {string}
 */
exports.bg = function (text, bg) {
	return term.CSI + BG + term.val(bg) + END +
	       text +
	       term.CSI + color.RESET + END;
};