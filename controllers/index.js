const router = require( 'express' ).Router();
const Transaction = require( "../models/Transaction" );
const demo = require( '../demo' );

router.post("/api/transaction/bulk", ( req, res) => {
  Transaction.insertMany(req.body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
} );

router.get('/api/transaction/delete/:id', async (req, res) => {
  const deleted = await Transaction.findByIdAndDelete(  req.params.id  ).j( true ).catch( e => console.log( e ) );
  
  // res.json( deleted );
  res.redirect( req.header( 'Referer' ) );

});

router.post( '/api/transaction/update/:id', async ( req, res ) => {
  const updated = await Transaction.findByIdAndUpdate( req.params.id, { ...req.body } ).catch( e => console.log( e ) );
  
  // res.json( updated );
  res.redirect(req.header('Referer'));

});


router.get( '/', async ( req, res ) => {
  let all = null;

  const mods = await Transaction
    .find( {} )
    .sort( {
      date: -1
    } )
    .catch( e => console.log( e ) );
  try {
    if ( mods.length ) {
      all = mods.map( ( d ) => {
        return {
          ...d.toJSON(),
        }
      } );
    } else {
      all = demo.map( ( d ) => {
        return {
          ...d,
        }
      } );
    }

  } catch ( error ) {
    console.log( '\n' + error );

    all = demo.map( ( d ) => {
      return {
        ...d,
      }
    } );
  }


  res.render( 'dashboard', {
    data: all,
  } );
} );

router.get( "/api/transaction/seed", async ( req, res ) => {
  const existing = await Transaction.find( {} ).catch( e => console.log( e ) );

  if ( existing.length ) {
    const msg = {
      status: "records exist, no seeding necessary"
    };
    res.json( msg );

  } else {

    const bulk = await Transaction
      .insertMany( demo )
      .catch( e => console.log( e ) );

    res.redirect( '/' );

  }
} );


router.post( "/api/transaction", async ( req, res ) => {
  const t = await Transaction
    .create( req.body )
    .catch( e => console.log( e ) );

  console.log( 't :>> ', t );
  res.json( t );
  // res.redirect(req.header('Referer'));
} );

router.get( "/api/transaction", async ( req, res ) => {
  const mods = await Transaction.find( {} )
    .sort( {
      date: -1
    } ).catch( e => console.log( e ) );

  res.json( mods );
} );

router.get( "/api/transaction/demo", async ( req, res ) => {
  res.json( demo )
} );

module.exports = router;
