<template>
  <div class="dabox">
    <header :class="classObject">
        <div class="head1">
            <div class="fanhui"><i class="fa fa-angle-left" aria-hidden="true"></i></div>
            <div class="feng">
                <i class="fa fa-search fang" aria-hidden="true"></i>
                <input type="text" placeholder="洗面奶" class="sou" @keydown="enter">
            </div>
            <div class="dian"></div>
        </div>
        <ul class="head2">
            <li>综合 <i class="fa fa-caret-down xia" aria-hidden="true"></i> </li>
            <li>销量</li>
            <li @click="j_paixu">价格 <i class="fa fa-sort-asc shang2" aria-hidden="true"></i><i class="fa fa-caret-down xia2" aria-hidden="true"></i> </li>
            <li @click="shaixuan">筛选 <img src="../../images/shaixuan.png" class="shai"/></li>
        </ul>
        <ul class="head3">
            <li class="actived">618</li>
            <li>品牌 <i class="fa fa-caret-down xia" aria-hidden="true"></i></li>
            <li>分类 <i class="fa fa-caret-down xia" aria-hidden="true"></i> </li>
            <li>功效  <i class="fa fa-caret-down xia" aria-hidden="true"></i></li>
        </ul>
    </header>
    <main class="lis_main">
        <ul class="lis clearfix" @touchstart="start" @touchmove="move" @mousewheel="dong" @click="feigou">
            <li v-for="(item,idx) in data" class="pingpu" v-if="mo==0" :title="item.id">
                <img :src="item.img" class="pu_tu"/>
                <p class="p1"><img src="../../images/618.png"/>  {{item.name}}  </p>
                <p class="p2"><span class="fuhao">￥</span><span class="cell">{{item.sell}} </span> <del>￥{{item.price}}</del></p>
                <p class="p3"><img src="../../images/ziying.png"/>{{item.id*(idx+1)*66}}条评论</p>
                <i class="fa fa-cart-plus che" aria-hidden="true"></i>
            </li>
            <li v-for="(item,idx) in data" class="liebiao" v-if="mo==1" :title="item.id">
                <img :src="item.img" class="lie_tu"/>
                <div class="fl you">
                    <p class="p1"><img src="../../images/618.png"/>  {{item.name}}  </p>
                    <p class="p2"><span class="fuhao">￥</span><span class="cell">{{item.sell}} </span> <del>￥{{item.price}}</del></p>
                    <p class="p3"><img src="../../images/ziying.png"/>{{(item.id*1+1)*66}}条评论</p>
                </div>
                <i class="fa fa-cart-plus che" aria-hidden="true"></i>
            </li>
        </ul>
        <ul class="guding">
            <li class="to_top" v-show="p>600" @click="to_top"></li>
            <li class="car" @click="t_car"><i class="fa fa-cart-plus che actived" aria-hidden="true"></i><i class="num" v-if="len>0">{{len}}</i></li>
            <li :class="classObject2" @click="mokuai"></li>
        </ul>
    </main>
    <div :class="classObject3">
        <div class="shai1"><span  class="yungo">云GO服务</span> <img src="../../images/dingwei.png" class="dingwei"/><span class="dizhi actived">广东省广州市天河区上元岗西街，老邮局</span></div>
        <ul class="shai2 clearfix">
            <li>云GO物流</li>
            <li>货到付款</li>
            <li>仅看有货</li>
            <li>促销</li>
            <li>全球购</li>
            <li>PLUS专享价</li>
            <li>配送全球</li>
        </ul>
        <h4 class="jiaqu">价格区间</h4>
        <div class="qujian">
            <input type="number" class="qi"/>
            <img src="../../images/gang.png" class="gang"/>
            <input type="number" class="zhi"/>
            <ul class="clearfix">
                <li><p>10-16</p>32%选择</li>
                <li><p>16-41</p>38%选择</li>
                <li><p>41-83</p>21%选择</li>
            </ul>
        </div>
        <img src="../../images/dakuai.png" class="dakuai"/>
        <ul class="btn">
            <li>重置</li>
            <li class="queding" @click="queding">确定</li>
        </ul>
    </div>
    <div class="zhezhao" @click="zhe"></div>
    <div class="tanchuang">
        <h5>先登录再加入购物车吧！</h5>
        <ul>
            <li @click="t_qu">取消</li>
            <li @click="t_que">确认</li>
        </ul>
    </div>
  </div>
