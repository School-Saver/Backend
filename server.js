import express from "express";
import cors from 'cors'
import apiRouter from './routes/index.js'

const app = express();
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://ubiquitous-bonbon-316cbf.netlify.app/"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});




app.use('/api/v1', apiRouter)

app.get('/')
console.log(port)
app.listen(port);