# mongobudget
node-js app with express-js framework, mongo-db, mongoose 


 Mini Project
===

> * 0:  *Add External JS file*
- [x] - Implement IndexedDB so the budget tracker persists data. Write all of your IndexedDB code in `public/indexed_db.js`.

<br>

> * 1: *Create an instance*
---
- [x] - Create a new db request for a `budget` database.

<br>

> * 2: request.`onupgradeneeded()`, 
---
- [x] -  Create an object store called `pending` and set `autoIncrement` to `true`.


<br>

> * 3: function *`saveRecord()`*
---
- [x] - Create a transaction on the `pending` object store with `readwrite` access.

- [x] - Access your pending object store.

- [x] - Add a record to your store with the `add` method.


<br>

> * 4: function *`checkDatabase()`*
- [ ] - Open a transaction on your `pending` object store.

- [ ] - Access your `pending` object store.

- [ ] - **Get all records** (*getAll*) from store and set to a variable.

<br>

> * 5: `getAll.onsuccess()`
---
- [ ] - If successful, open a transaction on your `pending` object store.
- [ ] - Access your `pending` object store.
- [ ] - Clear all items in your store.

<br>

> * 6: *Bonus*
---
- [ ] - Create a button that resets all funds to zero in your indexedDB.

***

<br>

| ![dev]( https://raw.githubusercontent.com/attila5287/img_readme/main/all/dev.jpg "dev-icon") | About Developer | 
| -------------   | -------------: |
| Repos | [github.com/attila5287 ](https://github.com/attila5287/) |
| Profile | [ attila5287.github.io ](https:///attila5287.github.io/) |
| Email    |  atiturkoz@hotmail.com | 


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

