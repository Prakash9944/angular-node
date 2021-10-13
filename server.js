const express = require ('express');
const app = express();
const routes = require("./api/routes/router");
const connectDB = require ("./db/database");
const cookieParser = require ("cookie-parser");
const User = require ("./models/users");
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser')
connectDB();

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(function(req, res, next){
    res.header("access-Control-Allow-Orgin","4200");
    res.header("access-Control-Allow-Orgin","Orgin,X-Requested-With, Content-Type, Accept")
    next();
})

// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// app.use('/api', routes);
// app.listen(5000, function () {
//     // console.log(`server started....`);
// });


// for(let i= 0; i< array.length; i ++) {
//     // console.log('this is array', array[i]);
// }

// for(let i= 0; i< array.length; i ++) {
//     // console.log('second is array', array[i]);
// }

// for(let i= 0; i< array.length; i ++) {
//     // console.log('third is array', array[i]);
// }


// var getAllUsers = async function (req, res) {

//     try {
//         var user = await User.find({});
//         // console.log('user')
//         res.send(user);

//      } catch (err) {
//          // res.status(500).send(err);
//      }

// }

// for(let i= 0; i< array.length; i ++) {
//     // console.log('fifth is array', array[i]);
// }


// for(let i= 0; i< array.length; i ++) {
//     // console.log('fourth is array', array[i]);
// }

// getAllUsers();
// // console.log('seventh after ')

// for(let i= 0; i< array.length; i ++) {
//     // console.log('eight is array', array[i]);
// }





// var events = require('events');
// var eventEmitter = new events.EventEmitter();
// eventEmitter.on('hellos', function (data) {
//     console.log('data', eventEmitter.emit);
// });
// // console.log('ninth is asynchrounus', eventEmitter)

// eventEmitter.on('hello', function (data) {
//     console.log('data', data);
//     eventEmitter.emit('hellos', callfucn(data))
// });

// function callfucn (arg) {
//     return 5 * arg
// }

// eventEmitter.emit('hello', callfucn(9))
// // console.log('EventEmitter', eventEmitter)