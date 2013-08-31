/**
 * Common components for all terminal sequences.
 * @namespace term
 */
var term = module.exports = {};

/**
 * Takes a value and returns it as a string. `undefined` or `null` values are represented
 * as an empty string. `toString()` is invoked on all other values.
 *
 * @memberOf term
 * @param {?*=} val Any value
 * @return {string}
 */
term.val = function (val) {
	if (val === undefined || val === null) {
		return '';
	}
	else {
		return val.toString();
	}
};

term.NUL = String.fromCharCode(0); // Fill character; ignored on input.
term.ENQ = String.fromCharCode(5); // Transmit answerback message.
term.BEL = String.fromCharCode(7); // Ring the bell.
term.BS = String.fromCharCode(8); // Move cursor left.
term.HT = String.fromCharCode(9); // Move cursor to next tab stop.
term.LF = String.fromCharCode(10); // Line feed; causes print if in autoprint.
term.VT = String.fromCharCode(11); // Same as LF.
term.FF = String.fromCharCode(12); // Same as LF.
term.CR = String.fromCharCode(13); // Move cursor to left margin or newline.
term.SO = String.fromCharCode(14); // Invoke G1 character set.
term.SI = String.fromCharCode(15); // Invoke G0 character set.
term.XON = String.fromCharCode(17); // Resume transmission.
term.XOFF = String.fromCharCode(19); // Halt transmission.
term.CAN = String.fromCharCode(24); // Cancel escape sequence and display checkerboard.
term.SUB = String.fromCharCode(26); // Same as CAN.
term.DEL = String.fromCharCode(127); // Fill character; ignored on input.

/**
 * ASCII escape character (#27, 0x1b).
 * @memberOf term
 * @constant
 * @type {string}
 */
term.ESC = String.fromCharCode(27);

/**
 * Control Sequence Introducer.
 * @memberOf term
 * @constant
 * @type {string}
 */
term.CSI = term.ESC + '[';

/**
 * Parameter separator.
 * @memberOf term
 * @constant
 * @type {string}
 * @default
 */
term.SEP = ';';