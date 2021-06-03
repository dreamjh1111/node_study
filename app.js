const express = require('express');
const helmet = require('helmet');
const app = express();
const ejs = require("ejs")

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded());

//html,css를 화면에 나타내기 위한
app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/public',express.static(__dirname + '/public'));

//미들웨어 규칙 적용
const mainRouter = require('./router/mainRouter')
app.use('/',mainRouter)

//listen = 3000번 포트 사용할꺼다.
app.listen(3000,function(req,res){
    console.log('서버가 실행되고 있다.')
})  