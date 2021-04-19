const router = require( 'express' ).Router();
const Transaction = require( "../models/Transaction" );
const demo = require( '../demo' );

router.get( '/', async ( req, res ) => {
try {
  const mods = await Transaction
    .find( {} )
    .sort( {
      date: -1
    } );


  const icons = {
    in: 'arrow-up text-success',
    out: 'arrow-down text-danger'
  };
  const all = mods.map( ( d ) => {
    return {
      ...d.toJSON(),
      icon: icons[ d.category ]
    }
  } );
  
} catch (error) {
  res.status( 400 ).json( err )
}
  res.render( 'dashboard', {
    data: all,
    icons: icons
  } );
} );

router.get( "/api/transaction/seed", async ( req, res ) => {
  const db_records = await
    Transaction.find( {} )
    .catch( e => console.log( e ) );
    
    console.log( db_records.length );

  if ( db_records.length >0) {
    const msg = { status: 'records exists' };
    
    res.json(msg);

  } else {

    const bulk = await Transaction
      .insertMany( demo )
      .catch( err => res.status( 400 ).json( err ) );

    res.json( bulk );
  }
} );

router.get( "/api/transaction", ( req, res ) => {
  Transaction.find( {} )
    .sort( {
      date: -1
    } )
    .then( dbTransaction => {
      res.json( dbTransaction );
    } )
    .catch( err => {
      res.status( 400 ).json( err );
    } );
} );

router.post( "/api/transaction", async ( req, res ) => {
  const t = await Transaction
    .create( req.body )
    .catch( e => console.log( e ) );

  console.log( 't :>> ', t );
  res.json( t );

} );
module.exports = router;
