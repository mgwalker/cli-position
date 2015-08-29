# cli-position

Sets the current position of the CLI or modifies it relative to its current position.

## Installation

```bash
npm install --save cli-position
```

## Usage

Exports a single object.  Just require it to get the object:

```javascript
var pos = require("cli-position");
```

|Function|Description|
|---:|:---|
|**`.columns()`**|Returns the number of columns in the CLI
|**`.rows()`**|Returns the number of rows in the CLI
|**`.center()`**|Centers the cursor in the CLI.  Returns the object for chaining.
|**`.moveTo(x, y)`**|Moves the cursor to the specified location; doesn't check for validty, just rolls with it.  Returns the object for chaining.
|**`.moveUp(rows)`**|Moves the cursor up the specified number of rows.  If the number is negative, moves down instead.  Returns the object for chaining.
|**`.moveDown(rows)`**|Moves the cursor down the specified number of rows.  If the number is negative, moves up instead.  Returns the object for chaining.
|**`.moveLeft(columns)`**|Moves the cursor left the specified number of columns.  If the number is negative, moves right instead.  Returns the object for chaining.
|**`.moveRight(columns)`**|Moves the cursor right the specified number of columns.  If the number is negative, moves left instead.  Returns the object for chaining.