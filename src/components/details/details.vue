<template>
    <div>
        <div class="mask"></div>
        <div class="success">加入购物车成功！</div>
        <div class="add_cart">
            <div class="close" @click="myclose">&times;</div>
            <div class="msg">
                <div class="img">
                    <img :src="mydata.img" />
                </div>
                <div class="other">
                    <div class="price">￥<span>{{mydata.sell}}</span></div>
                    <div class="kucun">库存<span></span>件</div>
                </div>
            </div>
            <div class="choose">
                <div class="color">
                    <p>颜色：</p>
                    <span>图片色</span>
                </div>
                <div class="size" @click="selected">
                    <p>尺码：</p>
                    <ul>
                        <li>S</li>
                        <li>M</li>
                        <li>L</li>
                    </ul>
                </div>
                <div class="amount">
                    <p>数量：</p>
                    <ul>
                        <li class="minus" @click="minus">&minus;</li>
                        <li class="count">{{this.qty}}</li>
                        <li class="plus" @click="plus">&plus;</li>
                    </ul>
                </div>
            </div>
            <div class="ensure" @click="ensure">确定</div>
        </div>
        <ul class="x_header">
            <li><a href="javascript:;" class="back" @click="back"><i class="fa fa-chevron-left"></i></a></li>
            <li><a href="javascript:;" class="stores">商品</a></li>
            <li><a href="javascript:;" class="comment">评价</a></li>
            <li><a href="javascript:;" class="info">详情</a></li>
            <li><a href="javascript:;" class="recommend">推荐</a></li>
            <li><a href="javascript:;" class="more" @click="more"><i class="fa fa-ellipsis-h"></i></a></li>
        </ul>
        <div class="x_main">
            <div id="banner" class="swipslider">
                <ul class="sw-slides">
                    <li class="sw-slide"><img :src="mydata.img" /></li>
                    <li class="sw-slide"><img src="src/images/cloth_2_02.jpg" /></li>
                    <li class="sw-slide"><img src="src/images/cloth_2_03.jpg" /></li>
                    <li class="sw-slide"><img src="src/images/cloth_2_04.jpg" /></li>
                    <li class="sw-slide"><img src="src/images/cloth_2_05.jpg" /></li>
                </ul>                
            </div>
            <div class="x_msg">
                <div class="name" v-if="mydata">{{mydata.name}}</div>                
                <div class="price">
                    <span class="sale" v-if="mydata">￥{{mydata.sell}}.00</span>
                    <del class="sell" v-if="mydata">￥{{mydata.price}}.00</del>
                    <span class="zhe"><i></i>折</span>
                    <div class="like" @click="attention"><i class="fa fa-heart-o" :style="{color:color}"></i>关注</div>
                </div>
                <ul class="ad1">
                    <li>免邮费</li>
                    <li>广东省广州市</li>
                </ul>
                <ul class="ad2">
                    <li><i class="fa fa-check-circle-o"></i><span>72小时发货</span></li>
                    <li><i class="fa fa-check-circle-o"></i><span>7天无理由退货</span></li>
                    <li><i class="fa fa-check-circle-o"></i><span>退货补运费</span></li>
                </ul>
            </div>
            <div class="stores">
                <div class="top">
                    <img src="src/images/cloth_1_02.jpg" />
                    <p>
                        <span>我是牌子货</span>
                        <ul>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star-half-o"></i></li>
                        </ul>
                    </p>
                    <div class="coming">
                        进店&gt;
                    </div>
                </div>
                <ul class="msg">
                    <li>
                        <p>192万</p>
                        <p>总销量</p>
                    </li>
                    <li>
                        <p>987709</p>
                        <p>收藏数</p>
                    </li>
                    <li>
                        <span>描述相符&nbsp;<i>4.75</i></span><br />
                        <span>质量满意&nbsp;<i>4.65</i></span>
                    </li>
                </ul>
            </div>
            <div id="comment" class="comment">
                <h3>买家评价&nbsp;139&nbsp;|&nbsp;销量&nbsp;2018<i class="fa fa-angle-right"></i></h3>
                <div class="some">
                    <span>有图片(14)</span>
                    <span>质量很好(12)</span>
                    <span>料子很不错(9)</span>
                    <span>款式好(10)</span>
                    <span>性价比高(18)</span>
                    <span>物流快(7)</span>
                </div>
                <div class="cont">
                    <div class="cont1">
                        <div class="top">
                            <img src="src/icon/20.jpg" />
                            <h5>橇***慈</h5>
                        </div>
                        <div class="middle">
                            质量很好，穿上身也很合适，挺漂亮的！
                        </div>
                        <div class="bottom">
                            <p>2018-5-29</p>
                            <p>身高：165.0cm&nbsp;体重：45.0kg&nbsp;是否合身：合身</p>
                        </div>
                    </div>
                    <div class="cont2">
                        <div class="top">
                            <img src="src/icon/23.jpg" />
                            <h5>寇***昌</h5>
                        </div>
                        <div class="middle">
                            很不错 这个质量也不错 值得购买喔
                        </div>
                        <div class="bottom">
                            <p>2018-5-20</p>
                            <p>身高：160.0cm&nbsp;体重：47.0kg&nbsp;是否合身：合身</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="description">
                <table rules="groups">
                    <thead>
                        <tr>
                            <th>尺码</th>
                            <th>胸围</th>
                            <th>腰围</th>
                            <th>裙长</th>
                            <th>袖长</th>
                            <th>肩宽</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>S</td>
                            <td>90</td>
                            <td>70</td>
                            <td>115</td>
                            <td>40</td>
                            <td>37</td>
                        </tr>
                        <tr>
                            <td>M</td>
                            <td>94</td>
                            <td>74</td>
                            <td>116</td>
                            <td>41</td>
                            <td>38</td>
                        </tr>
                        <tr>
                            <td>L</td>
                            <td>98</td>
                            <td>78</td>
                            <td>117</td>
                            <td>42</td>
                            <td>39</td>
                        </tr>
                    </tbody>
                </table>
                <ul>
                    <li><span>图案</span><span>碎花</span></li>
                    <li><span>裙型</span><span>A字裙</span></li>
                    <li><span>季节</span><span>夏季</span></li>
                    <li><span>颜色</span><span>图片色</span></li>
                    <li><span>材质</span><span>雪纺</span></li>
                    <li><span>组合形式</span><span>单件</span></li>
                    <li><span>领型</span><span>V领</span></li>
                    <li><span>裙长</span><span>中长裙（106-125cm）</span></li>
                    <li><span>袖长</span><span>短袖</span></li>
                    <li><span>腰型</span><span>高腰</span></li>
                    <li><span>风格</span><span>甜美</span></li>
                    <li><span>尺码</span><span>S、M、L</span></li>
                </ul>
            </div>
            <div id="guess" class="guess">
                <h3>猜你喜欢</h3>
                <ul>
                    <li><img src="src/images/makeup_2_03.jpg" alt="" /><p>￥245</p></li>
                    <li><img src="src/images/makeup_2_15.jpg" alt="" /><p>￥245</p></li>
                    <li><img src="src/images/makeup_2_16.jpg" alt="" /><p>￥348</p></li>
                    <li><img src="src/images/makeup_2_17.jpg" alt="" /><p>￥298</p></li>
                    <li><img src="src/images/makeup_2_18.jpg" alt="" /><p>￥769</p></li>
                    <li><img src="src/images/makeup_2_19.jpg" alt="" /><p>￥189</p></li>
                    <li><img src="src/images/makeup_2_20.jpg" alt="" /><p>￥179</p></li>
                    <li><img src="src/images/makeup_2_21.jpg" alt="" /><p>￥798</p></li>
                </ul>
            </div>
        </div>        
        <div class="x_footer">
            <div class="collect"><i class="fa fa-star-o"></i><p>收藏</p></div>
            <div class="cart" @click="go_cart"><i class="fa fa-shopping-cart"></i><span class="cart_qty">{{this.cart_qty}}</span><p>购物车</p></div>
            <div class="addCart" @click="addCart">加入购物车</div>
            <div class="buy" @click="buy">立即购买</div>
        </div>
    </div>
