<template>
  <div id="c_myCode">
    <header id="header">
        <i class="fa fa-bars" @click="t_sort"></i>
        <form class="search" action="value">
            <div>
                <span class="YG">YG</span><i>|</i>
                <i class="fa fa-search"></i>
                <input type="search" value="请输入搜索的内容" />
            </div>
        </form>
        <a class="h_login" >
            <span @click="t_login">登录</span>
        </a>
    </header>
    <main id="c_main">
        <div class="c_banner swipslider">
            <ul class="sw-slides">
                <li class="sw-slide"><img src="../../images/b1_banner1.jpg" /></li>
                <li class="sw-slide"><img src="../../images/b1_banner2.jpg" /></li>
                <li class="sw-slide"><img src="../../images/b1_banner3.jpg" /></li>
            </ul>            
        </div>
        <div class="c_main1"><img src="../../images/c_main1.gif" /></div>
        <nav class="c_applink">
            <ul class="app-items">
                <li class="app-item">
                    <a href="#"><img src="../../images/c_applink1.png" /></a>
                    <p>YG超市</p>
                </li>
                <li class="app-item">
                    <a href="#"><img src="../../images/c_applink2.png" /></a>
                    <p>唯品会</p>
                </li>
                <li class="app-item">
                    <a href="#"><img src="../../images/c_applink3.png" /></a>
                    <p>YG服饰</p>
                </li>
                <li class="app-item">
                    <a href="#"><img src="../../images/c_applink4.png" /></a>
                    <p>YG生鲜</p>
                </li>
                <li class="app-item">
                    <a href="#"><img src="../../images/c_applink5.png" /></a>
                    <p>充值</p>
                </li>
                <li class="app-item">
                    <a href="#"><img src="../../images/c_applink6.png" /></a>
                    <p>拼价</p>
                </li>
                <li class="app-item">
                    <a href="#"><img src="../../images/c_applink7.png" /></a>
                    <p>YG购物</p>
                </li>
                <li class="app-item">
                    <a href="#"><img src="../../images/c_applink8.png" /></a>
                    <p>券券</p>
                </li>
                <li class="app-item">
                    <a href="#"><img src="../../images/c_applink4.png" /></a>
                    <p>赚钱</p>
                </li>
                <li class="app-item">
                    <a href="#"><img src="../../images/c_applink2.png" /></a>
                    <p>YG-all</p>
                </li>
            </ul>
        </nav>
        <div class="c_news">
            <div class="h_news clearfix">
                <a href="#" class="fl n_left">云购消息</a>
                <ul class="fl">
                    <li>
                        <p><span>热门</span>&nbsp;草尼玛成功克隆，秒变敲理码！</p>
                    </li>
                    <li>
                        <p><span>热门</span>&nbsp;敲理码！浙江温州皮革厂倒闭了。</p>
                    </li>
                    <li>
                        <p><span>热</span>&nbsp;敲理码！草尼玛成功克隆。</p>
                    </li>
                </ul>
                <span class="h_more fr"><a href="#">更多</a></span>
            </div>
            <a href="#" class="h_link"><img src="../../images/c_news.jpg" /></a>
        </div>
        <div class="c_seckill">
            <div class="sk_top clearfix">
                <h2 class="fl">云购秒杀</h2>
                <h4 class="fl"><b>12</b>点场</h4>
                <div class="sk_time fl">
                    <span>00</span>:
                    <span>00</span>:
                    <span>00</span> 
                </div>
                <a href="#" class="fr">精选秒杀<i class="fa fa-arrow-circle-right"></i></a>                
            </div>
            <ul class="sk_bottom">
                <li @click="t_details" v-for="items in dataset" :value="items.id"  >
                    <a><img :src="items.img" /></a>
                    <h3 class="sk_price">￥{{items.price}}.00</h3>
                    <h4 class="sk_unprice">￥{{items.sell}}.00</h4>
                </li>
            </ul>
        </div>
        <div class="c_main2"><img src="../../images/c_main2.gif" /></div>
        <div class="c_discount">
            <a href="#"><img src="../../images/c_discount1.jpg" /></a>
            <a href="#"><img src="../../images/c_discount2.jpg" /></a>
            <a href="#"><img src="../../images/c_discount3.jpg" /></a>
            <a href="#"><img src="../../images/c_discount4.jpg" /></a>
            <a href="#"><img src="../../images/c_discount1.jpg" /></a>
            <a href="#"><img src="../../images/c_discount5.jpg" /></a>
            <a href="#"><img src="../../images/c_discount3.jpg" /></a>
            <a href="#"><img src="../../images/c_discount2.jpg" /></a>
        </div>
        <div class="c_banner2">
            <div class="b2_top">
                <img src="../../images/b2_topl.jpg" />
                <h3>本周精选</h3>
                <a href="#" class="b2_more">查看更多<img src="../../images/b2_topr.gif" alt="" /></a>
            </div>
            <div class="b2_bottom swiper-container">
                <!-- <ul class="swiper-wrapper">                    
                    <li class="swiper-slide"><img src="../../images/b2_botton1.jpg" alt="" /></li>
                    <li class="swiper-slide"><img src="../../images/b2_botton2.jpg" alt="" /></li>
                    <li class="swiper-slide"><img src="../../images/b2_botton3.jpg" alt="" /></li>
                    <li class="swiper-slide"><img src="../../images/b2_botton4.jpg" alt="" /></li>
                    <li class="swiper-slide"><img src="../../images/b2_botton5.jpg" alt="" /></li>
                </ul> -->
            </div>
        </div>
        <div class="c_recommend">
            <div class="r_top">
                <h3>为您推荐</h3>
                <a @click="t_login">登录账号，查看推荐的商品&nbsp;>></a>
            </div>
            <ul class="r_bottom clearfix" @click="t_details">                
                <li v-for="(item,idx) in dataset" :value="idx" :key="idx" :title="item.id">
                    <a><img :src="item.img" /></a>
                    <p>{{item.name}}</p>
                    <h6>￥{{item.price}}.00</h6>
                    <span>￥{{item.sell}}.00<i>成为会员更优惠！</i></span>
                </li>
            </ul>            
        </div>        
    </main>
    <cfooter :txt='timer'></cfooter>
  </div>
