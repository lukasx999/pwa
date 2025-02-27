import express from "express";
import cors from "cors";
import https from "https";
import fs from "fs";
const app = express();
const PORT_HTTPS = 3000;
const PORT_HTTP = 4000;
app.use(cors());
app.use(express.static("../docs/"));
app.use(express.json());
let messages = [];
messages.push({
    author: "John Doe",
    time: "now",
    content: "sup",
});
app.get('/messages', (_req, res) => {
    res.json(messages);
});
app.post('/send', (req, _res) => {
    const body = req.body;
    body.time = new Date().toTimeString().slice(0, 8);
    messages.push(body);
});
const key = fs.readFileSync('./certs/selfsigned.key');
const cert = fs.readFileSync('./certs/selfsigned.crt');
const options = {
    key: key,
    cert: cert
};
const server = https.createServer(options, app);
server.listen(PORT_HTTPS, () => {
    console.log(`Example app listening on port ${PORT_HTTPS} over https`);
});
app.listen(PORT_HTTP, () => {
    console.log(`Example app listening on port ${PORT_HTTP} over http`);
});
