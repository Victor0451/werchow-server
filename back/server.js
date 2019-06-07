const express = require('express');
const bodyparser = require('body-parser')
const cors = require('cors');
const morgan = require('morgan');


// settings

const app = express();
app.use(morgan('dev'));

app.use(cors());
app.set('port', process.env.PORT || 3002);

//middlewares
app.use(bodyparser.json());

//Routes
app.use(require('./routes/maestro'));
app.use(require('./routes/aderhente'));
app.use(require('./routes/campañas'));



// server escuchando

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});



