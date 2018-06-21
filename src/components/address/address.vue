<template>
    <div class="addressBox">
        <header class="chooseAddress">
            <ul>
                <li><i class="fa fa-arrow-circle-left" @click="$router.go(-1)"></i><span>选择收货地址</span></li>
                <li @click="management">管理</li>
            </ul>
        </header>
        <main class="allAd">
            <ul v-for="(obj, index) in address" :data-ins="obj.addressid">
                <li class="addresseeNews"><span class="addressee"><i class="label" v-if="obj.label != ''">{{obj.label}}</i>{{obj.yourName}}</span><span class="addressTel">{{obj.phone}}</span></li>
                <li class="clientAddress"><i class="defaultAd" v-if="obj.defaultAd">[默认地址]</i>{{obj.district}}{{obj.detailAd}}</li>
                <li class="adOperation" v-if="canEdit">
                    <div><input type="checkbox" class="btnCheck" :checked="obj.defaultAd" @click="isChecked($event,obj.addressid)"/><label for="">设为默认</label></div>
                    <div><span @click="$router.push({name:'addNewAddress',params: {operate: 'edit',adObj:obj}})"><i class="fa fa-pencil fa-fw"></i>编辑</span><span @click="delData($event,obj.addressid)" v-if="canDel"><i class="fa fa-trash-o fa-fw"></i>删除</span></div>
                </li>
            </ul>
        </main>
        <div class="confirmBox" v-if="show">
            <div class="confirmDel">
                <p>你确定要删除该地址吗？</p>
                <div class="btnGroup">
                    <span class="btnNo" @click="btnNo">取消</span>
                    <span class="btnYes" @click="btnYes">确认删除</span>
                </div>
            </div>   
        </div>
        <footer class="addAddress">
            <button class="newAd" @click="$router.push({path:'/addNewAddress'})">添加新地址</button>
        </footer>
    </div>
</template>
<script>
    import './address.css'
    import http from '../../utils/httpclients.js'
    export default{
        data(){
            return {
                canEdit:false,
                address:[],
                show:false,
                addressid:0,
                canDel:false
            }        
        },
        methods:{
            management(){
                this.canEdit = this.canEdit == false ? true : false;
            },
            delData(e,id){
                this.addressid = id;
                console.log(this.addressid);
                this.show = true;
            },
            btnNo(){
                this.show = false;
            },
            btnYes(){
                console.log(this.addressid);
                http.post('verifytoken').then((res)=>{
                    if(res.status){
                        let username = res.data.username;
                        http.post('select_users',{findname:username}).then((res)=>{
                            if(res.status){
                                let add = JSON.parse(res.data[0].address);
                                let userId = res.data[0]._id;
                                console.log(userId);
                                add.map((item)=>{
                                    if(item.addressid == this.addressid){
                                        add.splice(add.indexOf(item),1)
                                        console.log(add)
                                        http.post("updateAd",{_id:userId,adArr:JSON.stringify(add)}).then((res)=>{
                                            if(res.status){
                                                this.address = add;
                                                this.show = false;
                                                if(this.address.length == 1){
                                                    this.canDel = false;
                                                }
                                                console.log(res);
                                            }    
                                        }) 
                                    }
                                })
                            }    
                        })
                    }                    
                })   
            },
            isChecked(e,adid){
                http.post('verifytoken').then((res)=>{
                    if(res.status){
                        let username = res.data.username;
                        http.post('select_users',{findname:username}).then((res)=>{
                            if(res.status){
                                this.address = JSON.parse(res.data[0].address);
                                this.address.map((item)=>{
                                    item.defaultAd = false;
                                    if(item.addressid == adid){
                                        item.defaultAd = true;
                                    }
                                })
                            }    
                        })
                    }                    
                })
            }
        },
        mounted(){
            http.post('verifytoken').then((res)=>{
                if(res.status){
                    let username = res.data.username;
                    http.post('select_users',{findname:username}).then((res)=>{
                        if(res.status){
                            this.address = res.data[0].address ? JSON.parse(res.data[0].address) : [];
                            console.log(this.address);
                            if(this.address.length != 1){
                                this.canDel = true;
                            }
                        }    
                    })
                }                    
            })        
        }
    }
</script>
