<template>
  <div class="loginBox">
    <div class="logo">
        <h1>SIGN IN</h1>
    </div>
    <div class="inputBox">
     <ul>
         <li><input type="text" placeholder="Username" v-model="data.username"/></li>
         <li><input type="password" placeholder="Password" v-model="data.password"/></li>
     </ul>
     <!-- <a href="#">Forget Passworld</a> -->
    </div>
     <ul class="btnBox">
         <li class="login2" @click="login" :disabled="isDisabled">Login</li>
         <li class="register" @click="register">Register</li>
     </ul>
     <div class="otherBox">
        <p><span>or</span></p>
         <div class="orWay"><i class="fa fa-wechat"></i><i class="fa fa-weibo"></i><i class="fa fa-qq"></i></div>
     </div>
     <div class="loginTips" v-show="loginTips">
        <div>
            <p>登录失败</p>
            <p>用户名或者密码错误</p>    
        </div>
     </div>
  </div>
</template>
<script>
    import './login.css'
    import http from '../../utils/httpclients.js'
    export default{
        data(){
            return {
                data:{
                    username:'',
                    password:''
                },
                loginTips:false
            }
        },
        methods:{
            login(){
                if(!this.isDisabled){
                    http.post('login', this.data).then((res) => {
                        if(res.status){
                            window.localStorage.clear();
                            window.localStorage.setItem('token', res.data);
                             window.localStorage.setItem('username', this.data.username);
                            this.$router.go(-1);
                            this.loginTips = true;
                        }else{
                            this.loginTips = true;
                        }
                    })  
                }
            },
            register(){
                this.$router.push({name:'reg'})
            }
        },
        computed:{
            isDisabled(){
                if(this.data.username.length > 0 && this.data.password.length > 0){
                    return false;
                }else{
                    return true;
                }
            }
        }
    }
</script>
