var express = require('express');
var router = express.Router();
const {data}=require("../mock/data")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get("/getList",(req,res)=>{
res.send({
  code:200,
  data:data
})
})
module.exports = router;
