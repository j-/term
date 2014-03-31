# term

Terminal escape codes.

http://en.wikipedia.org/wiki/ANSI_escape_code

## Installing

With [npm](http://npmjs.org/):

```sh
$ npm install git://github.com/j-/term.git
```

## Documentation

[View online documentation](http://j-.github.io/term).

This project utilizes [JSDoc 3](http://usejsdoc.org/) (on [GitHub](https://github.com/jsdoc3/jsdoc)).

Documentation can be generated with this command:

```sh
$ jsdoc -u docs/tutorials -d docs/out
```

## Modules

The `term` repo comes with several modules.

### term.clear

Clears text relative to the cursor.

### term.scroll

Used for scrolling the terminal window.

### term.color

Manipulate the foreground color, background color and text style of any terminal output.

### term.cursor

Move the cursor around the window.

## Use

You can `require` the entire library to import all modules.

```js
var term = require('term');
term.color.green('Success');
```

Alternatively you can import one module at a time.

```js
var color = require('term/color');
color.green('Success');
```

## License

[MIT license](LICENSE).
