# promisewaiter
Simple NodeJS async wait function based on promises

## Requires
ES 6+

## Installation
``` npm i promisewaiter ```

## How it works
```
let wait = require('promisewaiter');
wait(500)
.then(() => {
  console.log('Hello world after 500ms!');
});
```