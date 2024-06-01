---
title: Top-level Async Function on Node.js
tags:
  - LittleBits
publishedAt: 2024-06-01T18:40:00+03:00
isFeatured: true
excerpt: There might be times that before starting the server you have to do some initialization. If this initialization process is asynchronous we can use `async` lambda function declaration and IIFE.
---

There might be times that before starting the server you have to do some initialization. If such initialization function is synchronous easy-peasy. But if it must be asynchronous you can have the following anonymous async function to be able to `await` inside;

```js
// index.js

async function start() {
  // Can use `await` here
}

start();
```

Or more compact version of it as;

```js
// index.js

(async () => {
  // Can use `await` here
})();
```

In the 2nd snippet we used anonymous lambda function and [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE).
