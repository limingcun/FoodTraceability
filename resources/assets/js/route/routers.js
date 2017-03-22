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






//---------------------------传感器----------------------------------
const sensor = resolve => {
    require.ensure(['../views/sensor/sensor.vue'], () =>{
        resolve(require('../views/sensor/sensor.vue'));
    }, 'sensor');
}

//---------------------------传感器类型----------------------------------
const sensorType = resolve => {
    require.ensure(['../views/sensor/sensorType.vue'], () =>{
        resolve(require('../views/sensor/sensorType.vue'));
    }, 'sensorType');
}

//---------------------------传感器设置----------------------------------
const sensorSet = resolve => {
    require.ensure(['../views/sensor/sensorSet.vue'], () =>{
        resolve(require('../views/sensor/sensorSet.vue'));
    }, 'sensorSet');
}





//---------------------------公司管理----------------------------------
const company = resolve => {
    require.ensure(['../views/company/company.vue'], () =>{
        resolve(require('../views/company/company.vue'));
    }, 'company');
}

//---------------------------公司基本管理----------------------------------
const companyInfo = resolve => {
    require.ensure(['../views/company/companyInfo.vue'], () =>{
        resolve(require('../views/company/companyInfo.vue'));
    }, 'companyInfo');
}

//---------------------------用户管理----------------------------------
const companyUser = resolve => {
    require.ensure(['../views/company/companyUser.vue'], () =>{
        resolve(require('../views/company/companyUser.vue'));
    }, 'companyUser');
}

//---------------------------日志管理----------------------------------
const companyLog = resolve => {
    require.ensure(['../views/company/companyLog.vue'], () =>{
        resolve(require('../views/company/companyLog.vue'));
    }, 'companyLog');
}

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