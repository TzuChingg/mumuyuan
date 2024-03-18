import express from 'express'
import jsonServer from 'json-server'
import cors from 'cors'
import auth from 'json-server-auth'
import { createServer } from 'http'
import { WebSocketServer, WebSocket } from 'ws'
import { v4 as uuidv4 } from 'uuid'
import { parse } from 'url'
import nodemailer from 'nodemailer'
const app = express()
const jsonServerApp = jsonServer.create()
const router = jsonServer.router('db.json') // 這裡指定你的 JSON 文件路徑
const middlewares = jsonServer.defaults()
const httpServer = createServer(app) // 使用 createServer 創建一個 HTTP 伺服器
const wss = new WebSocketServer({ server: httpServer }) // 將 WebSocketServer 連接到 HTTP 伺服器的相同端口
const port = 8080

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  auth: {
    user: 'mumuyuan1234@gmail.com',
    pass: 'zxrj bblj irpw bmfw'
  }
})
app.use(cors())
jsonServerApp.use(middlewares)
jsonServerApp.use(auth)
jsonServerApp.db = router.db
app.use('/api', [jsonServerApp, router])

httpServer.listen(port, () => {
  console.log('Server is running on port', port)
})

wss.on('connection', function connection(ws) {
  ws.on('error', console.error)

  const uuid = uuidv4()
  ws.uuid = uuid

  ws.on('message', (message) => {
    const parsedMessage = JSON.parse(message)
    if (parsedMessage.email) {
      if (parsedMessage.email.length > 0 && parsedMessage.email.includes('@gmail.com')) {
        transporter
          .sendMail({
            from: 'mumuyuan1234@gmail.com',
            to: parsedMessage.email,
            subject: '木木苑串燒專門店mumuyuan - 密碼找回通知信',
            attachments: [
              {
                filename: 'mumulogo.jpg',
                path: 'https://drive.google.com/thumbnail?id=1bmLFoOtBjMTjbvX0ZJYB65WIlOd6yrm0',
                cid: 'image_001'
              }
            ],
            html: `
            <!doctype html>
            <html lang="en">
              <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <style>
                  .btn {
                    width: 100%;
                    display: inline-block;
                    font-weight: 400;
                    line-height: 1.5;
                    color: #212529;
                    text-align: center;
                    text-decoration: none;
                    vertical-align: middle;
                    cursor: pointer;
                    user-select: none;
                    background-color: transparent;
                    border: 1px solid transparent;
                    padding: 0.375rem 0.75rem;
                    font-size: 1rem;
                    border-radius: 0.25rem;
                  }
                  .text-light {
                    color: rgb(248, 249, 250);
                  }
                  .card{
                    padding: 1rem;
                    border: 2px solid #212529;
                  }
                  .card-body {
                    flex: 1 1 auto;
                  }
                  .card-title {
                    margin: 0.5rem 0;
                    font-weight: bolder;
                    font-size: 1.25rem;
                  }
                  .card-img-top{
                    width: 100%;
                  }
                  .card-text{
                    margin-bottom: 30px;
                  }
                  .mb-4 {
                    margin-bottom: 1.5rem;
                  }
                  .border {
                    border: 2px solid #212529;
                    padding: 0.8rem 1.2rem;
                  }
                </style>
                <title>Document</title>
              </head>
              <body>
                <div class="card" style="width: 250px">
                  <img
                    src="cid:image_001"
                    class="card-img-top"
                    alt="店家圖示"
                  />
                  <div class="card-body">
                    <h5 class="card-title fw-bolder" style="letter-spacing: 1px; color: #a86a46">
                      您的密碼為：
                    </h5>
                    <p class="card-text border">
                      ${parsedMessage.ubPassword}
                    </p>
                    <div style="text-align: right; font-size:12px; color: #a86a46;">
                      <p style="margin:0; font-weight: 400; letter-spacing: 1px;">感謝您的收取</P>
                      <p style="margin:0 0 5px 0; font-weight: 400; letter-spacing: 1px;">祝您用餐愉快</P>
                      <p style="margin:0; font-weight: 200;letter-spacing: 1px;">- 木木苑串燒專門店mumuyuan</P>
                    </div>
                  </div>
                </div>
              </body>
            </html>
            `
          })
          .then((info) => {
            ws.send(JSON.stringify(info.response))
          })
          .catch(console.error)
      }
    } else if (parsedMessage.mail) {
      if (parsedMessage.mail.length > 0 && parsedMessage.mail.includes('@gmail.com')) {
        transporter
          .sendMail({
            from: 'mumuyuan1234@gmail.com',
            to: parsedMessage.mail,
            subject: '你好這是你的訂單號碼 ',
            attachments: [
              {
                filename: 'mumulogo.jpg',
                path: 'https://drive.google.com/thumbnail?id=1bmLFoOtBjMTjbvX0ZJYB65WIlOd6yrm0',
                cid: 'image_001'
              }
            ],
            html: `
        <!doctype html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <style>
              .btn {
                width: 100%;
                display: inline-block;
                font-weight: 400;
                line-height: 1.5;
                color: #212529;
                text-align: center;
                text-decoration: none;
                vertical-align: middle;
                cursor: pointer;
                user-select: none;
                background-color: transparent;
                border: 1px solid transparent;
                padding: 0.375rem 0.75rem;
                font-size: 1rem;
                border-radius: 0.25rem;
              }
              .text-light {
                color: rgb(248, 249, 250);
              }
              .card{
                padding: 1rem;
                border: 2px solid #212529;
              }
              .card-body {
                flex: 1 1 auto;
              }
              .card-title {
                margin: 0.5rem 0;
                font-weight: bolder;
                font-size: 1.25rem;
              }
              .card-img-top{
                width: 100%;
              }
              .card-text{
                margin-bottom: 30px;
              }
              .mb-4 {
                margin-bottom: 1.5rem;
              }
              .border {
                border: 2px solid #212529;
                padding: 0.8rem 1.2rem;
              }
            </style>
            <title>Document</title>
          </head>
          <body>
            <div class="card" style="width: 250px">
              <img
                src="cid:image_001"
                class="card-img-top"
                alt="店家圖示"
              />
              <div class="card-body">
                <h5 class="card-title fw-bolder" style="letter-spacing: 1px; color: #a86a46">
                  您的訂單編號為(可用於查詢訂單狀態)：
                </h5>
                <p class="card-text border">
                  ${parsedMessage.orderid}
                </p>
                <div style="text-align: right; font-size:12px; color: #a86a46;">
                  <p style="margin:0; font-weight: 400; letter-spacing: 1px;">感謝您的收取</P>
                  <p style="margin:0 0 5px 0; font-weight: 400; letter-spacing: 1px;">祝您用餐愉快</P>
                  <p style="margin:0; font-weight: 200;letter-spacing: 1px;">- 木木苑串燒專門店mumuyuan</P>
                </div>
              </div>
            </div>
          </body>
        </html>
        `
          })
          .catch(console.error)
      }
    } else {
      sendAllUser(parsedMessage)
    }
  })
})

function sendAllUser(msg) {
  wss.clients.forEach(function (client) {
    if (client.readyState === WebSocket.OPEN && client.uuid !== msg.uuid) {
      client.send(JSON.stringify(msg))
    }
  })
}
app.on('upgrade', function upgrade(req, soc, head) {
  const { pathname } = parse(req.url)

  if (pathname === '/ws') {
    wss.handleUpgrade(req, soc, head, function done(ws) {
      wss.emit('connection', ws, req)
    })
  } else {
    soc.destroy()
  }
})
