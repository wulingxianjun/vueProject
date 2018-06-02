const jwt = require('jsonwebtoken')
const db = require('../db/dbhelper')
const apiResult = require('../apiResult')
const assert = require('assert');
const ObjectID = require('mongodb').ObjectID;
var querystring = require('querystring');

const filter = (req, res, next) => {
    let token = req.headers['auth'];
    if(!token){
        res.send(apiResult(false, {}, 'unauth'));
    } else {
        jwt.verify(token, '123456', (error, result) => {
            if(error){
                res.send(apiResult(false, error, 'unauth'))
            } else {
                next();
            }
        })
    }
}

module.exports = {
    reg(app){
        app.post('/login', async (req, res) => {
            console.log(req.body)
            let username = req.body.username;
            let password = req.body.password;
            
            let result = await db.select('users', {username, password});
            if(result.status){
                let token = jwt.sign({username}, '123456', {expiresIn: 60 * 60});
                let ar = apiResult(result.status, token , result);
                res.send(ar);
            } else {
                res.send(result);
            }
        })
        app.post('/verifytoken', (request, response) => {
            let token = request.headers['auth'];
            if(!token){
                response.send({status: false, message: 'token不能为空'});
            }
            jwt.verify(token, '123456', (error, result) => {
                if(error){
                    response.send({status: false});
                } else {
                    response.send({status: true, data: result});
                }
            })
        })
        app.post("/reg", async function(req,res){
            console.log(req.body);
            var username=req.body.username;
            var password=req.body.password;
            var img=req.body.img;
            var result=await db.insert("users",{username,password,img});
            res.send(result);
        })
        app.post('/select_users', async (req, res) => {
            var findname=req.body.findname;
            let result = await db.select("users",{"username" : findname});
            res.send(result);
        })
        app.post("/updateAd", async function(req,res){
            console.log(req.body);
            var _id=req.body._id;
            var adArr=req.body.adArr;
            let result = await db.update('users',{'_id':new ObjectID(_id)},{$set:{"address":adArr}});
            res.send(result);

        })
        app.post("/addcomment", async function(req,res){
            console.log(req.body);
            var username=req.body.username;
            var content=req.body.content;
            var img=req.body.img;
            var mydate=req.body.mydate;
            var price=req.body.price;
            var result=await db.insert("cont",{username,content,img,mydate,price});
            res.send(result);
        })
        app.get('/users', async (req, res) => {
            let result = await db.select('users');
            res.send(result);
        })
        app.get('/myshuju',async (req, res) => {
            let result = await db.select('goodslist');
            res.send(result);
        })
        app.post("/c_shuju", async function(req,res){
            //console.log(req.body);
            var y_id=req.body.y_id;
            var arr=req.body.arr;
            let result = await db.update('users',{'_id':new ObjectID(y_id)},{$set:{"arr":arr}});
            res.send(result);

        })
        app.post('/verifytoken', (request, response) => {
            let token = request.headers['auth'];
            if(!token){
                response.send({status: false, message: 'token不能为空'});
            }
            jwt.verify(token, '123456', (error, result) => {
                if(error){
                    response.send({status: false});
                } else {
                    response.send({status: true, data: result});
                }
            })
        })
        app.post("/mohu", async function(req,res){
            console.log(req.body);
            var val=req.body.val;
            let result = await db.search('goodslist',val);
            res.send(result);

        })
    }
}