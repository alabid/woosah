/**
 * Module dependencies.
 * app.js -
 * entry to express app.
 *
 */


var express = require("express")
, app = express();

// Global server Configuration
app.configure(function(){
    app.set('views', __dirname + '/views');
    app.engine('html', require('ejs').renderFile);

    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
    app.use(express.errorHandler());
});





/**
 * Routes
 */

app.get('/', function(req, res) {
    res.render('index.html');
});


/** end of ROUTES */

// open a port for this server
app.listen(3033);
