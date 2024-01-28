import express from 'express';
import jsonServer from 'json-server';
import cors from 'cors';
import auth from 'json-server-auth';
const app = express();
const jsonServerApp = jsonServer.create();
const router = jsonServer.router('db.json'); // 這裡指定你的 JSON 文件路徑
const middlewares = jsonServer.defaults();
const port = 8080

jsonServerApp.use(middlewares);
jsonServerApp.db = router.db; // 傳遞資料庫對象給 json-server-auth
jsonServerApp.use(auth);
app.use(cors()); 
app.use('/api', router);

// jsonServerApp.use(jsonServer.defaults());

// // Apply json-server-auth middleware
// jsonServerApp.db = router.db; // Pass the database object to json-server-auth
// jsonServerApp.use(auth);

// app.get('/',(req,res) => res.send('Hello World'))

// app.listen(port, ()=> console.log('server is run'))

app.listen(3000, () => {
  console.log('JSON Server is running')
}); 