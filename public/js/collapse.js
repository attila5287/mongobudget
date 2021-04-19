let coll_chrt_collapsed = false;
$( '#coll_chrt_button' )
  .on( "click", () => {
    if ( coll_chrt_collapsed ) {
      coll_chrt_collapsed = false;
      $( "#coll_chrt_icon" ).removeClass( "fa-chevron-up" );
      $( "#coll_chrt_icon" ).addClass( "fa-chevron-down" );
    } else {
      coll_chrt_collapsed = true;
      $( "#coll_chrt_icon" ).removeClass( "fa-chevron-down" );
      $( "#coll_chrt_icon" ).addClass( "fa-chevron-up" );
    }


  } );
let coll_tabl_collapsed = false;
$( '#coll_tabl_button' )
  .on( "click", () => {
    if ( coll_tabl_collapsed ) {
      coll_tabl_collapsed = false;
      $( "#coll_tabl_icon" ).removeClass( "fa-chevron-up" );
      $( "#coll_tabl_icon" ).addClass( "fa-chevron-down" );
    } else {
      coll_tabl_collapsed = true;
      $( "#coll_tabl_icon" ).removeClass( "fa-chevron-down" );
      $( "#coll_tabl_icon" ).addClass( "fa-chevron-up" );
    }


  } );
