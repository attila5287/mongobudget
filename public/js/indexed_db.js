// ex 17: opening indexed db
const request = window.indexedDB.open("budget", 1);


// ex 18 creating obj stores, MDN docs, no destructuring
// Create an object store inside the onupgradeneeded method.
request.onupgradeneeded = ( event ) => {
  const db = event.target.result;
  
  // mdn docs + solved
  const objectStore = db.createObjectStore( "pending", { autoIncrement: true, unique: false } );
  
  
};




request.onsuccess = event => {
  console.log( ':>> db open req success: ' );
  console.log( ':>> ' + request.result.name );
  
  console.log(':>> obj created');
};



