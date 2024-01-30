import express from 'express';
import jsonServer from 'json-server';
import cors from 'cors';
import auth from 'json-server-auth';
import { createServer } from 'http';
import { WebSocketServer , WebSocket} from 'ws';
import { v4 as uuidv4 } from 'uuid';
import { parse } from 'url';

const app = express();
const jsonServerApp = jsonServer.create();
const router = jsonServer.router('db.json'); // 這裡指定你的 JSON 文件路徑
const middlewares = jsonServer.defaults();
const httpServer = createServer(app); // 使用 createServer 創建一個 HTTP 伺服器
const wss = new WebSocketServer({ server: httpServer }); // 將 WebSocketServer 連接到 HTTP 伺服器的相同端口
const port = 8080;

app.use(cors());
jsonServerApp.use(middlewares);
jsonServerApp.use(auth);
jsonServerApp.db = router.db;
app.use('/api', [jsonServerApp, router]);

httpServer.listen(port, () => {
  console.log('Server is running on port', port);
});

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);
  console.log('WebSocket 連線成功');
  const uuid = uuidv4()

  ws.uuid = uuid 

  ws.on('message' , (message) =>{
    const parsedMessage = JSON.parse(message);
    sendAllUser(parsedMessage);
  })
});

function sendAllUser(msg) {
  wss.clients.forEach(function (client) {
    if (client.readyState === WebSocket.OPEN && client.uuid !== msg.uuid) {
      client.send(JSON.stringify(msg)); // Stringify the object before sending
    }
  });
}

app.on('upgrade', function upgrade(req, soc, head) {
  const { pathname } = parse(req.url);

  if (pathname === '/ws') {
    wss.handleUpgrade(req, soc, head, function done(ws) {
      wss.emit('connection', ws, req);
    });
  } else {
    soc.destroy();
  }
});
