<template>
    <div class="car_dabox">
        <div class="dabox">
        <ul class="car_tou">
            <li></li>
            <li class="zhu">购物车(<span class="num">{{data.length}}</span>)</li>
            <li class="hou"><span @click="bianji">编辑</span> <i class="fa fa-commenting-o xiaoxi" aria-hidden="true"></i></li>
        </ul>
        <div class="dizhi"><img src="src/images/pos.png" alt="" />送至：深圳龙华区 ></div>
        <div class="car_main">
            <ul class="sop" v-for="(key,idx2) in types" @click="weituo(idx2,key)">
                <li class="ziying">
                    <i class="fa fa-circle-thin fatou" aria-hidden="true" title="xiao_no" v-if="leis.indexOf(idx2)<0"></i>
                    <i class="fa fa-check-circle fatou" aria-hidden="true" title="xiao_all" v-if="leis.indexOf(idx2)>-1"></i>
                    <img src="src/images/ziying.png" alt="" class="zitu"/>
                    <span class="lei">{{key}}</span>
                </li>
                <li v-for="(item,idx) in data" v-if="item.type==key" class="car_lis" :title="item.id" :key="item.id">
                    <div class="con">
                    <div class="xuan fl">
                        <i class="fa fa-circle-thin" title="danxuan" v-if="ids.indexOf(item.id+'')<0"></i>
                        <i class="fa fa-check-circle" title="danxuan" v-if="ids.indexOf(item.id+'')>-1"></i>

                    </div>
                    <div class="fr you">
                        <img :src="item.img" alt="" class="tu fl"/>
                        <div class="hezi fl">
                            <div class="p1"><img src="../../images/tejia.png" class="tejia"/> {{item.name}}</div>
                            <div class="bianji"><span class="jian" @click="jian(item.id)">-</span><input v-model="item.qty" class="d_shu" readonly/><span class="jia" @click="jia(item.id)">+</span></div>
                        </div>
                        <div class="p2 fr"><span class="price">{{item.sell}}.00 </span><br/><p class="shuliang">x<span class="qty">{{item.qty}}</span></p><i class="fa fa-trash-o fa-lg san" aria-hidden="true" @click="san(item.id)"></i></div>
                        <div class="meiri">每日限购{{item.id*(idx+6)}}件</div>
                        </div>
                    </div>
                </li>
                <li class="xiaoji">
                    <p class="youhui">活动优惠：￥0.00</p>
                    <p class="xiaoz" v-for="key2 in xiaojis" v-if="key2.type==key">本仓总计(不含税)：￥<span class="xiaozong">{{key2.xiaoji.toFixed(2)}}</span></p>
                    <!-- <p class="xiaoz" v-if="key2.type!=key">本仓总计(不含税)：￥<span class="xiaozong">0.00</span></p> -->
                </li>
            </ul>
        </div>
        <div class="zhezhao" @click="zhe"></div>
        <div class="tanchuang" @click="fanbuer">
            <h5>确定删除该商品吗？</h5>
            <ul>
                <li class="quxiao">取消</li>
                <li class="queding">确认</li>
            </ul>
        </div>
        <div class="xidi" @click="quanxuan">
            <div class="zuo fl">
            <i class="fa fa-circle-thin fatou" aria-hidden="true" title="q_no" v-if="b==0"></i>
            <i class="fa fa-check-circle fatou" aria-hidden="true" title="all" v-if="b==1"></i> <span class="zi">全选</span></div>
            <div class="jiesuan fr" @click="t_pay">结算</div>
            <div class="zhong fr">
                总计(不含税)：<span class="zongji">￥{{zongji.toFixed(2)}}</span>
                <p class="shui">商品税费：<span>￥0.00</span></p>
            </div>
        </div>
        </div>
        <HD/>
    </div>
