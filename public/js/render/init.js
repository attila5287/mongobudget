const render = () => {
  
  $.ajax( {
    type: "GET",
    url: "/api/transaction",
    dataType: "JSON",
    success: ( response ) => {
      console.log( `:>> Total of ${response.length} items fetched from database for table and chart` );

      table_update( response );
      populateChart( response );
    }
  } );
}

render();


