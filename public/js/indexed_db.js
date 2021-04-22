// ex 17: opening indexed db
const request = window.indexedDB.open("budget", 1);
// req is the connection name

// ex 18 creating obj stores, MDN docs, no destructuring
// Create an object store inside the onupgradeneeded method.
request.onupgradeneeded = ( event ) => {
  // create a new db request for a "BudgetDB" database.
  const db = event.target.result;
  
  // MDN docs + solved
  const objectStore = db.createObjectStore( "pending", { autoIncrement: true } );
  
};


// ex 22 access all, assign to a var
// Opens a transaction, accesses the budget objectStore and statusIndex.
let db;

request.onsuccess =  (event) => {
  console.log( ':>> db open req success: ' );
  console.log( ':>> ' + request.result.name );
  db = event.target.result;

  if (navigator.onLine) {
    checkDatabase();
  }
};

request.onerror = function (event) {
  // log error here
  if (error) {
  console.error();  
  }
};

function saveRecord(record) {
  // create a transaction on the pending db with readwrite access
  const db = request.result;
  // const objectStore = db.createObjectStore("pending");  
  // access your pending object store
  // const transaction = db.transaction( [ "pending" ], "readwrite" );

  // add record to your store with add method.
}

function checkDatabase() {
  // open a transaction on your pending db
  // access your pending object store
  // get all records from store and set to a variable
  // const db = request.result;
  // const transaction = db.transaction( [ "budget" ], "readwrite" );
  // const getAll   = transaction.objectStore( "budget" );
  const getAll   = null;

  // getAll.onsuccess = function () {
  //   if (getAll.result.length > 0) {
  //     fetch('/api/transaction/bulk', {
  //       method: 'POST',
  //       body: JSON.stringify(getAll.result),
  //       headers: {
  //         Accept: 'application/json, text/plain, */*',
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then(() => {
  //         // if successful, open a transaction on your pending db
  //         // access your pending object store
  //         // clear all items in your store
  //       });
  //   }
  // };
}

// listen for app coming back online
window.addEventListener('online', checkDatabase);


