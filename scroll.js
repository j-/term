var term = require('./core');

/**
 * @module scroll
 */
module.exports = {
	/**
	 * Turn the whole screen into a scrollable region.
	 *
	 * @return {string}
	 */
	all: function () {
		return term.CSI + 'r';
	},
	
	/**
	 * Turn the rows between `start` and `end` into a scrollable region.
	 *
	 * @param {int} start First row to scroll
	 * @param {int} end Last row to scroll
	 * @return {string}
	 */
	rows: function (start, end) {
		return term.CSI + term.val(start) + term.SEP + term.val(end) + 'r';
	},
	
	/**
	 * Scroll display down one line.
	 *
	 * @return {string}
	 */
	down: function () {
		return term.ESC + 'D';
	},
	
	/**
	 * Scroll display up one line.
	 *
	 * @return {string}
	 */
	up: function () {
		return term.ESC + 'M';
	}
};