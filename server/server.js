import express from "express";
import fs from "fs";
import cors  from 'cors';
import { createServer } from "http";
import { Server } from "socket.io";

const port = 4000;
const host = "localhost";
const corsOrigin = "http://localhost:3000";
const app = express();
const myServer = createServer(app);

const io = new Server(myServer, {
  cors: {
    origin: corsOrigin,
    credentials: false,
  },
});
app.use(cors({origin:corsOrigin}))

app.get("/", (_, res) => res.send(`Server is up and running`));

var data = JSON.parse(fs.readFileSync(process.cwd() + "/compendium.json"));

const jsonfile = {
  masha: 22,
  kartosha: "33",
};

app.get("/compendium", (req, res) => {
  const name = req.query.name;
  res.send(data.compendium.filter((x) => x.name.includes(name)));
});

app.post("/compendium", (req, res) => {
  const item = req.body;
  data.compendium.push({...item,id: data.length})
  fs.writeFile(process.cwd() + "/compendium.json",data);
  res.send(data);
});

myServer.listen(port, host, () => {});
