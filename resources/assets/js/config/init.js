require('./http');

/**
 * some global init
 */

// 配置webpack动态加载模块的路径
if (process.env.NODE_ENV === 'production') {

	__webpack_public_path__ = '/dist/';

}


// 注册全局组件
Vue.component('passport-clients', require('components/passport/Clients.vue'));
Vue.component('passport-authorized-clients', require('components/passport/AuthorizedClients.vue'));
Vue.component('passport-personal-access-tokens', require('components/passport/PersonalAccessTokens.vue'));



// 注册自定义验证规则
import { Validator } from 'vee-validate';
import validates from '../utils/validate.js';
Object.keys(validates).forEach(k => Validator.extend(k, validates[k]()));



// 注册自定义指令
import directive from '../directive/directive.js';
Object.keys(directive).forEach(k => Vue.directive(k, directive[k]()));



// 注册全局方法
import utils from '../utils/utils';
Vue.use(utils);



// 实例化Vue的filter
import filters from '../filters/filters.js';
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));
