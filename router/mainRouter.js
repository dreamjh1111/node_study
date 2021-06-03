const express = require('express')
const router = express.Router();

//get = url
router.get("/",function(req,res){
   res.render('index',{title:"EJS 메인페이지"})//그림파일 전송, res.send = 글
})

router.get("/about", function(req,res){
    res.send('About Page');
})

router.post("/postapi", function(req,res){
    let body = req.body;
    console.log(body)
    res.send("POST API");
})

module.exports = router