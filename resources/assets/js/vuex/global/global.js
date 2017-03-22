import * as global from '../mutations_types'

// 分页数据


// initial state
// shape: [{ id, quantity }]
const state = {
  userInfo: {userId: ''},
  title: '',
  // table_unactive: false,
  currentRouteName: '',
  tablePager: {
    current_page: 1,
    from: 0,
    last_page: 0,
    per_page: 0,
    to: 0,
    total: 0,
    next_page_url: '',
    prev_page_url: ''
  }
}

// getters
const getters = {
  tablePager: state => state.tablePager
}

// actions
const actions = {
  setUserInfo({ commit }, user) {
    commit(global.SET_USERINFO, user);
  },
  setPager ({ commit }, pager) {
    commit(global.SET_PAGE, { pager });
  }
}

// mutations
const mutations = {
  /**
   * 设置标题
   */
  [global.SET_TITLE] (state, { title }) {
    state.title = title;
  },

  /**
   * 设置用户登录信息
   */
  [global.SET_USERINFO] (state, { userInfo }) {
    state.userInfo.userId = userInfo;
  },
  /**
   * 设置切换皮肤
   */
  // setClass(state, table_unactive) {
  //     state.table_unactive = table_unactivee;
  // },
  /**
   * 设置当前路由名称
   */
  [global.SET_ROUTENAME] (state, { name }) {
    state.currentRouteName = name
  },
  /**
   * 设置分页
   */
  [global.SET_PAGE] (state, { pager }) {
    state.tablePager.current_page = pager.current_page
    state.tablePager.from = pager.from
    state.tablePager.last_page = pager.last_page
    state.tablePager.per_page = pager.per_page
    state.tablePager.to = pager.to
    state.tablePager.total = pager.total
    state.tablePager.next_page_url = pager.next_page_url
    state.tablePager.prev_page_url = pager.prev_page_url
  },

}

export default {
  state,
  getters,
  actions,
  mutations
}
