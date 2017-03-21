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

//---------------------------设置----------------------------------
const set = resolve => {
    require.ensure(['../components/basic/set.vue'], () =>{
        resolve(require('../components/basic/set.vue'));
    }, 'set');
}

//---------------------------详细页面----------------------------------
const detail = resolve => {
    require.ensure(['../views/detail.vue'], () =>{
        resolve(require('../views/detail.vue'));
    }, 'detail');
}

//---------------------------数据显示----------------------------------
const chart = resolve => {
    require.ensure(['../components/basic/chart.vue'], () =>{
        resolve(require('../components/basic/chart.vue'));
    }, 'chart');
}



const routes = [
    
    {
        path: '/',
        name: 'index',
        component: index,
        children: [
            {
                path: '',
                name: 'chart',
                component: chart
            },
            {
                path: 'set',
                name: 'set',
                component: set
            },
            
        ]
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
    }
    ,{
        path:'/detail',
        name:'detail',
        component:detail
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