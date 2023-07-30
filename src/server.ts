
import express from 'express'
import dotenv from 'dotenv';
import { router } from "./router"

const app = express();
const port = process.env.PORT;
import cors from 'cors';

dotenv.config();
app.use(express.json())

app.use(cors({ origin: ['http://localhost:3000'] }))


app.use(router)


app.listen(port, () => console.log(`server running on port ${port}`))