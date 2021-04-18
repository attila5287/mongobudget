const helpers = require( './utils/helpers' );
const path = require( 'path' );
const express = require( 'express' );
const exphbs = require( 'express-handlebars' );
const hbs = exphbs.create( {
  helpers
} );
const logger = require( "morgan" );
const mongoose = require( "mongoose" );
const app = express();

const routes = require( './controllers' );
const PORT = process.env.PORT || 3001;

app.use( logger( "dev" ) );
app.use( express.json() );
app.use( express.urlencoded( {
  extended: true
} ) );

const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://test1234:test1234@onetimeonly.bc2oj.mongodb.net/db?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
const collection = client.db("db").collection("budget");
  // perform actions on the collection object
  client.close();
});

app.use( express.static( path.join( __dirname, 'public' ) ) );

app.use( routes );

app.engine( 'handlebars', hbs.engine );
app.set( 'view engine', 'handlebars' );

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
} );

app.listen( PORT, () => console.log( '\n>> Now listening at PORT : ' + PORT ) );
