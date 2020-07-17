import Vue from 'vue'
import Vuex from 'vuex'
import clone from "@/lib/clone"
import createId from "@/lib/createId"
import tagList from "@/constants/tagList"


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    recordList: [],
    tagList: [],
    currentTag: undefined,
  },
  mutations: {
    fetchRecord(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]');
    },
    createRecord(state, record) {
      const record2 = clone(record)
      record2.createAt = new Date().toISOString()
      state.recordList.push(record2)
      store.commit('saveRecord')
    },
    saveRecord(state) {
      window.localStorage.setItem('recordList',
        JSON.stringify(state.recordList));
      window.alert('保存成功')
    },

    fetchTag(state) {
      state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]')
    },
    createTag(state, name) {
      const names = state.tagList.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        window.alert('标签名重复')
        return
      }
      const id = createId().toString();
      state.tagList.push({id, name: name});
      store.commit('saveTag')
    },
    saveTag(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    },
    removeTag(state, id) {
      let index = -1;
      for (let i = 0; i < state.tagList.length; i++) {
        if (state.tagList[i].id === id) {
          index = i;
          break;
        }
      }
      state.tagList.splice(index, 1);
      store.commit('saveTag')
    },
    updateTag(state, payload) {
      const {id, name} = payload
      const idList = state.tagList.map(item => item.id);
      if (idList.indexOf(id) >= 0) {
        const names = state.tagList.map(item => item.name);
        if (names.indexOf(name) >= 0) {
          window.alert('标签名重复')
        } else {
          const tag = state.tagList.filter(item => item.id === id)[0];
          tag.name = name;
          store.commit('saveTag')
        }
      }
    },
    findTag(state, id) {
      const tags = state.tagList
      state.currentTag = tags.filter(t => t.id === id)[0];
    },
  },
  actions: {},
  modules: {}
})
export default store