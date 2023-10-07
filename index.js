const express= require('express');
require('dotenv').config()
const cors = require('cors');
const morgan = require('morgan');
const app = express();
// const port = process.env.PORT || 5000;
const ObjectId = require('mongodb').ObjectId;

/** app middlewares */
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
//  config();

/** appliation port */
const port = process.env.PORT || 8080;


// app.get('/', (req, res)=> {
//     res.send('simple node server running');
// });

const users = [
    {id: 1, name: 'Sabana'}
]

// app.get('/users', (req, res)=> {
//     res.send(users);
// });

app.get('/', (req, res) => {
    try {
        res.json("Get Request")
    } catch (error) {
        res.json(error)
    }
})

app.listen (port, ()=>{
    console.log (`portt ${port}`);
})