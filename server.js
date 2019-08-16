const express = require('express');
const bodyparser = require('body-parser')
const cors = require('cors');
const morgan = require('morgan');
const db = require('./db/database')


// settings

const app = express();
app.use(morgan('dev'));

app.use(cors());
app.set('port', process.env.PORT || 5002);

//middlewares
app.use(bodyparser.json());
app.use('*', cors())


//Routes

app.use('/api/maestro', require('./routes/maestro'));
app.use('/api/adherent', require('./routes/aderhente'));
app.use('/api/campañas', require('./routes/campañas'));
app.use('/api/pagos', require('./routes/pagos'));
app.use('/api/pagobco', require('./routes/pagos_bco'));
app.use('/api/memo', require('./routes/memo'));
app.use('/api/historia', require('./routes/historia'));




// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

//Conecting DB

db.sequelize.authenticate()
  .then(() => console.log('Database conected...'))
  .catch((err) => console.log('error' + err));

// server escuchando

app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});



