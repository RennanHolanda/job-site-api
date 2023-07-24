
import express from 'express'

const app = express();
const port = 3333

app.use(express.json())

import {router} from "./router"

app.use(router)


app.listen(port, () => console.log(`server running on port ${port}`))