<template>
    <div>
        <ul class="x_header">
            <li class="back"><i class="fa fa-chevron-left" aria-hidden="true"></i></li>
            <li class="stores">商品</li>
            <li class="comment">评价</li>
            <li class="info">详情</li>
            <li class="recommend">推荐</li>
            <li class="back_home"><i class="fa fa-home" aria-hidden="true"></i></li>
        </ul>
        <div class="x_main">
            <div class="nav"></div>
            <div class="x_banner">
            
            </div>
            <div class="x_msg">
                <div class="name"></div>
                <div class="sell"></div>
                <div class="price"></div>
                <div class="ad"></div>
            </div>
        </div>        
        <div class="x_footer">
            <div class="left">
                <div class="collect"><i class="icon iconfont icon-favorite"></i><p>收藏</p></div>
                <div class="stores"><p>小店</p></div>
                <div class="cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i><p>购物车</p></div>
            </div>
            <div class="addCart"></div>
            <div class="buy"></div>
        </div>
    </div>
</template>
<script>
    import './details.css'
    export default{
        data(){
            return {}
        }
    }
</script>
