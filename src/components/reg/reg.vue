<template>
  <div class="regBox">
     <div class="logo">
        <h1>SIGN UP</h1>
    </div>
    <ul class="inputBox">
         <li><input type="text" placeholder="Username" @blur="nameCheck" v-model="data.username"/></li>
         <li><input type="text" placeholder="verification code" @blur="codeCheck" v-model="myCode"/><span @click="getCode">{{code}}</span></li>
         <li><input type="password" placeholder="Password" @input="pwdCheck" v-model="data.password"/></li>
     </ul>
         <p class="regTips" v-text="tips"></p>
     <div class="regbtn">
         <button class="reg" @click="reg" :disabled="isDisabled">Register</button>
     </div>
     <div class="tips">注册即表示同意<a href="#">《用户协议》</a></div>
  </div>
</template>
<script>
    import './reg.css';
    import http from '../../utils/httpclients.js';
    export default{
        data(){
            return{
                data: {
                    username: '',
                    password: '',
                    img:''
                },
                tips:'',
                code:'Get Code',
                myCode:'',
                canUname:false,
                canPwd:false,
                canCode:false,
            }
        },
        methods:{
            nameCheck(){
                if(this.data.username.length == 0){
                    console.log('111');
                    this.tips = '请输入用户名'
                }else{
                    http.post('select_users',{findname:this.data.username}).then((res)=>{
                        console.log(res);
                        if(res.status){
                            this.tips = '用户名已存在'
                        }else{
                             this.tips = '';
                                this.canUname = true;
                        }
                    })
                }
            },
            pwdCheck(){
                if(this.data.password.length==0){
                    this.tips = '请输入密码'
                }else if(this.data.password.length < 6){
                    this.tips = '密码长度不能少于六位'
                }else{
                    this.tips = '';
                    this.canPwd = true;
                }
            },
            codeCheck(){
                if(this.myCode.length == 0 || this.code == 'Get Code'){
                    this.tips = '请输入验证码'
                }else if(this.myCode.toLowerCase() != this.code.toLowerCase()){
                    this.tips = '验证码不正确'
                }else{
                    this.tips = ''
                    this.canCode = true;
                }
            },
            getCode(){
                var str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
                this.code="";
                for(var i=0;i<6;i++){
                    this.code += str[parseInt(Math.random()*str.length)];
                }
            },
            reg(){
                var _pic=Math.ceil(Math.random()*30);
                var _img=`src/userImg/${_pic}.jpg`;
                this.data.img = _img;
                http.post('reg', this.data).then((res) => {
                    if(res){
                        this.$router.push({name: 'login'});
                    }
                }) 
            }
        },
        computed:{
            isDisabled(){
                if(this.canUname && this.canPwd && this.canCode){
                    return false;
                }else{
                    return true;
                }
            }
        }
    }
</script>
