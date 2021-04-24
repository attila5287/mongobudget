let db;
// create a new db request for a "BudgetDB" database.
let version_no = 21;
// todo1
const request = indexedDB.open( 'budget_db', version_no );
// todo2 ex19
request.onupgradeneeded = function (event) {
  console.log(':>> indexedDB version needs upgrade');
  // create object store called "BudgetStore" and set autoIncrement to true
  db = event.target.result;

  db.createObjectStore( "pending", {
    autoIncrement: true
  } );
  
};

request.onsuccess = function ( event ) {
  console.log(':>> indexedDB request success');
  db = event.target.result;
  
  if (navigator.onLine) {
    checkDatabase();
  }
};

request.onerror = function (event) {
  console.log(':>> indexedDB request error');
  // log error here
  console.log( 'error :>> ', event.target.errorCode );
  
  document.getElementById( 'indexedDB_error' ).innerText( event.target.errorCode );

};

function saveRecord ( record ) {// ex22
  console.log( ':>> indexedDB saving record' );
  
  db.createObjectStore( "pending", {
    autoIncrement: true
  } );
  // create a transaction on the pending db with readwrite access
  const transaction = db.transaction( [ 'pending' ], "readwrite" );
  
  // access your pending object store
  const obj_store = transaction.objectStore('pending');
  
  // add record to your store with add method.
  obj_store.add(record);
}

function checkDatabase() {
  console.log( ':>> indexedDB check for pending transactions' );
  // open a transaction on your pending db
  const transaction = db.transaction( [ 'pending' ], "readwrite" );
  
  // access your pending object store
  const obj_store = transaction.objectStore('pending');

  // get all records from store and set to a variable
  const getAll = obj_store.getAll();
  console.log(':>> indexedDB get all pending records',getAll);
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
