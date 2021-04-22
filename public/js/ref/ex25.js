 const request = window.indexedDB.open("toDoList", 1);

      // Create schema
      request.onupgradeneeded = event => {
        const db = event.target.result;

        // Creates an object store with a listID keypath that can be used to query on.
        const toDoListStore = db.createObjectStore("toDoList", {
          keyPath: "listID"
        });
        // Creates a statusIndex that we can query on.
        toDoListStore.createIndex("statusIndex", "status");
      };

      // Opens a transaction, accesses the toDoList objectStore and statusIndex.
      request.onsuccess = () => {
        const db = request.result;
        const transaction = db.transaction(["toDoList"], "readwrite");
        const toDoListStore = transaction.objectStore("toDoList");
        const statusIndex = toDoListStore.index("statusIndex");
  
        // Adds data to our objectStore
        toDoListStore.add({ listID: "1", status: "complete" });
        toDoListStore.add({ listID: "2", status: "in-progress" });
        toDoListStore.add({ listID: "3", status: "in-progress" });
        toDoListStore.add({ listID: "4", status: "backlog" });

        // Opens a Cursor request and iterates over the documents.
        const getCursorRequest = toDoListStore.openCursor();
        getCursorRequest.onsuccess = e => {
          // CODE HERE
        };
      };
