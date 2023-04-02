import express from "express";
import cors from 'cors'
import apiRouter from './routes/index.js'

const app = express();
const port = process.env.PORT || 5000

app.use(cors({
    origin: "https://frontend-git-main-school-saver.vercel.app",
    methods: ["GET", "POST", "PATCH", "DELETE"]
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Vercel config
app.use(async function fn (req, res) {
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
    if (req.method === 'OPTIONS') {
      res.status(200).end()
      return
    }
    return await fn(req, res)
})


app.use('/api/v1', apiRouter)

app.get('/')
console.log(port)
app.listen(port);