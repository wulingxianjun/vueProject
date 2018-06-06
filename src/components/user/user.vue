<template>
    <div class="userBox">
        <div class="appMain">
            <div class="wrapper"></div>
            <div class="scollHead">
                <div class="scollImg"><img :src="userimg"/></div>
                <div class="scollName" v-model="username">{{username}}</div>
                <div class="setting">设置</div>
            </div>
            <div class="userSetting"><i class="fa fa-commenting"></i><i class="fa fa-cog" @click="tuichu"></i></div>  
            <header class="header"> 
                <div class="userImg"><img :src="userimg"/></div>
                <div class="uName" v-model="username" @click="t_login">{{username}}</div>
                <ul class="about">
                    <li><p>175</p><p>收藏</p></li>
                    <li><p>85</p><p>关注</p></li>
                    <li><p>382</p><p>足迹</p></li>
                    <li><p>4</p><p>卡券</p></li>
                </ul>
            </header>
            <main class="aboutUser">
                <div class="myOrder">
                    <div class="orderTit"><h3>我的订单</h3><a href="#">查看全部 ></a></div>
                    <ul class="orderStatus">
                        <li><i class="fa fa-credit-card-alt"></i><p>待付款</p></li>
                        <li><i class="fa fa-truck"></i><p>待发货</p></li>
                        <li><i class="fa fa-archive"></i><p>待收货</p></li>
                        <li><i class="fa fa-paste"></i><p>待评价</p></li>
                        <li><i class="fa fa-outdent"></i><p>退货退款</p></li>
                    </ul>
                    <div class="logistics">
                        <div class="logiTit"><h3>最新物流</h3><span>05-30</span></div>
                        <div class="logiNews">
                            <div><img src="../../images/sport_2_02.jpg"/></div>
                            <div class="statusNews">
                                <p class="logiStatus">已签收</p>
                                <p>包裹已签收，感谢你使用菜鸟联盟服务。</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="myService">
                    <div class="serviceTit"><h3>我的服务</h3><a href="#">查看更多 ></a></div>
                    <ul class="serviceList">
                        <li><i class="fa fa-image"></i><p>主题换肤</p></li>
                        <li><i class="fa fa-folder-open"></i><p>领券中心</p></li>
                        <li><i class="fa fa-money"></i><p>闲置换钱</p></li>
                        <li><i class="fa fa-user"></i><p>客服服务</p></li>
                        <li><i class="fa fa-user-circle"></i><p>会员签到</p></li>
                        <li><i class="fa fa-folder"></i><p>充值中心</p></li>
                        <li><i class="fa fa-map"></i><p>优惠券</p></li>
                        <li><i class="fa fa-window-maximize"></i><p>红包</p></li>
                    </ul>
                </div>
                <div class="myService">
                    <div class="serviceTit"><h3>我的服务</h3><a href="#">查看更多 ></a></div>
                    <ul class="serviceList">
                        <li><i class="fa fa-image"></i><p>主题换肤</p></li>
                        <li><i class="fa fa-folder-open"></i><p>领券中心</p></li>
                        <li><i class="fa fa-money"></i><p>闲置换钱</p></li>
                        <li><i class="fa fa-user"></i><p>客服服务</p></li>
                        <li><i class="fa fa-user-circle"></i><p>会员签到</p></li>
                        <li><i class="fa fa-folder"></i><p>充值中心</p></li>
                        <li><i class="fa fa-map"></i><p>优惠券</p></li>
                        <li><i class="fa fa-window-maximize"></i><p>红包</p></li>
                    </ul>
                </div>
            </main>   
        </div>
        <HD/>
        <div class="zhezhao" @click="zhe"></div>
        <div class="tanchuang" @click="fanbuer">
            <h5>确定退出登录吗？</h5>
            <ul>
                <li class="quxiao">取消</li>
                <li class="queding">确认</li>
            </ul>
        </div>
    </div>
</template>
<script>
    import './user.css';
    import HD from "../footer/footer.vue";
    import http from '../../utils/httpclients.js';
    import $ from '../../lib/jquery-3.2.1.js';
    export default{
        data(){
            return{
                username:'',
                userimg:'' 
            }
        },
        methods:{
            userJudge(){
                if(window.localStorage.getItem("token") == null){
                    this.$router.push({name:'login'})
                }else{
                    this.$router.push({name:'user'})
                }
            },
            t_login(){
                http.post('verifytoken').then((res)=>{
                    console.log(res);
                    if(res.status){

                    }else{
                        this.$router.push({name:"login"})
                    }
                })
            },
            zhe(){
                $(".zhezhao").fadeOut(300);
                $(".tanchuang").fadeOut(300);
            },
            tuichu(){
                http.post('verifytoken').then((res)=>{
                    if(res.status){
                        $(".zhezhao").fadeIn(300);
                        $(".tanchuang").fadeIn(300);
                    }
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
                    window.localStorage.clear();
                    this.userimg = "./src/userImg/chushi.png";
                    this.username="注册/登录";
                }
            }
        },
        mounted(){
            $("#c_footer ul").children().eq(3).addClass("actived");
            $('.scollHead').hide();   
            $('.appMain').scroll(function(e) { 
                var scrollT = $('.appMain').scrollTop();  
                if (scrollT > 0) {  
                    $('.scollHead').fadeIn('800');  
                }else {  
                    $('.scollHead').fadeOut('400');  
                }  
            }); 
            http.post('verifytoken').then((res)=>{
                console.log(res);
                if(res.status){
                    console.log(res.data);
                    this.username = res.data.username;
                    http.post('select_users',{findname:this.username}).then((res)=>{
                        if(res.status){
                            this.userimg = res.data[0].img;
                            console.log(this.userimg);
                        }
                    })
                }else{
                    this.userimg = "./src/userImg/chushi.png";
                    this.username="注册/登录"
                }
            })
               
        },
        components:{
            HD
        }
    }
</script>
