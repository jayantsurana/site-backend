const express = require('express');
const app = express();
const port = 4000;


var Models = require('./models/person.js');
var Person = Models.person;
var sequelize = require('./db.js').sequelize;
//var mysql = require('mysql');
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.get('/', function(req, res) {
  Person.findAll().then(per => {
    res.send(per);
  })


//   sequelize.query("SELECT * FROM jayantbhai.press").then(press => {
//     res.send(press);
// })
});

app.get('/person', function(req, res) {
  console.log(req.query.name);
  let queryName = req.query.name;
  Person.findOne({
    where:{
      name:queryName
    }
  }).then(person => {
    res.send(person);
  })
});

app.post('/person', function(req, res) {
  console.log(req.body.name);
  let queryName = req.body.name;
  Person.findOne({
    where:{
      name:queryName
    }
  }).then(person => {
    res.send(person);
  })
});
app.listen(port, () => console. log(`Example app listening on port ${port}!`));



// const Person = sequelize.define('person', {});
// const Person = sequelize.define('person', {
//   name: {
//     type: Sequelize.STRING
//   }
// },
// {
//     timestamps: false,
//     underscored: true,
//     freezeTableName: true,
//     tableName: 'person'
// });

// const Sequelize = require('./db.js').Sequelize;
// const User = sequelize.define('user', {
//   firstName: {
//     type: Sequelize.STRING
//   },
//   lastName: {
//     type: Sequelize.STRING
//   }
// });
//
// User.sync({force: true}).then(() => {
//   // Table created
//   return User.create({
//     firstName: 'John',
//     lastName: 'Hancock'
//   });
// });
// Press.sync({force: true}).then(() => {
//   // Table created
//   return;
// });

//var Mapper = require('mapper');
//var conn = { user: 'root', password: 'root', database: 'jayantbhai', host: "localhost"};

// var Comment = Mapper.map("Comments")
//   , Post = Mapper.map("Posts", "id");
//
// Mapper.connect(conn, {verbose: true, strict: false});
//
// app.get('/', function(req, res){
//   var sql = 'SELECT * FROM jayantbhai.person';
// });

//
// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "jayantbhai"
// });
//
//
//
//
//
// app.get('/', function(req, res) {
//   // var globe = [];
//   connection.connect();
//   connection.query('SELECT * FROM jayantbhai.person', function (error, results, fields){
//     if (error) throw error;
//     console.log('The solution is: ', results);
//     res.send(results);
//   });
//
//   connection.end();
// });
