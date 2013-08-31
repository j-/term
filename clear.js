var term = require('./core');

/**
 * @module clear
 */
module.exports = {
	/**
	 * Clear all text to the right of the cursor.
	 *
	 * @return {string}
	 */
	right: function () {
		return term.CSI + 'K';
	},
	
	/**
	 * Clear all text to the left of the cursor.
	 *
	 * @return {string}
	 */
	left: function () {
		return term.CSI + '1K';
	},
	
	/**
	 * Clear all text on the line the cursor is on.
	 *
	 * @return {string}
	 */
	line: function () {
		return term.CSI + '2K';
	},
	
	/**
	 * Clear all text from the cursor down.
	 *
	 * @return {string}
	 */
	down: function () {
		return term.CSI + 'J';
	},
	
	/**
	 * Clear all text from the cursor up.
	 *
	 * @return {string}
	 */
	up: function () {
		return term.CSI + '1J';
	},
	
	/**
	 * Clear the entire screen.
	 *
	 * @return {string}
	 */
	all: function () {
		return term.CSI + '2J';
	},
	screen: this.all
};