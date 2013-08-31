var term = require('./core');

/**
 * @module term.cursor
 */
module.exports = {
	/**
	 * Move cursor to a position. `row` and `col` are optional. If these parameters are
	 * not provided the cursor will move to the home position at the upper left of the
	 * screen.
	 *
	 * @param {int=} row Optional. Row position of cursor.
	 * @param {int=} col Optional. Column position of cursor.
	 * @return {string}
	 */
	home: function (row, col) {
		return term.CSI + term.val(row) + term.SEP + term.val(col) + 'H';
	},
	
	/**
	 * Move cursor up `count` rows. The default count is 1.
	 *
	 * @param {int=} count Optional
	 * @return {string}
	 */
	up: function (count) {
		return term.CSI + term.val(count) + 'A';
	},
	
	/**
	 * Move cursor down `count` rows. The default count is 1.
	 *
	 * @param {int=} count Optional
	 * @return {string}
	 */
	down: function (count) {
		return term.CSI + term.val(count) + 'B';
	},
	
	/**
	 * Move cursor forward `count` columns. The default count is 1.
	 *
	 * @param {int=} count Optional
	 * @return {string}
	 */
	forward: function (count) {
		return term.CSI + term.val(count) + 'C';
	},
	right: this.forward,
	
	/**
	 * Move cursor back `count` columns. The default count is 1.
	 *
	 * @param {int=} count Optional
	 * @return {string} Term
	 */
	back: function (count) {
		return term.CSI + term.val(count) + 'D';
	},
	left: this.back,
	
	/**
	 * Save the current cursor position. Can be restored later.
	 *
	 * @see unsave
	 * @return {string}
	 */
	save: function () {
		return term.CSI + 's';
	},
	
	/**
	 * Restores the last saved cursor position.
	 *
	 * @see save
	 * @return {string}
	 */
	unsave: function () {
		return term.CSI + 'u';
	},
	reset: this.unsave,
	
	/**
	 * Hides the cursor.
	 *
	 * @return {string}
	 */
	hide: function () {
		return term.CSI + '?25l';
	},
	
	/**
	 * Shows the cursor.
	 *
	 * @return {string}
	 */
	show: function () {
		return term.CSI + '?25h';
	}
};