</template>
<script>
    import "./list.css";
    import http from "../../utils/httpclients";
    export default{
        data(){
            return {
                i:0,
                len:0,
                mo:0,
                data:"",
                t:0,
                p:0,
                classObject: {
                        list_head: true,
                        dong: false
                    },
                classObject2: {
                        mokuai: true,
                        mokuai1: false
                    },
                classObject3: {
                        shaixuan: true,
                        tan_shai: false
                    }
                }
        },
        mounted(){
            var yonghu=window.localStorage.getItem("username");
            http.get("users").then(res=>{
                res.data.map(item=>{
                    if(item.username==yonghu){
                        var naduotiaoshuju = item.arr || [];
                        if(typeof naduotiaoshuju === 'string'){
                            naduotiaoshuju = JSON.parse(naduotiaoshuju);
                        };
                        if(naduotiaoshuju.length>0){
                            this.len=naduotiaoshuju.length;
                        }
                    }
                })
            })

            var _val=this.$route.query.val;
            console.log(_val)
            if(_val){
                http.post('mohu',{val:_val}).then(res=>{
                    this.data=res.data;
                })
            }else{
                http.get('myshuju').then((res)=>{
                    this.data=res.data;
                })
            }
        },
        methods:{
            feigou(){
                //console.log($(event.target).parents("li"))
                var s_id=$(event.target).parents("li")[0].title;
                if(event.target.tagName=="I"){
                    var yonghu=window.localStorage.getItem("username");
                    if(yonghu){
                        var gouwucar=$(".car .che");
                        var img_top=$(event.target).parents("li").children().eq(0).offset().top;
                        var img_left=$(event.target).parents("li").children().eq(0).offset().left;
                        var img_width=$(event.target).parents("li").children().eq(0).width();
                        var img_height=$(event.target).parents("li").children().eq(0).height();
                        var clone_img=$(event.target).parents("li").children().eq(0).clone(true);
                        clone_img.css({
                            position:"absolute",
                            width:img_width,
                            height:img_height,
                            top:img_top,
                            left:img_left,
                            zIndex:"900"
                        })
                        $(document.body).append(clone_img);
                        clone_img.animate({left:gouwucar.offset().left,width:20,height:20},700);
                        clone_img.animate({top:gouwucar.offset().top,width:20,height:20},()=>{
                            clone_img.remove();
                            http.get("users",{quxiao:"quxiao"}).then(res=>{
                                res.data.map(item=>{
                                    if(item.username==yonghu){
                                        var naduotiaoshuju = item.arr || [];
                                        if(typeof naduotiaoshuju === 'string'){
                                                naduotiaoshuju = JSON.parse(naduotiaoshuju);
                                            };
                                        var idx;
                                        var has = naduotiaoshuju.some(function(g,i){
                                            idx = i;
                                            return g.s_id == s_id;
                                        });
                                        if(has){
                                            naduotiaoshuju[idx].qty=naduotiaoshuju[idx].qty*1+1;
                                        }else{
                                            naduotiaoshuju.push({s_id:s_id,qty:1});
                                        }
                                        this.len=naduotiaoshuju.length;
                                        var arr=JSON.stringify(naduotiaoshuju)
                                        http.post("c_shuju",{y_id:item._id,arr,quxiao:"quxiao"}).then(res=>{
                                            console.log(res)
                                        })
                                    }
                                })
                            })
                        })
                    }else{
                        $('body').css("overflow","hidden");
                        $(".zhezhao").fadeIn(300);
                        $(".tanchuang").fadeIn(300);
                    }
                }else{
                    this.$router.push({name:"details",query:{
                        id:s_id
                    }});
                }
            },
            t_qu(){
                $('body').css("overflow","auto");
                $(".zhezhao").fadeOut(300);
                $(".tanchuang").fadeOut(300);
            },
            t_que(){
                this.$router.push({name:"login"})
            },
            t_car(){
                this.$router.push({path:"/car"})
            },
            shaixuan(){
                $('body').css("overflow","hidden");
                $(".zhezhao").fadeIn(300);
                this.classObject3.tan_shai=true;
            },
            zhe(){
                $('body').css("overflow","auto");
                $(".zhezhao").fadeOut(300);
                $(".tanchuang").fadeOut(300);
                this.classObject3.tan_shai=false;
            },
            queding(){
                $('body').css("overflow","auto");
                $(".zhezhao").fadeOut(300);
                this.classObject3.tan_shai=false;
                var qi=$(".qujian .qi").val();
                var zhi=$(".qujian .zhi").val();
                if(qi&&zhi){
                    var data=[];
                    http.get('myshuju').then((res)=>{
                        res.data.map((item)=>{
                            if(item.sell>qi&&item.sell<zhi){
                                data.push(item)
                            }
                        });
                        this.data=data;
                    })
                }
            },
            dong(){
                var scl=$(document).scrollTop();
                this.p=scl;
                if(this.p>=this.t&&scl>0){
                    this.classObject.dong=true;
                }else{
                    this.classObject.dong=false;
                }
                this.t=this.p;
            },
            mokuai(){
                this.mo=this.mo==0?1:0;
                this.classObject2.mokuai2=this.classObject2.mokuai2==true?false:true;
            },
            start(){
                var touch = event.touches[0],
                y = Number(touch.pageY);
                this.p=y;
            },
            move(){
                var touch = event.touches[0],
                y = Number(touch.pageY);
                if(y>this.p){
                    this.classObject.dong=false;
                }else{
                    this.classObject.dong=true;
                }
            },
            to_top(){
                $("html,body").animate({scrollTop:0},()=>{
                    this.p=0;
                    this.classObject.dong=false;
                });
            },
            j_paixu(){
                $(event.target).addClass("liang");
                var data=this.data;
                if(this.i==0){
                    data.sort(function(a,b){
                        return a.sell-b.sell;            
                    })
                    this.i=1;
                    $(".head2 .shang2").addClass("liang");
                    $(".head2 .xia2").removeClass("liang");
                }else{
                    data.sort(function(a,b){
                        return b.sell-a.sell;            
                    })
                    this.i=0;
                    $(".head2 .xia2").addClass("liang");
                    $(".head2 .shang2").removeClass("liang");
                }
                this.data=data;
            },
            enter(){
                if(event.keyCode==13){
                    var _val=event.target.value;
                    http.post('mohu',{val:_val}).then(res=>{
                        this.data=res.data;
                    })
                }
            }
        }
    }
</script>
