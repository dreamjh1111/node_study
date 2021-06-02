const express = require('express')
const router = express.Router();

//get = url
router.get("/",function(req,res){
  
    let page = req.query;
    console.log("[QUERY]")
    console.log(page)

    res.send({'Key' : 'value'});
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