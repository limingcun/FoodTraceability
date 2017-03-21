import Vue from 'vue';

/**
 * 全局注册通用方法
 */
export default {
    install() {

        const env = require('../../../../env')
        // let host = env.app_url;
        let host = '';
        /**
         * 自动生成完整的前台url
         *
         * @param url {string}
         * @param type {string} url的类型，c为接口类型，p为视图类型
         * @returns {string}
         */
        Vue.prototype.$homeUrl = (url, type = 'c') => {

            let regx = /^\/{1,}/g;
            url = url.replace(regx, '');

            if (type == 'c' || type == 'C') {
                return host + '/home/c/' + url;
            }

            if (type == 'p' || type == 'P') {
                return host + '/home/p/' + url;
            }
        };

        /**
         * 自动生成完整的后台url
         *
         * @param url {string}
         * @param type {string} url的类型，c为接口类型，p为视图类型
         * @returns {string}
         */
        Vue.prototype.$adminUrl = (url, type = 'c') => {

            let regx = /^\/{1,}/g;
            url = url.replace(regx, '');

            if (type == 'c' || type == 'C') {
                return host + '/admin/c/' + url;
            }

            if (type == 'p' || type == 'P') {
                return host + '/admin/p/' + url;
            }
        };


        /**
         * 比较器
         * @param proto
         * @returns {function()}
         */
        function compare(proto) {
            return (ob1, ob2) => {
                return ob1[proto] - ob2[proto];
            }
        }

        /**
         * 根据传过来的属性参数对对象数组继续逆序排序
         * @param arrObj 对象数组
         * @param proto 对象的属性
         * @returns {Array.<T>}
         */
        Vue.prototype.$reverseObj = (arrObj, proto) => {
            return arrObj.sort(compare(proto)).reverse();
        };

        /**
         * 把对象变成url参数
         * @param object
         * @returns {string}
         */
        Vue.prototype.$objectToParam = (object) => {
            let params = '';
            Object.keys(object).forEach(k => params += k + '=' + object[k] + '&');
            return params;
        };

        /**
         *
         * 组合图片路径
         *
         * @param url
         * @returns {*}
         */
        Vue.prototype.$img = (url, flag=true) => {
            if(url == undefined){
                return ;
            }
            if(url.indexOf('base64') > 0){
                return url;
            }
            let regx = /^\/{1,}/g;
            url = url.replace(regx, '');

            if(flag) {
                return (env.is_server?env.app_ano_url:'') + '/public/' + url;
            }else {
                return (env.is_server?env.app_ano_url:'') + '/' + url;
            }
        };
    }
};