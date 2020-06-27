import Vue from 'vue'
import Vuex from 'vuex'
import clone from "@/lib/clone"
import createId from "@/lib/createId"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    recordList: [],
    tagList: [],
  },
  mutations: {
    fetchRecord(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]');
    },
    createRecord(state, record) {
      const record2 = clone(record)
      record2.createAt = new Date()
      state.recordList.push(record2)
      store.commit('saveRecord')
      console.log(state.recordList)
    },
    saveRecord(state) {
      window.localStorage.setItem('recordList',
        JSON.stringify(state.recordList));
    },

    fetchTag(state) {
      state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
    },
    createTag(state, name) {
      const names = state.tagList.map(item => item.name);
      if (names.indexOf(name) >= 0) {return 'duplicated';}
      const id = createId().toString();
      state.tagList.push({id, name: name});
      store.commit('saveTag')
      return 'success';
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
      return true;
    },
    updateTag(state, id, name) {
      const idList = state.tagList.map(item => item.id);
      if (idList.indexOf(id) >= 0) {
        const names =state.tagList.map(item => item.name);
        if (names.indexOf(name) >= 0) {
          return 'duplicated';
        } else {
          const tag = state.tagList.filter(item => item.id === id)[0];
          tag.name = name;
          store.commit('saveTag')
          return 'success';
        }
      } else {
        return 'not found';
      }
    },
  },
  actions: {},
  modules: {}
})
export default store