import express from "express"
import fs from 'fs'
import { createServer } from "http"
import { Server } from "socket.io"

const port = 4000
const host = "localhost"
const corsOrigin = "http://localhost:3000"
const app = express()
const myServer = createServer(app)


const io = new Server(myServer, {
  cors: {
    origin: corsOrigin,
    credentials: true,
  },
})

app.get("/", (_, res) =>
  res.send(`Server is up and running`)
)

var data = JSON.parse(fs.readFileSync(process.cwd() + "/compendium.json"));

const jsonfile = {
  masha: 22, 
  kartosha: "33"
}

app.get("/comp", (_, res) =>
  res.send(data)
)

myServer.listen(port, host, () => {
})