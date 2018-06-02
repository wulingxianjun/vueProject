<template>
    <div class="x_houtai">
        <div class="header">
            <h2><img src="src/images/logo.png" />DaiS GOGO</h2>
            <div class="msg">
                <ul class="date">
                    <li><i class="fa fa-calendar-o"></i></li>
                    <li class="mydate"></li>
                </ul>
                <ul class="time">
                    <li><i class="fa fa-clock-o"></i></li>
                    <li class="mytime"></li>
                </ul>
                <div class="weather_box">
                    <ul class="weather">
                        <li><i class="fa fa-bullhorn"></i>北京&nbsp;<b>85</b>°F&nbsp;15km/h</li>
                        <li><i class="fa fa-bullhorn"></i>上海&nbsp;<b>85</b>°F&nbsp;15km/h</li>
                        <li><i class="fa fa-bullhorn"></i>广州&nbsp;<b>85</b>°F&nbsp;15km/h</li>
                        <li><i class="fa fa-bullhorn"></i>深圳&nbsp;<b>85</b>°F&nbsp;15km/h</li>
                        <li><i class="fa fa-bullhorn"></i>杭州&nbsp;<b>85</b>°F&nbsp;15km/h</li>
                    </ul>                   
                </div>
            </div>
            <ul class="right">
                <li v-if="this.show"><a href="javascript:;" @click="shrink"><i class="fa fa-arrow-circle-o-left"></i></a></li>
                <li v-else="this.show"><a href="javascript:;" @click="expand"><i class="fa fa-arrow-circle-o-right"></i></a></li>
                <li><a href="javascript:;" @click="full"><i class="fa fa-arrows-alt"></i></a></li>
                <li><a href="javascript:;"><i class="fa fa-user-circle-o"></i>Adminstrator</a></li>
                <li><a href="javascript:;"><i class="fa fa-cog"></i>Setting</a></li>
                <li><a href="javascript:;" @click="quit"><i class="fa fa-sign-out"></i></a></li>
                <li></li>
            </ul>            
        </div>
        <div class="body">
            <div class="menu">
                <p><a href="javascript:;"  @click="shrink"><i class="fa fa-arrow-left"></i></a></p>
                <ul class="nav">
                    <li><a href="javascript:;" @click="change('back_users',$event)"><i class="fa fa-users"></i><span>Users</span></a></li>
                    <li><a href="javascript:;" @click="change('back_product',$event)"><i class="fa fa-file-o"></i><span>Product</span></a></li>
                    <li><a href="javascript:;" @click="change"><i class="fa fa-pie-chart"></i><span>Charts</span></a></li>
                    <li><a href="javascript:;" @click="change('weather')"><i class="fa fa-cloud"></i><span>Weather</span></a></li>
                    <li><a href="javascript:;" @click="change"><i class="fa fa-map-marker"></i><span>Map</span></a></li>
                    <li><a href="javascript:;" @click="change"><i class="fa fa-map-marker"></i><span>Map</span></a></li>
                    <li><a href="javascript:;" @click="change"><i class="fa fa-map-marker"></i><span>Map</span></a></li>
                    <li><a href="javascript:;" @click="change"><i class="fa fa-map-marker"></i><span>Map</span></a></li>
                </ul>
            </div>
            <div class="main"><product></product></div>
        </div>
        <div class="footer">
            <p><span><b>Leader：</b>Jasmine-fy</span>&nbsp;&nbsp;<b>Members：</b>QingxiaWang、GuojinLu、ZicongLi</p>
        </div>
    </div>
