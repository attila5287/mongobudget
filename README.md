# mongobudget
node-js app with express-js framework, mongo-db, mongoose 


# Mini Project

> *Add External JS file*
- [x] - Implement IndexedDB so the budget tracker persists data. Write all of your IndexedDB code in `public/indexed_db.js`.

<br>

> *Create an instance*
---
- [x] - Create a new db request for a `budget` database.


> request.`onupgradeneeded()`, 
---
- [x] -  Create an object store called `pending` and set `autoIncrement` to `true`.


<br>

> function *`saveRecord()`*
---
- [ ] - Create a transaction on the `pending` object store with `readwrite` access.

- [ ] - Access your pending object store.

- [ ] - Add a record to your store with the `add` method.


<br>

> function *`checkDatabase()`*
---
- [ ] - Open a transaction on your `pending` object store.
- [ ] - Access your `pending` object store.
- [ ] - **Get all records** (*getAll*) from store and set to a variable.

<br>

> `getAll.onsuccess()`
---
- [ ] - If successful, open a transaction on your `pending` object store.
- [ ] - Access your `pending` object store.
- [ ] - Clear all items in your store.

<br>

> *Bonus*
---
- [ ] - Create a button that resets all funds to zero in your indexedDB.
