import express from "express";
import cors from 'cors'
import apiRouter from './routes/index.js'

const app = express();
const port = process.env.PORT || 5000

app.use(cors({
    origin: ["https://frontend-git-main-school-saver.vercel.app", "https://ubiquitous-bonbon-316cbf.netlify.app"],
    methods: ["GET", "POST", "PATCH", "DELETE"]
}));
app.options('*', cors({
    origin: ["https://frontend-git-main-school-saver.vercel.app", "https://ubiquitous-bonbon-316cbf.netlify.app"],
    methods: ["GET", "POST", "PATCH", "DELETE"]
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', apiRouter)

app.get('/')
console.log(port)
app.listen(port);