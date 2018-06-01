const db = require('../db/dbhelper')
const ObjectID = require('mongodb').ObjectID;

module.exports = {
    reg(app){
        app.get('/stores',async (req,res) => {
            let result = await db.select('goodslist');
            res.send(result)
        }),
        app.post('/select_list', async (req, res) => {
            var s_id=req.body.s_id;
            let result = await db.select("goodslist",{"id" : s_id});
            res.send(result);
        }),
        app.post('/delPro',async (req,res) => {
            let proId = req.body.pId*1
            console.log('pId：',proId)

            let result = await db.remove('goodslist',{'id':proId});
            res.send(result)
        }),
        app.post('/updatePro',async (req,res) => {
            let proId = req.body.id*1

            let data = {
                id:proId,
                name:req.body.name,
                price:req.body.price*1,
                sell:req.body.sell*1,
                classify:req.body.classify,
                brand:req.body.brand,
                type:req.body.type,
                img:req.body.img
            }
            console.log(data)

            let result = await db.update('goodslist',{'id':proId},{$set:data});
            res.send(result)
        }),
        app.post('/insertPro',async (req,res) => {
            let proId = req.body.id*1

            let data = {
                id:proId,
                name:req.body.name,
                price:req.body.price*1,
                sell:req.body.sell*1,
                classify:req.body.classify,
                brand:req.body.brand,
                type:req.body.type,
                img:req.body.img
            }
            console.log(data)

            let result = await db.insert('goodslist',data);
            res.send(result)
        })
    }
}
