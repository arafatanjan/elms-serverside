const express= require('express');
require('dotenv').config()
const cors = require('cors');
const morgan = require('morgan');
const app = express();
//  const port = process.env.PORT || 5000;
const ObjectId = require('mongodb').ObjectId;
// import router from './router/Router';
const router=require('./router/Router.js');

/** import connection file */
const connect=require('./database/Conn.js')

/** app middlewares */
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
//  config();

/** appliation port */
 const port = process.env.PORT || 8080;

// connect();


 app.use('/api', router) /**apis */
// app.get('/', (req, res)=> {
//     res.send('simple node server running');
// });

const users = [
    {id: 1, name: 'Sabana'}
]

// app.get('/users', (req, res)=> {
//     res.send(users);
// });

// app.get('/', (req, res) => {
//     try {
//         res.json("Get Request")
//     } catch (error) {
//         res.json(error)
//     }
// })

// app.listen (port, ()=>{
//     console.log (`port ${port}`);
// })

/** start server only when we have valid connection */
connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`)
        })
    } catch (error) {
        console.log("Cannot connect to the server");
    }
    app.get('/', (req, res) => {
        res.send('blah');
      } )

}).catch(error => {
    console.log("Invalid Database Connection");
})