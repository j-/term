var _ = require('underscore');
var core = require('./core');
var term = _.extend({}, core);
module.exports = term;

term.clear = require('./clear');
term.color = require('./color');
term.cursor = require('./cursor');
term.scroll = require('./scroll');