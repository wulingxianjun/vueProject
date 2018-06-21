<template>
  <div :class="classObject2">
    <div class="ti_head">
        <div class="fanhui"><i class="fa fa-angle-left" aria-hidden="true" @click="lufan"></i></div>
        <div class="quedan">确认订单</div>
        <div class="kong"></div>
    </div>
    <div class="q_main">
    <div class="tishi" v-if="i==0"><img src="../../images/lingdang.png" class="lingdang"/>温馨提示：订单中含有不支持7天无理由退货的商品，请确认相关商品信息后提交订单<span class="cha" @click="cha">&times;</span></div>
    <div class="dizhi" v-for="item in address">
        <div class="di1">
            <span>{{item.yourName}}</span>
            <span class="dianhua">{{item.phone.slice(0,3)+"****"+item.phone.slice(7)}}</span>
            <span class="xiao">{{item.label}}</span>
        </div>
        <p class="di2">{{item.district+" "+item.detailAd}}</p>
        <img src="../../images/dingwei2.png" class="dingwei2"/>
        <i class="fa fa-angle-right t_guanli" aria-hidden="true" @click="t_address"></i>
    </div>
    <img src="../../images/huabian.png" class="huabian"/>
    <div class="sheng1" v-if="obj.qty!=null">
        <img :src="obj.img" class="fl s_tu"/>
        <div class="you fr">
            <p class="p1"> {{obj.name}}  </p>
            <p class="p2">颜色 : 黑色 &nbsp;尺码 : M</p>
            <p class="p3"><span class="fu">￥</span>{{obj.sell}} <img src="../../images/tan.png" class="tan"/> <span class="fr num">&times;{{obj.qty}}</span></p>
            <p class="p4"><img src="../../images/7tian.png" class="tian"/>支持7天无理由退货</p>
        </div>
    </div>
    <div class="sheng2" v-if="data.length>0">
        <div class="zhuangtu fl">
            <img class="fl s_tu" v-for="item in data" :src="item.img"/>
        </div>
        <div class="gengduo fr" @click="t_qingdan">
            共{{jianshu}}件 <i class="fa fa-angle-right t_gengduo" aria-hidden="true"></i>
        </div>
    </div>
    <div class="goushu" v-if="obj.qty!=null">
        购买数量
        <div class="you fr">
            <span>-</span>
            <input type="text" :value="obj.qty" class="num" readonly/>
            <span>+</span>
        </div>
    </div>
    <img src="../../images/gai.png" class="gai"/>
    <div class="liu">
        <input type="text" class="liuyan" placeholder="选填:给商家留言(45字以内)"/>
    </div>
    <div class="ji">
        <p class="p1">商品金额<span class="xiaoji fr">￥{{zongjia}}.00</span></p>
        <p class="p2">运费<span class="yunfei fr">+￥0.00</span></p>
        <p class="p3">退换无忧<span class="tuihuan fr">+￥0.00</span></p>
    </div>
    </div>
    <div class="zuihou">
        实付款：￥<span class="shifu">{{zongjia}}.00</span>
        <span class="tijiao" @click="zhifu">提交订单</span>
    </div>
    <div :class="classObject">
        <div class="qing_head">
            <div class="q_fanhui fen"><i class="fa fa-angle-left fanhui" aria-hidden="true" @click="fanhui"></i></div>
            <div class="q_quedan">商品清单</div>
            <div class="gong fen">共{{jianshu}}件</div>
        </div>
        <ul class="qing_list">
            <li class="sheng1" v-for="item in data">
                <img :src="item.img" class="fl s_tu"/>
                <div class="you fr">
                    <p class="p1"> {{item.name}}  </p>
                    <p class="p2">颜色 : 黑色 &nbsp;尺码 : M</p>
                    <p class="p3"><span class="fu">￥</span>{{item.sell}} <img src="../../images/tan.png" class="tan"/> <span class="fr num">&times;{{item.qty}}</span></p>
                    <p class="p4"><img src="../../images/7tian.png" class="tian"/>支持7天无理由退货</p>
                </div>
            </li>
            <li class="wuyong">若对价格有疑问，点击此查看详情 <img src="../../images/tan2.png" class="tan2"/></li>
        </ul>
    </div>
    <div class="zhezhao" @click="zhe"></div>
     <div class="zhifu">支付宝，了解一下<img src="../../images/zhifubao.png"/></div>
  </div>
</template>
<script>
    import "./pay.css";
    import http from "../../utils/httpclients";
    export default{
        data(){
            return{
                address:{},
                canshu:[],
                jianshu:0,
                zongjia:0,
                k:0,
                i:0,
                obj:{},
                data:[],
                classObject: {
                        qingdan: true,
                        chuxian: false,
                    },
                classObject2: {
                    qu_box: true,
                    qu_chuxian: true,
                    qu_chuxian2: false
                }
            }
        },
        mounted(){
            this.classObject2.qu_chuxian=false;
            //console.log(this.$route.params.arr_obj)
            var username=window.localStorage.getItem("username")
            http.post("select_users",{findname:username}).then(user=>{
                this.address=JSON.parse(user.data[0].address);
            })
            this.canshu=this.$store.state.car.data;
            console.log(this.canshu)
            if(this.canshu.length==1){
                http.get("myshuju").then(res=>{
                    res.data.map(item=>{
                        if(this.canshu[0].s_id==item.id){
                            this.zongjia=item.sell*1*this.canshu[0].qty;
                            this.obj=item;
                            this.obj.qty=this.canshu[0].qty;
                        }
                    })
                })
            }else{
                http.get("myshuju").then(res=>{
                    res.data.map(item=>{
                        this.canshu.map(item2=>{
                            if(item.id==item2.s_id){
                                this.zongjia=this.zongjia*1+item.sell*1*item2.qty;
                                item.qty=item2.qty;
                                this.data.push(item);
                                this.jianshu=this.jianshu*1+item2.qty;
                            }
                        })
                    })
                })
            }
        },
        methods:{
            cha(){
                this.i=1;
            },
            t_address(){
                this.$router.push({name:"address"});
            },
            t_qingdan(){
                $('body').css("overflow","hidden");
                this.classObject.chuxian=true;
                this.classObject2.qu_chuxian2=true;
            },
            fanhui(){
                $('body').css("overflow","auto");
                this.classObject.chuxian=false;
                this.classObject2.qu_chuxian2=false;
            },
            lufan(){
                // this.$router.push({name:"car"});
                this.$router.go(-1)
            },
            zhifu(){
                $(".zhezhao").fadeIn(300);
                $(".zhifu").fadeIn(300);
            },
            zhe(){
                $(".zhezhao").fadeOut(300);
                $(".zhifu").fadeOut(300);
            }
        }
    }
</script>
