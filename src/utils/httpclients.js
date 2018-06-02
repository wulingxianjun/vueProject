import axios from 'axios'
import router from '../router/router'

const baseUrl = 'http://192.168.0.130:88/'


// loading效果
import $ from 'jquery'; 
let $loadingBox =  $('<div></div>');
let $icon = $('<i></i>');
// 创建元素并添加类名
$loadingBox.addClass('loading');
$icon.addClass('fa fa-spinner fa-pulse loading-icon');
// 插入到页面
$('body').append($loadingBox.append($icon))
// 默认隐藏
$loadingBox.hide();

let filterUrl = (_url) => {
    if(_url && _url.startsWith('http')){
        return _url;
    }
    return baseUrl + _url;
}

export default {
    get(_url, _params = {}){
         $loadingBox.show();
        return new Promise((resolve, reject) => {
            // axios.get(filterUrl(_url), {params: _params}).then((res) => {
            //     resolve(res)
            // }).catch((error) => {
            //     reject(error)
            // })

            axios({
                url: filterUrl(_url),
                params: _params,
                method: 'get',
                headers: {
                    'auth': window.localStorage.getItem('token')
                }
            }).then((res) => {
                $loadingBox.delay(1000).hide();
                resolve(res.data);
            }).catch((error) => {
                $loadingBox.delay(1000).hide();
                reject(error);
            })
        })
    },
    post(_url, _params = {}){
        $loadingBox.show();
        return new Promise((resolve, reject) => {
            // axios.post(filterUrl(_url), _params).then((res) => {
            //     resolve(res)
            // }).catch((error) => {
            //     reject(error)
            // })


            axios({
                url: filterUrl(_url),
                method: 'post',
                data: _params,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    "auth": window.localStorage.getItem('token')
                },
                transformRequest: [function (data) {
                    let ret = ''
                    for (let it in data) {
                      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                    }
                    return ret
                }], 
            }).then(res => { 
                $loadingBox.delay(1000).hide();       
                resolve(res.data)
            }).catch(error => {
                $loadingBox.delay(1000).hide();
                reject(error)
            })            
        })
    }
}