</template>
<script>  
    import './index.css'

    import '../../css/swipeslider.css'
    import '../../lib/swipeslider.min.js'
    // import './swiper.min.css'
    // import './swiper.min.js'
   
    // import './c_index.js'
    import $ from 'jquery'
    import cfooter from '../footer/footer.vue'
    import http from '../../utils/httpclients.js'
    export default{
        components:{
            cfooter            
        },
        data() {            
            return{
                dataset:[],
                timer:''
            }

        },

        computed: {
            
        },
        methods:{
            t_sort(){
                this.$router.push({name:"sort"})
                console.log(this.timer)
                clearInterval(this.timer);
            },
            t_login(){
                this.$router.push({name:"login"})
                clearInterval(this.timer);
            },            
            t_details(e){
                var id=($(e.target).parents('li')[0].title)
                this.$router.push({
                    name:"details",
                    query:{id}
                });
                clearInterval(this.timer);
            }
        },
        mounted () {
            $("#c_footer ul").children().eq(0).addClass("actived");
            // 轮播图
            let banner1 = $('.c_banner');
            banner1.swipeslider();
            banner1.find('.sw-next-prev').css('display','none')
            //消息滚动      
            
            this.timer = setInterval(function(){
                $(".h_news").find("ul:first").animate({
                    marginTop:"-30px"
                },500,function(){
                    $(this).css({
                        marginTop:"0px"
                    }).find("li:first").appendTo(this);
                })
            },3000)

            // 倒计时
                var skill = $('.sk_time');
                var spans = skill.children();
            var timer2 = setInterval(function(){
                var starttime = new Date(2018,5,31,12,0,0);
                var nowtime = new Date();
                // console.log(input1)
                var time = starttime - nowtime;
                var hour = parseInt(time/1000/60/60 %24);
                var minute = parseInt(time/1000/60 %60);
                var seconds = parseInt(time/1000 %60);
                hour = hour<10 ? '0'+ hour : hour;
                minute = minute<10 ? '0'+ minute : minute;
                seconds = seconds<10 ? '0'+ seconds : seconds;
                spans.eq(0).html(hour)
                spans.eq(1).html(minute)
                spans.eq(2).html(seconds)
            },1000)
            // 滚动吸顶换颜色            
            $(document).scroll(function(){
                // console.log(66)
                if($(document).scrollTop()>50){
                    $('#header').css({
                        "background":"rgb(233, 59, 61)",
                        "opacity":0.9,
                    });                    
                }
                if($(document).scrollTop()<=100){
                    // console.log(333)
                    $('#header').css({
                        "background":"linear-gradient(rgba(0,0,0,.9),rgba(255,255,255,0))",
                        "opacity":0.6,
                    }); 
                }       
            });            
            // 请求数据生成商品
            http.get('myshuju').then((res)=>{
                for(var i=0;i<res.data.length;i++){
                    this.dataset = res.data;                    
                }
            })

            
        }
    }
    
</script>
