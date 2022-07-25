const express = require("express");
const port = 2331;
const app = express();
const cors = require("cors");
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, { cors: "*" });
require("./utlis/db");

app.use(cors());
app.use(express.json());

app.use("/api/user", require("./router/userRouter"));
app.use("/api/product", require("./router/productRouter"));

server.listen(port, () => {
  console.log("server is now listening...!");
});
