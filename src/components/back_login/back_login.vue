<template>
    <div>
        <div class="backgr"></div>
            <div class="login">
                <div class="cc"></div>
                <div class="content">
                    <div class="cont">
                        <span>用户名：</span>
                        <input type="text" placeholder="" class="username" />   
                    </div>
                    <div class="cont">
                        <span>密&nbsp;&nbsp;&nbsp;码：</span>
                        <input type="password" class="password" />
                    </div>
                    <button class="btn_login" @click="login">登录<div class="btn btn1"></div><div class="btn btn2"></div><div class="btn btn3"></div><div class="btn btn4"></div></button>  
                </div>
                <div class="jiao jiao1"></div>
                <div class="jiao jiao2"></div>
            </div>
        </div>
    </div>
</template>
<script>
    import './back_login.css'
    import http from '../../utils/httpclients.js'
    import $ from 'jquery'
    export default{
        data(){
            return {

            }
        },
        mounted(){
            $('.backgr').css({
                "width":$('body').width(),
                "height":$(window).height(),
                "background":"url('src/images/back1.jpg')",
                "background-size":"cover"
            })
        },
        methods:{
            login:function(){
                console.log(this)
                var _username = $(".username").val();
                var _password = $(".password").val();
                http.post('login', {username:_username,password:_password}).then((res) => {
                    console.log(res)
                    if(res.status){
                        alert("登录成功！");
                        window.localStorage.setItem('token', res.data);
                        window.localStorage.setItem('username', _username);
                        this.$router.push({name: '/back_home'});
                    }else{
                        alert("密码错误！");
                    }
                })
            }
        }
    }
</script>
