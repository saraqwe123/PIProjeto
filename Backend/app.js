import express from "express"
import cors from "cors"
import axios from "axios"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}))
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Servidor ON")
})

app.listen(port, () => {
    console.log(`servidor rodando em localhost:${port}`)
})