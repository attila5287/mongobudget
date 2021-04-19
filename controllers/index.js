const router = require( 'express' ).Router();
const Transaction = require( "../models/Transaction" );
const demo = require( '../demo' );

router.get( '/', async ( req, res ) => {

  const mods = await Transaction
    .find( {} )
    .sort( {
      date: -1
    } )
    .catch( e => console.log(e));


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
  // const all = demo.map( ( d ) => {return { ...d, icon: icons[d.category] } } );

  res.render( 'dashboard', {
    data: all,
    icons: icons
  } );
} );

router.get( "/api/transaction/seed", async ( req, res ) => {
  const existing = await Transaction.find( {} );

  if ( existing.length ) {
    const msg = {
      status : "records exist, no seeding necessary"
    }
    res.json( msg );

  } else {
    const bulk = await Transaction
      .insertMany( demo )
      .catch( err => res.status( 400 ).json( err ) );
  
    res.redirect( '/' );
    
  }
} );

router.get( "/api/transaction", async ( req, res ) => {
  const all  = await Transaction.find( {} )
    .sort( {date: -1} ).catch( e => console.log( e ) );
  
    res.json( all );
} );

router.post( "/api/transaction", async ( req, res ) => {
  const t = await Transaction
    .create( req.body )
    .catch( e => console.log( e ) );

  console.log( 't :>> ', t );
  res.json( t );

} );

module.exports = router;
