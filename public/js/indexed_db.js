let db;
// create a new db request for a "BudgetDB" database.ex17
const request = window.indexedDB.open("budget_db", 1);

request.onupgradeneeded = function (event) {
  // create object store called "BudgetStore" and set autoIncrement to true ex19
  const db = event.target.result;

  const objectStore = db.createObjectStore( "budget_store", { autoIncrement: true } );

};

request.onsuccess = function (event) {
  db = event.target.result;
  console.log( ':>> db open req success: ' );
  console.log( ':>> ' + db.name );

  if ( window.navigator.onLine ) {
    checkDatabase();
  }
};

request.onerror = function (event) {
  // log error here
  console.log(`:>> Error: ${event.target.errorCode}`);
};

function saveRecord(record) {
  // create a transaction on the pending db with readwrite access
  var trans = db.transaction("pending", "readwrite");
  // access your pending object store
  var objectStore1 = trans.objectStore("foo")
  
  var newItem = [ { description: "budget activity", amount: 1, category: "in", } ];
  
  // add record to your store with add method.
  objectStore1.add( new_item[ 0 ] );
  
}

function checkDatabase() {
  // open a transaction on your pending db
  // access your pending object store
  // get all records from store and set to a variable

  getAll.onsuccess = function () {
    if (getAll.result.length > 0) {
      fetch('/api/transaction/bulk', {
        method: 'POST',
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then(() => {
          // if successful, open a transaction on your pending db
          // access your pending object store
          // clear all items in your store
        });
    }
  };
}

// listen for app coming back online
window.addEventListener('online', checkDatabase);


// https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction
