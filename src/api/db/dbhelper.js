const MongoClient = require('mongodb').MongoClient;
const apiResult=require('../apiResult.js')
const url = 'mongodb://localhost:27017';
const ObjectID = require('mongodb').ObjectID;
var db=null;
MongoClient.connect(url, function(err, client) {
    db=client.db('project');
    
});

module.exports={
    async select(biaoming,fanwei={}){
        try{
            let items= await db.collection(biaoming).find(fanwei).toArray();
            return apiResult(items.length>0, items);
        }catch(err){
            return apiResult(false, error);
        }
    },
    async insert(biaoming,data){
        try{
            var result=await db.collection(biaoming).insert(data);
            return apiResult(result.insertedCount>0,result.result);
        }catch(err){
            return apiResult(false, error);
        }
    },
    async remove(_collection,params){
        console.log('REMOVE==>')
        const items = await db.collection(_collection).remove(params)
        return apiResult(true,items)
    },
    async update(_collection,whereData,arr){
        try{
            let res = await db.collection(_collection).updateOne(whereData,arr);
            // console.log(res)
                 
            return apiResult(res.result.n>0,res); 
        }catch(err){
            console.log(err)
            return apiResult(false,err); 
        }
    },
    async search(_collection,_reg){
        try{
            let items = await db.collection(_collection).find({name:{$regex:_reg}}).toArray();
            return apiResult(items.length > 0,items);
        }catch(error){  
            return apiResult(false,error);
        }
    }
}