import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import userComponent from '../components/user/user.vue'
import carComponent from '../components/car/car.vue'
import indexComponent from '../components/index/index.vue'
import sortComponent from '../components/sort/sort.vue'
import listComponent from '../components/list/list.vue'
import loginComponent from '../components/login/login.vue'
import regComponent from '../components/reg/reg.vue'
import detailsComponent from '../components/details/details.vue'
import addressComponent from '../components/address/address.vue'
import payComponent from '../components/pay/pay.vue'
import laaComponent from '../components/addNewAddress/addNewAddress.vue'

import back_homeComponent from '../components/back_home/back_home.vue'
import back_loginComponent from '../components/back_login/back_login.vue'
import back_productComponent from '../components/back_product/back_product.vue'
import back_usersComponent from '../components/back_product/back_users.vue'


const router = new VueRouter({
    routes: [
        {path: '/', component: indexComponent, name: 'index'},
        {path: '/index', component: indexComponent, name: 'index'},
        {path: '/sort', component: sortComponent, name: 'sort'},
        {path: '/list', component: listComponent, name: 'list'},
        {path: '/details', component: detailsComponent, name: 'details'},
        {path: '/car', component: carComponent, name: 'car'},
        {path: '/sort', component: sortComponent, name: 'sort'},
        {path: '/user', component: userComponent, name: 'user'},
        {path: '/pay', component: payComponent, name: 'pay'},
        {path: '/address', component: addressComponent, name: 'address'},
        {path: '/addNewAddress', component: laaComponent, name: 'addNewAddress'},
        {path: '/login', component: loginComponent, name: 'login'},
        {path: '/reg', component: regComponent, name: 'reg'},
        {path: '/back_login', component: back_loginComponent, name: 'back_login'},
        {path: '/back_home', component: back_homeComponent, name: 'back_home', children: [
            {path: 'back_product', component: back_productComponent, name: 'back_product'},
            {path: 'back_users', component: back_usersComponent, name: 'back_users'}

        ]}
    ]
})

export default router;