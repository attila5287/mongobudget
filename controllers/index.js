const router = require( 'express' ).Router();
// const path = require( 'path' );

// const apiRoutes = require( './api' );
// router.use( '/api', apiRoutes );

const  Transaction  = require( '../models' );
const  demo  = require( '../demo' );

router.get('/', (req, res) => {
    res.render( 'dashboard', { data : demo , keys : Object.keys(demo[0]) } );
});

router.post('/new', (req, res) => {
    res.json( req.body );
    
});
module.exports = router;
