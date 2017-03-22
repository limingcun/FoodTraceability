/**
 * 路由
 */ 
import Router from 'vue-router'

//=============================顶层组件====================================
//---------------------------最顶层组件----------------------------------
const index = resolve => {
    require.ensure(['../views/index.vue'], () =>{
        resolve(require('../views/index.vue'));
    }, 'index');
};

//---------------------------登录组件----------------------------------
const login = resolve => {
    require.ensure(['../views/login.vue'], () =>{
        resolve(require('../views/login.vue'));
    }, 'login');
};


//---------------------------404----------------------------------
const notFound = resolve => {
    require.ensure(['../views/404.vue'], () =>{
        resolve(require('../views/404.vue'));
    }, 'fourOFour');
};

//---------------------------测试----------------------------------
const test = resolve => {
    require.ensure(['../views/test.vue'], () =>{
        resolve(require('../views/test.vue'));
    }, 'test');
};


const routes = [
    
    {
        path: '/',
        name: 'index',
        component: index,
    },        
    {
        path: '/login',
        name: 'login',
        component: login
    },

    {
        path: '/404',
        name: 'notFound',
        component: notFound
    },

    {
        path: '/test',
        name: 'test',
        component: test
    }
    
];

export default new Router({
    routes,
    // mode:'history',
    // scrollBehavior (to,from,savedPosition) {
    //     if(to.hash) {
    //         return {
    //             selector:to.hash
    //         }
    //     }
    // }
});