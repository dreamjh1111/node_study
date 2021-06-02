const express = require('express');
const helmet = require('helmet');
const app = express();
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded());
//미들웨어 규칙 적용
const mainRouter = require('./router/mainRouter')
app.use('/',mainRouter)

//listen = 3000번 포트 사용할꺼다
app.listen(3000,function(req,res){
    console.log('서버가 실행되고 있다.');
})