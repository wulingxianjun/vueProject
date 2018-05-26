const express = require('express');
const bp = require('body-parser');
const app = express();

const path=require("path");
app.use(express.static(path.join(__dirname, '../../html')));

app.use(bp.urlencoded({extended: false}));

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, auth, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") {
      res.send(200);/*让options请求快速返回*/
    } else{
      next();
    }
});

const user = require('./user')
const store = require('./store')
const staff = require('./staff')
const comment = require('./comment')
const trade = require('./transition')

module.exports = {
    start(_port = 88){
        user.reg(app);
        store.reg(app);
        staff.reg(app);
        comment.reg(app);
        trade.reg(app);
        app.listen(_port,'10.3.133.63');
    }
}