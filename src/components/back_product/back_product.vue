<template>
    <div>
        <ul class="add_stores">
            <li><i class="fa fa-home"></i><a href="javascript:;">Home</a></li>
            <li><i class="fa fa-file-o"></i><a href="javascript:;">Product</a></li>
            <li @click="add_stores"><i class="fa fa-plus-square-o"></i><a href="javascript:;">AddStores</a></li>
        </ul>
        <table class="x_stores" @click="edit">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Sell</th>
                    <th>Classify</th>
                    <th>Brand</th>
                    <th>Type</th>
                    <th>Img</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(obj,idx) in mydata">
                    <td>{{obj.id}}</td>
                    <td>{{obj.name}}</td>
                    <td>{{obj.price}}</td>
                    <td>{{obj.sell}}</td>
                    <td>{{obj.classify}}</td>
                    <td>{{obj.brand}}</td>
                    <td>{{obj.type}}</td>
                    <td><img :src="obj.img" /></td>
                    <td><button class="y_edit">编辑</button><button class="y_del">删除</button></td>
                </tr>
            </tbody>
        </table>
        <div class="popup">
            <h3>增加商品</h3>
            <div class="close" @click="edit_close">&times;</div>
            <div class="cont">
                <label>I D</label>
                <input type="text" disabled id="myid" />
            </div>
            <div class="cont">
                <label htmlFor="name">名称</label>
                <input type="text" id="name" />
            </div>
            <div class="cont">
                <label htmlFor="price">原价</label>
                <input type="text" id="price" />
            </div>
            <div class="cont">
                <label htmlFor="sell">特价</label>
                <input type="text" id="sell" />
            </div>
            <div class="cont">
                <label htmlFor="classify">类别</label>
                <input type="text" id="classify" />
            </div>
            <div class="cont">
                <label htmlFor="brand">品牌</label>
                <input type="text" id="brand" />
            </div>
            <div class="cont">
                <label htmlFor="type">类别</label>
                <input type="text" id="type" />
            </div>
            <div class="cont">
                <label htmlFor="imgSrc">图片</label>
                <input type="text" id="imgSrc" />
            </div>
            <button class="submit" @click="add_submit">确认增加</button>
        </div>
        <div class="change">
            <h3>编辑商品</h3>
            <div class="close" @click="edit_close">&times;</div>
            <div class="cont">
                <label>I D</label>
                <input type="text" disabled id="myid" />
            </div>
            <div class="cont">
                <label htmlFor="name">名称</label>
                <input type="text" id="name" />
            </div>
            <div class="cont">
                <label htmlFor="price">原价</label>
                <input type="text" id="price" />
            </div>
            <div class="cont">
                <label htmlFor="sell">特价</label>
                <input type="text" id="sell" />
            </div>
            <div class="cont">
                <label htmlFor="classify">类别</label>
                <input type="text" id="classify" />
            </div>
            <div class="cont">
                <label htmlFor="brand">品牌</label>
                <input type="text" id="brand" />
            </div>
            <div class="cont">
                <label htmlFor="type">类别</label>
                <input type="text" id="type" />
            </div>
            <div class="cont">
                <label htmlFor="imgSrc">图片</label>
                <input type="text" id="imgSrc" />
            </div>
            <button class="submit" @click="edit_data">确认更改</button>
        </div>
        <div class="mask"></div>
    </div>
</template>
<script>
    import './back_project.css'
    import http from '../../utils/httpclients.js'
    import $ from 'jquery'
    export default{
        data(){
            return {
                mydata:'',
                add_id:''
            }
        },
        mounted(){
            http.get('stores').then((res) => {
                let new_res = res.data.sort((a,b) => {
                    return b.id - a.id;
                })
                this.mydata = new_res,
                this.add_id = res.data[0].id
            })
        },
        methods:{
            edit:function(e){
                if(e.target.className == "y_edit"){
                    $('.mask').css('display','block')
                    let change = $('.change')
                    change.css({
                        'display':'block',
                        'z-index':'2'
                    })
                    
                    // 点击后获取当前行的信息
                    $('.change #myid')[0].value = $(e.target).parent().parent().find('.y_id').text()
                    $('.change #name')[0].value = $(e.target).parent().parent().find('.y_name').text()
                    $('.change #price')[0].value = $(e.target).parent().parent().find('.y_price').text()
                    $('.change #sell')[0].value = $(e.target).parent().parent().find('.y_sell').text()
                    $('.change #classify')[0].value = $(e.target).parent().parent().find('.y_classify').text()
                    $('.change #brand')[0].value = $(e.target).parent().parent().find('.y_brand').text()
                    $('.change #type')[0].value = $(e.target).parent().parent().find('.y_type').text()
                    $('.change #imgSrc')[0].value = $(e.target).parent().parent().find('.y_img').text();
                }
                // 删除商品
                else if(e.target.className == 'y_del'){
                    let currentTr = e.target.parentNode.parentNode
                    let currentTr2 = $(e.target).parent().parent()
                    currentTr.parentNode.removeChild(currentTr);
                    
                    let idx = $(currentTr).find('.y_id').text();
                    // let myid = this.state.mydata[idx-1].id;

                    http.post('delPro',{pId:idx}).then((res) => {
                        console.log("DELETE==>")
                    })
                }
            },
            // 关闭弹窗
            edit_close:function(){
                $('.mask').css({display:'none'})
                $('.change').css({display:'none'})
                $('.popup').css({display:'none'})
            },
            // 更改商品
            edit_data:function(){
                let edit_data = {
                    id:$('.change #myid').val(),
                    name:$('.change #name').val(),
                    price:$('.change #price').val(),
                    sell:$('.change #sell').val(),
                    classify:$('.change #classify').val(),
                    brand:$('.change #brand').val(),
                    type:$('.change #type').val(),
                    img:$('.change #imgSrc').val()
                }
                http.post('updatePro',edit_data).then((res) => {
                    http.get('stores').then((res) => {
                        let new_res = res.data.sort((a,b) => {
                            return b.id - a.id;
                        })
                        this.mydata = new_res
                    })
                    $('.mask').css({display:'none'})
                    $('.change').css({display:'none'})
                })
            },
            // 增加商品弹窗
            add_stores:function(){
                $('.mask').css('display','block')
                let popup = $('.popup')
                popup.css({
                    'display':'block',
                    'z-index':'2'
                })
                let new_id = this.add_id + 1;
                $('.popup #myid').val(new_id)
                $('.popup #name').val('')
                $('.popup #price').val('')
                $('.popup #sell').val('')
                $('.popup #classify').val('')
                $('.popup #brand').val('')
                $('.popup #type').val('')
                $('.popup #imgSrc').val('')
            },
            // 确认增加商品
            add_submit:function(){
                let add_data = {
                    id:$('.popup #myid').val(),
                    name:$('.popup #name').val(),
                    price:$('.popup #price').val(),
                    sell:$('.popup #sell').val(),
                    classify:$('.popup #classify').val(),
                    brand:$('.popup #brand').val(),
                    type:$('.popup #type').val(),
                    img:$('.popup #imgSrc').val()
                }
                http.post('insertPro',add_data).then((res) => {console.log(666)
                    http.get('stores').then((res) => {
                        let new_res = res.data.sort((a,b) => {
                            return b.id - a.id;
                        })
                        this.setState({
                            mydata:new_res,
                            add_id:res.data[0].id
                        })
                    })
                    $('.mask').css({display:'none'})
                    $('.popup').css({display:'none'})
                })
            }
        }
    }
</script>
