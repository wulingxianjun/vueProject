<template>
  <div class="addNewAddress">
        <header class="newAdHead"><i class="fa fa-angle-left" @click="$router.push({path:'/address'})"></i>{{title}}</header>
        <main class="newAdMain">
            <ul>
                <li><label for="">收件人：</label><input type="text" v-model="yourName"/></li>
                <li><label for="">手机号码：</label><input type="text" v-model="phone"/></li>
                <li><label for="">所在地区：</label><district></district></li>
                <li><label for="">详细地址：</label><input type="text" placeholder="街道、门牌号等" v-model="detailAd"/></li>
                <li @click="addClass" class="label"><label for="">标签：</label><span>家</span><span>公司</span><span>学校</span></li>
                <li class="defaultAd"><label for="">默认地址</label><div @click="chosen" :class="[isChosen ? '' : 'chosenDf']"><i></i></div></li>
            </ul>
            <span  class="allTips">{{tips}}</span>
             <!-- v-if="tips != ''" -->
        </main> 
        <footer class="newAdFooter">
            <button class="newAd" @click="saveAd">保存并使用</button>
        </footer>           
    </div>
</template>
<script>
    import "./addNewAddress.css";
    import district from '../district/district.vue';
    import http from '../../utils/httpclients.js';

    export default{
        data(){
            return{
                yourName:'',
                phone:'',
                detailAd:'',
                tips:'',
                isChosen:true,
                canPhone:false,
                username:'',
                userId:'',
                label:'',
                defaultAd:false,
                title:'添加新地址'
            }
        },
        methods:{
            addClass(e){
                if(e.target.tagName == 'SPAN'){
                    $(e.target).addClass('active').siblings('span').attr("class","")
                }
            },
            chosen(){
                if(!this.isChosen){
                    this.isChosen = true;
                }else{
                    this.isChosen = false;
                    this.defaultAd = true;
                }
                console.log(this.defaultAd);
            },
            saveAd(){ 
                if(this.yourName.trim().length == 0){
                    this.tips = "请填写收货人姓名";
                }else if(this.phone.trim().length == 0){
                    this.tips = '请填写手机号码';
                }else if(!/^1[3-8]\d{9}$/i.test(this.phone)){
                    this.tips = '请正确填写手机号 !';
                }else if($('#trigger').text().trim().length == 0){
                    this.tips = '请选择地区';
                }else if(this.detailAd.trim().length == 0){
                    this.tips = '请填写详细地址';
                }else{
                    this.tips = '';
                    if($('.label').find($('.label').children('.active'))){
                        this.label = $('.label').find($('.label').children('.active')).text();
                    }
                    if(!this.isChosen){
                        this.defaultAd = true;
                    }

                    let district = $('#trigger').text();
                    let adArr;
                    http.post('verifytoken').then((res)=>{
                        if(res.status){
                            this.username = res.data.username;
                            http.post('select_users',{findname:this.username}).then((res)=>{
                                if(res.status){
                                    // console.log(res.data[0].address);
                                    this.userId = res.data[0]._id
                                    let addressid = 1;
                                    if(res.data[0].address){
                                        adArr = JSON.parse(res.data[0].address)
                                        addressid = adArr[adArr.length-1].addressid*1+1;
                                    }else{
                                        adArr = [];
                                    }
                                    //编辑地址
                                    if(this.$route.params.operate == 'edit'){
                                        adArr.map((item)=>{
                                            if(item.addressid == this.$route.params.adObj.addressid){
                                                item.yourName = this.yourName;
                                                item.phone = this.phone;
                                                item.district = district;
                                                item.detailAd = this.detailAd;
                                                item.label = this.label;
                                                item.defaultAd = this.defaultAd;
                                                console.log(item.defaultAd,this.defaultAd);
                                                console.log(item);
                                            }
                                        })
                                            console.log(adArr,1);
                                    }else{
                                        //新建地址
                                        let adObj = {addressid:addressid,yourName:this.yourName,phone:this.phone,district:district,detailAd:this.detailAd,label:this.label,defaultAd:this.defaultAd};
                                        adArr.push(adObj);
                                        console.log(adArr);
                                    }
                                    // 判断默认地址
                                    if(this.defaultAd){
                                        adArr.map((item)=>{
                                            item.defaultAd = false;
                                            if(item.addressid == addressid){
                                                item.defaultAd = true;   
                                            }else if(this.$route.params.adObj){
                                                if(item.addressid == this.$route.params.adObj.addressid)
                                                item.defaultAd = true;
                                            }
                                        }) 
                                    }
                                    //更新请求
                                    http.post("updateAd",{_id:this.userId,adArr:JSON.stringify(adArr)}).then((res)=>{
                                        if(res.status){
                                            if(this.$route.params.operate == 'edit'){
                                                addressid = this.$route.params.adObj.addressid;
                                            }else{
                                                addressid = addressid;
                                            }
                                            this.$router.push({name: 'pay',params:{addressid:addressid}});
                                        }    
                                    })
                                }
                            })    
                        }else{
                            this.$router.push({name:'login'})
                        }
                    })
                }
                if(this.tips != ''){
                    $('.allTips').stop(false, true).fadeIn(1000).stop(false, true).fadeOut(2000);
                }
            }
        },
        mounted(){
            if(this.$route.params.operate == 'edit'){
                this.title = '编辑地址';
                // console.log(this.$route.params.adObj);
                this.yourName = this.$route.params.adObj.yourName;
                this.phone = this.$route.params.adObj.phone;
                $('#trigger').text(this.$route.params.adObj.district);
                this.detailAd = this.$route.params.adObj.detailAd
                if(this.$route.params.adObj.defaultAd){
                    this.isChosen = false;
                }
                if(this.$route.params.adObj.label != ''){
                    $('.label').find().addClass('active')
                    $('.label').children('span').map((idx,item)=>{
                        if($(item).text() == this.$route.params.adObj.label){
                            $(item).addClass('active')
                        }
                    });
                }
            }
        },
        components:{
            district
        },
    }
</script>
