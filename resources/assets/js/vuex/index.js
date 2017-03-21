// Vuex
import Vuex from 'vuex';



const store = new Vuex.Store({
    state: {
        userInfo: {userId: ''},
        title: '',
        // table_unactive: false,
    },
    mutations: {

    	/**
    	 * 设置标题
    	 */
        setTitle(state, title) {
        	state.title = title;
        },

        /**
         * 设置用户登录信息
         */
        setUserInfo(state, userInfo) {
            state.userInfo.userId = userInfo;
        },
        /**
         * 设置切换皮肤
         */
        // setClass(state, table_unactive) {
        //     state.table_unactive = table_unactivee;
        // },
    },
    
    actions: {
        setUserInfo(context, user) {
            context.commit('setUserInfo', user);
        }
    }
    
});

export default store;