</template>
<script>
    import './details.css'
    import '../../css/swipeslider.css'
    import '../../lib/swipeslider.min.js'
    import http from '../../utils/httpclients.js'
    import $ from 'jquery'
    export default{
        data(){
            return {
                mydata:'',
                myid:0,
                color:'#3e3e3e',
                num1:0,
                num2:0,
                qty:1,
                cart_qty:0
            }
        },
        mounted(){
            let id = this.$route.query.id;
            this.myid = id;
            http.get('stores').then((res) => {
                for(let i = 0;i < res.data.length;i++){
                    if(i == id){
                        this.mydata = res.data[i]
                    }
                }
            })
            // 轮播图
            let banner = $('#banner')
            banner.swipeslider();
            banner.find('.sw-next-prev').css({'display':'none'})
            // 打折
            this.num1 = Math.ceil(Math.random()*9)
            $('.price').find($('.zhe')).find($('i')).text(this.num1)
            // 库存
            this.num2 = Math.ceil(Math.random()*10000)
            $('.add_cart').find($('.kucun')).find($('span')).text(this.num2);
            
            this.cart_length()
        },
        methods:{
            // 加入购物车
            addCart:function(){
                $('.mask').css({
                    width:$('body').width(),
                    height:$('body').height()
                }).fadeIn(200)
                $('.add_cart').slideDown(200)
            },
            selected:function(e){
                e.target.style.border = '0.013333rem solid #e92577'
                $(e.target).siblings().css('border','0.013333rem solid #bbb')
                $('.ensure').css({
                    'backgroundColor':'rgb(226, 59, 97)',
                    'color':'#fff'
                })
            },
            minus:function(e){
                if(this.qty == 1){
                    this.qty = 1
                    e.target.style.color = '#3e3e3e'
                }else{
                    this.qty--;
                }
                $('.add_cart').find($('.count')).text(this.qty)
            },
            plus:function(e){
                this.qty++;
                $('.add_cart').find($('.minus')).css('color','#e92577')
                $('.add_cart').find($('.count')).text(this.qty)
            },
            ensure:function(e){
                if(e.target.style.backgroundColor == 'rgb(226, 59, 97)'){
                    $('.mask').fadeOut()
                    $('.add_cart').slideUp()
                    this.x_show()
                    
                    this.add_to()
                }
            },
            // 用户加入购物车存入数据库
            add_to:function(){
                var username = window.localStorage.getItem('username')
                var user_id;
                var stores_id = this.$route.query.id;
                var stores_qty = $('.add_cart .count').text()
                http.get('users').then((res) => {

                    res.data.map((item) => {
                        if(username == item.username){
                            //console.log(item);

                            var myarr = item.arr || [];
                            if(typeof myarr === 'string'){
                                myarr = JSON.parse(myarr)
                            }
                            var idx;
                            var has = myarr.some(function(g,i){
                                //console.log(g,i)
                                idx = i;
                                return g.s_id == stores_id;
                            })
                            if(has){
                                myarr[idx].qty = (myarr[idx].qty)*1 + stores_qty*1
                                // myarr.splice(0,66)
                            }else{
                                myarr.push({s_id:stores_id,qty:stores_qty*1})
                            }
                            var arr = JSON.stringify(myarr)
                            user_id = item._id;
                            http.post('c_shuju',{y_id:user_id,arr}).then((res) => {
                                this.cart_length()
                            })
                        }
                    })
                })
            },
            // 购物车数量
            cart_length:function(){
                var username = window.localStorage.getItem('username')
                http.get('users').then((res) => {
                    res.data.map(item => {
                        if(username == item.username){
                            let myarr = item.arr || [];
                            if(typeof muarr == 'string'){
                                myarr = JSON.parse(myarr);
                            }
                            let mycart_count = 0
                            for(var i = 0; i < JSON.parse(myarr).length;i++){
                                mycart_count += JSON.parse(myarr)[i].qty
                                // mycart_count.push(JSON.parse(myarr)[i].qty)
                                $('.x_footer .cart_qty').text(mycart_count)
                            }
                        }
                    })
                })
            },
            myclose:function(){console.log(666)
                $('.mask').fadeOut()
                $('.add_cart').slideUp()
            },
            // 加入购物车动画
            x_show:function(){
                $('.success').fadeIn(400,() => {
                    $('.success').fadeOut(500)
                })
            },
            // 立即购买跳转结算页面
            buy:function(){
                this.$router.push({
                    name:'pay',
                    params:{
                        s_id:this.mydata.id,
                        qty:this.qty
                    }
                })
            },
            // 跳转购物车
            go_cart:function(){
                this.$router.push({
                    name:'car',
                    params:{
                        s_id:this.mydata.id,
                        qty:this.qty
                    }
                })
            },
            //返回
            back:function(){
                this.$router.go(-1);
            },
            // 更多
            more:function(){

            },
            // 关注
            attention:function(){
                this.color = this.color == '#3e3e3e' ? '#e92577' : '#3e3e3e';
            }
        }
    }
</script>
