const  form_handler = ( event ) => {
  // does not post data to server thus no page refresh
  event.preventDefault();
  
  console.log( 'test submit' );
  
  const form_data = {
    description: $( '#description' ).val(),
    amount: $( '#amount' ).val(),
    category: $( '#category' ).val(),
    date: Date.now(),
  };
console.log('form_data :>> ', form_data);
$.ajax({
  type: "POST",
  url: "/api/transaction",
  data: form_data,
  dataType: "JSON",
  success: function ( response ) {
    console.log('data :>> ', response);
    
  }
});


}

$( '#new_item_form' ).on( 'submit', form_handler);