</template>
<script>
    import HD from "../footer/footer.vue";
    import "./car.css";
    import http from "../../utils/httpclients.js";
    export default{
        data(){
            return {
                j:0,
                id:0,
                b:0,
                a:1,
                data:[],
                types:[],
                ids:[],
                leis:[],
                zongji:0,
                xiaojis:[]
            }
        },
        mounted(){
            $("#c_footer ul").children().eq(2).addClass("actived");
            var yonghu=window.localStorage.getItem("username");
            if(yonghu){
                http.post("select_users",{findname:yonghu}).then(res1=>{
                    var arr=JSON.parse(res1.data[0].arr);
                    console.log(arr)
                    if(arr==undefined||arr.length<1||arr==null){
                        $(".dabox").html('');
                        $(".dabox").html(`
                            <ul class="car_tou">
                                <li></li>
                                <li class="zhu">购物车</li>
                                <li class="hou"></li>
                            </ul>
                            <h3 class="t_list">空空如也~~~去添加商品吧！<i class="fa fa-arrow-circle-o-right r_jiantou fa-2x" aria-hidden="true"></i> </h3>
                            <img src="./src/images/kong.png" class="kong"/>
                        `);
                        $(".t_list").click(()=>{
                            this.$router.push({name:"list"})
                        })
                    }else{
                        http.get("stores").then(res2=>{
                            res2.data.map(item2=>{
                                arr.map(item=>{
                                    if(item.s_id==item2.id){
                                        if(this.types.indexOf(item2.type)<0){
                                            this.types.push(item2.type)
                                        }
                                        item2.qty=item.qty;
                                        this.data.push(item2);
                                        $(".zhu .num").html(this.data.length)
                                    }
                                })
                            })
                        })
                    }
                })
            }else{
                $(".dabox").html('');
                $(".dabox").html(`
                    <ul class="car_tou">
                        <li></li>
                        <li class="zhu">购物车</li>
                        <li class="hou"></li>
                    </ul>
                    <h3 class="t_dl">登录后可以同步电脑与手机购物车中的商品<i class="fa fa-arrow-circle-o-right r_jiantou fa-2x" aria-hidden="true"></i> </h3>
                    <img src="./src/images/kong.png" class="kong"/>
                `);
                $(".t_dl").click(()=>{
                    this.$router.push({name:"login"})
                })
            }
        },
        methods:{
            zhe(){
                $(".zhezhao").fadeOut(300);
                $(".tanchuang").fadeOut(300);
            },
            t_pay(){
                if(this.ids.length>0){
                    var arr=[];
                    this.ids.map(key=>{
                        this.data.map(item=>{
                            if(item.id==key){
                                var obj={};
                                obj.s_id=key;
                                obj.qty=item.qty;
                                arr.push(obj);
                            }
                        })
                    });
                    //console.log(arr)
                    this.$router.push({
                        name:"pay"
                    })
                    this.$store.dispatch("getcar",arr);
                }
            },
            bianji(){
                this.a=this.a==1?0:1;
                if(this.a==0){
                    event.target.innerHTML="完成";
                    $(".con .p1").hide();
                    $(".con .p2 .shuliang").hide();
                    $(".con .bianji").show();
                    $(".con .p2 .san").show();
                }else if(this.a==1){
                    event.target.innerHTML="编辑";
                    $(".con .p1").show();
                    $(".con .p2 .shuliang").show();
                    $(".con .bianji").hide();
                    $(".con .p2 .san").hide();
                }
            },
            jisuan(){
                this.zongji=0;
                this.data.map(item=>{
                    this.ids.map(item2=>{
                        if(item.id==item2){
                            this.zongji=this.zongji*1+item.sell*1*item.qty;
                        }
                    })
                })
            },
            jia(id){
                var username="武陵仙君";
                http.post("select_users",{findname:username}).then(user=>{
                    var yonghu_arr=JSON.parse(user.data[0].arr);
                    yonghu_arr.map((item,idx)=>{
                        if(item.s_id==id){
                            yonghu_arr[idx].qty=yonghu_arr[idx].qty*1+1;
                        }
                    })
                    var arr2=JSON.stringify(yonghu_arr);
                    http.post("c_shuju",{y_id:user.data[0]._id,arr:arr2}).then(res=>{
                        this.data.map((item,idx)=>{
                            if(item.id==id){
                                this.data[idx].qty=this.data[idx].qty*1+1;
                                this.jisuan();
                            }
                        })
                    })
                })
            },
            jian(id){
                var username="武陵仙君";
                http.post("select_users",{findname:username}).then(user=>{
                    var yonghu_arr=JSON.parse(user.data[0].arr);
                    yonghu_arr.map((item,idx)=>{
                        if(item.s_id==id){
                            if(yonghu_arr[idx].qty>1){
                                yonghu_arr[idx].qty=yonghu_arr[idx].qty*1-1;
                            }else{
                                yonghu_arr[idx].qty=1;
                            }
                        }
                    })
                    var arr2=JSON.stringify(yonghu_arr);
                    http.post("c_shuju",{y_id:user.data[0]._id,arr:arr2}).then(res=>{
                        this.data.map((item,idx)=>{
                            if(item.id==id){
                                if(this.data[idx].qty>1){
                                    this.data[idx].qty=this.data[idx].qty*1-1;
                                }else{
                                    this.data[idx].qty=1;
                                }
                            }
                            this.jisuan();
                        })
                    })
                })
            },
            fanbuer(){
                if(event.target.className=="quxiao"){
                    $(".zhezhao").fadeOut(300);
                    $(".tanchuang").fadeOut(300);
                }
                else if(event.target.className=="queding"){
                    $(".zhezhao").fadeOut(300);
                    $(".tanchuang").fadeOut(300);
                    var username=window.localStorage.getItem("username");
                    http.post("select_users",{findname:username}).then(user=>{
                        var yonghu_arr=JSON.parse(user.data[0].arr);
                        yonghu_arr.map((item,idx)=>{
                            if(item.s_id==this.id){
                                yonghu_arr.splice(idx,1);
                                if(yonghu_arr.length==0){
                                    $(".dabox").html('');
                                    $(".dabox").html(`
                                        <ul class="car_tou">
                                            <li></li>
                                            <li class="zhu">购物车</li>
                                            <li class="hou"></li>
                                        </ul>
                                        <h3 class="t_list">空空如也~~~去添加商品吧！<i class="fa fa-arrow-circle-o-right r_jiantou fa-2x" aria-hidden="true"></i> </h3>
                                        <img src="./src/images/kong.png" class="kong"/>
                                    `);
                                    $(".t_list").click(()=>{
                                        this.$router.push({name:"list"})
                                    })
                                }
                            }
                        })
                        console.log(yonghu_arr)
                        var arr2=JSON.stringify(yonghu_arr);
                        http.post("c_shuju",{y_id:user.data[0]._id,arr:arr2}).then(res=>{
                            this.data.map((item,idx)=>{
                                if(item.id==this.id){
                                    this.data.splice(idx,1);
                                    this.jisuan();
                                    $(".zhu .num").html(this.data.length);
                                }
                            })
                        })
                    })
                }
            },
            san(id){
                $(".zhezhao").fadeIn(300);
                $(".tanchuang").fadeIn(300);
                this.id=id;
            },
            xiaoji(idx,key){
                var obj={};
                var num=0;
                this.data.map(item=>{
                    this.ids.map(item2=>{
                        if(item.id==item2&&item.type==this.types[idx]){
                            num+=item.sell*1*item.qty;
                            //this.xiaoji=this.xiaoji*1+item.sell*1*item.qty;
                        }
                    })
                })
                obj.type=key;
                obj.xiaoji=num;
                var suoying;
                var has = this.xiaojis.some(function(g,i){
                    suoying = i;
                    return g.type == key;
                });
                if(has){
                    this.xiaojis[suoying].xiaoji=num;
                }else{
                    this.xiaojis.push(obj);
                }
                //console.log(this.xiaojis)
            },
            weituo(idx,key){
                if(event.target.title=="danxuan"){
                    var id=$(event.target).parents("li")[0].title;
                    if(this.ids.indexOf(id)>-1){
                        this.ids.splice(this.ids.indexOf(id),1);
                    }else{
                        this.ids.push(id);
                    }
                    if(this.ids.length==this.data.length){
                        this.b=1;
                    }else{
                        this.b=0;
                    }
                    var lei=$(event.target).parents("ul").find(".lei").html();
                    var arr=[];
                    var leixings=[];
                    this.data.map(item=>{
                        if(item.type==lei){
                            arr.push(item.id);
                            if(this.ids.indexOf(item.id+"")>-1){
                                leixings.push(item.id);
                            }
                        }
                    })
                    if(arr.length==leixings.length){
                        if(this.leis.indexOf(idx)<0){
                            this.leis.push(idx);
                        }
                    }else{
                        if(this.leis.indexOf(idx)>-1){
                            this.leis.splice(this.leis.indexOf(idx),1);
                        }
                    }
                    
                    
                    // arr.map(item=>{
                    //     if(this.ids.indexOf(item+'')<0){
                    //         this.leis.splice(idx,1);
                    //         return false;
                    //     }else{
                    //         if(this.leis.indexOf(idx)<0){
                    //             this.leis.push(idx);
                    //         }
                    //         return false;
                    //     }
                    // })
                    //console.log(a)
                    // if(a){
                    //     if(this.leis.indexOf(idx)<0){
                    //         this.leis.push(idx);
                    //     }
                    // }else{
                    //     this.leis.splice(this.leis.indexOf(idx),1);
                    // }
                    this.xiaoji(idx,key);
                }
                else if(event.target.title=="xiao_no"){
                    this.leis.push(idx);
                    var lei=$(event.target).parent().find(".lei").html();
                    this.data.map(item=>{
                        if(item.type==lei){
                            if(this.ids.indexOf(item.id+'')<0){
                                this.ids.push(item.id+'')
                            }
                        }
                    })
                    console.log(this.ids.length,this.data.length)
                    if(this.ids.length==this.data.length){
                        this.b=1;
                    }else{
                        this.b=0;
                    }
                    this.xiaoji(idx,key);
                }
                else if(event.target.title=="xiao_all"){
                    this.leis.splice(this.leis.indexOf(idx),1);
                    var lei=$(event.target).parent().find(".lei").html();
                    this.data.map(item=>{
                        if(item.type==lei){
                            this.ids.splice(this.ids.indexOf(item.id),1)
                            //console.log(this.ids)
                        }
                    })
                }
                this.jisuan();
            },
            quanxuan(){
                if(event.target.title=="q_no"){
                    this.b=1;
                    this.data.map(item=>{
                        this.ids.push(item.id+'');
                        console.log(this.ids)
                    })
                }
                else if(event.target.title=="all"){
                    this.b=0;
                    this.ids=[];
                }
            }
        },
        components:{
            HD
        }
    }
</script>