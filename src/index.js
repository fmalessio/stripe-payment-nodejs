const express = require('express');
const expresshbs = require('express-handlebars');
const path = require('path');
const { domain, port } = require('./config');

// App init
const app = express();

// Settings
app.set('views', path.join(__dirname, 'views'));

// Handlebars settings
app.engine('.hbs', expresshbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');


// Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Routes
app.use(require('./routes/routes'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));


// Listen on port
app.listen(port, ()=> {
    console.log(`Server started ${domain}`);
});
