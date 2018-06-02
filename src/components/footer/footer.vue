<template>
    <footer id="c_footer">
        <ul>
            <li @click="t_index"><i class="fa fa-home"></i><span>首页</span></li>
            <li @click="t_sort"><i class="fa fa-search"></i><span>分类</span></li>
            <li @click="t_car"><i class="fa fa-shopping-cart"></i><span>购物车</span></li>
            <li @click="t_user"><i class="fa fa-user-o"></i><span>我的</span></li>
        </ul>
    </footer>
</template>
<script>
    import './footer.css'
    import http from '../../utils/httpclients.js'
    export default{
        props:['txt'],
        methods:{
            t_index(){
                clearInterval(this.txt);
                this.$router.push({name:'index'});

            },
            t_sort(){
                clearInterval(this.txt);
                this.$router.push({name:'sort'});
                // console.log(this.txt)
            },
            t_car(){
                this.$router.push({name:"car"})
                clearInterval(this.timer);
            },
            t_user(){
                this.$router.push({name:"user"})
                clearInterval(this.timer);
            }
           
        },
        
        
    }
</script>