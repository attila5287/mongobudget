$.ajax({
  type: "GET",
  url: "/api/transaction",
  dataType: "JSON",
  success: (res) => {
    console.log( `:>> Total of ${res.length} items fetched for table` );
    const icons_category = {
      in :  'fas fa-arrow-up text-success', 
      out :  'fas fa-arrow-down text-danger', 
    };

    res.forEach( rec => { // each record
      
      const row = $( '<tr>' );
      const icon = $( '<i>' )
        .attr( 'class', icons_category[ rec.category ] );
      const collapse_btn = $( '<button>' )
        .attr( 'class', 'btn btn-sm btn-primary' )
        .attr( 'type',  'button')
        .attr( 'data-toggle', 'collapse')
        .attr( 'data-target', '#row' + rec._id )
        .attr( 'aria-controls', 'row' + rec._id )
        .attr( 'aria-expanded', false)
        ;
      const icon_btn = $( '<i>' ).attr( 'class', 'fas fa-chevron-up');
      collapse_btn.append( icon_btn );
      
      row.append( $( '<td>' ).append(icon) );
      row.append( $( '<td>' ).append(rec.description) );
      row.append( $( '<td>' ).append(rec.amount) );
      row.append( $( '<td>' ).append(rec.category) );
      row.append( $( '<td>' ).append(rec.date) );
      row.append( $( '<td>' ).append( collapse_btn  ));
      
      
      
      $( '#table_body' ).append( row );
      
    });
  }
});