</template>
<script>
    import './back_home.css'
    import http from '../../utils/httpclients.js'
    import $ from 'jquery'
    import product from '../back_product/back_product.vue'
    export default{
        data(){
            return {
                mywidth:'210px',
                show:true,
                users:'',
                stores:''
            }
        },
        components:{
            product
        },
        mounted(){
            $('.x_houtai').css({
                "width":$('body').width(),
                "height":$(window).height(),
                background:'url(src/images/bg.jpg)'
            })
            var get_username = window.localStorage.getItem('username');
            $(".yonghu").text('')
            $(".yonghu").text(get_username);
            if(get_username){
                http.get('users').then((res) => {
                    res.data.map((item) => {
                        if(item.username == get_username){
                            $(".touxiang").css({
                                background:`url('${item.img}') center`,
                                backgroundSize:"cover"
                            })
                        }
                    })
                });
            }else{
                this.$router.push({name:'back_login'})
            }
            // 日历时间
            $('.header .mydate').html(new Date().toUTCString().substr(0,16))
            var timer = setInterval(function(){
                var d = new Date();
                var hour = d.getHours();
                var min = d.getMinutes();
                min = min < 10 ? '0' + min : min;
                var sec = d.getSeconds();
                sec = sec < 10 ? '0' + sec : sec;
                $('.header .mytime').html(hour+'&nbsp;:&nbsp;'+min+'&nbsp;:&nbsp;'+sec)                
            },1000)
            // 滚动文字
            //this.scroll()
            this.myscroll()

        },
        methods:{
            myscroll:function(){                
                let box = $('.header .weather_box')
                let ul1 = $('.header .weather');
                let timer = setInterval(function(){
                    box.find("ul:first").animate({
                        marginTop:"-20px"
                    },500,function(){
                        $(this).css({
                            marginTop:"0px"
                        }).find("li:first").appendTo(this)
                    })
                },3000)
            },
            scroll:function(){
                let box = $('.header .weather_box')
                let ul1 = $('.header .weather');
                let ul2 = $('.header .ul2');
                box.css({
                    width:'210px',
                    height:'22px'
                })
                ul2[0].innerHTML = ul1[0].innerHTML
                box.scrollTop = 0;
                var timer = setInterval(rollStart,50);
                box.on('mouseover',function(){
                    clearInterval(timer)
                }).on('mouseout',function(){
                    timer = setInterval(rollStart,50)
                })
                function rollStart(){
                    if(box.scrollTop >= ul1.scrollHeight){console.log(666)
                        box.scrollTop = 0
                    }else{console.log(777)
                        box.srcollTop++;
                    }
                    
                }

            },
            // rollStart:function(){console.log(111)
            //     let box = $('.header .weather_box')
            //     if(box.scrollTop >= $('.header .weather').scrollHeight){
            //         box.scrollTop = 0
            //     }else{
            //         box.srcollTop++;
            //     }
            // },
            // 收缩
            shrink:function(){
                var x_menu = document.querySelector('.menu')
                x_menu.style.width = '0px';        
                this.show = false
                var x_main = $('.main')
                x_main.css({'left':'20px','transition':'all .5s'})
            },
            // 展开
            expand:function(){
                var x_menu = document.querySelector('.menu')
                x_menu.style.width = '210px';
                this.show = true
                var x_main = $('.main')
                x_main.css({'left':'230px','transition':'all .5s'})
            },
            // 全屏
            full:function(){
                $('.x_houtai').css({
                    width:$('body').width(),
                    height:$('body').height(),
                    background:'url(src/images/bg.jpg)',
                    'background-size':'cover'
                })
                var docElm = document.documentElement;
                //W3C
                if (docElm.requestFullscreen) {
                    docElm.requestFullscreen();
                }
                //FireFox
                else if (docElm.mozRequestFullScreen) {
                    docElm.mozRequestFullScreen();
                }
                //Chrome等
                else if (docElm.webkitRequestFullScreen) {
                    docElm.webkitRequestFullScreen();
                }
                //IE11
                else if (elem.msRequestFullscreen) {
                    elem.msRequestFullscreen();
                }
            },
            // 退出
            quit:function(){
                this.$router.push({name:'back_login'})
            },
            // 菜单栏点击样式改变
            active:function(e){
                $(e).addClass('active');
                $(e).find('i').css({'color':'#75b9e6'})
                $(e).parent().siblings().find('a').removeClass('active')
                $(e).parent().siblings().find('i').css('color','#b1b6bd')
            },
            // 跳转
            change:function(router,e){
                if(router){
                    this.$router.push({name: '/back_home/'+router})
                    this.active(e.target)
                }else{
                    this.active(e.target)
                }
            }
        }
    }
</script>
