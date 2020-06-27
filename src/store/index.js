import Vue from 'vue'
import Vuex from 'vuex'
import clone from "@/lib/clone"

Vue.use(Vuex)

const store =  new Vuex.Store({
  state: {
    recordList:[],
  },
  mutations: {
    fetchRecord(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]');
    },
    createRecord(state,record){
      const record2 = clone(record)
      record2.createAt = new Date()
      state.recordList.push(record2)
      store.commit('saveRecord')
      console.log(state.recordList)
    },
    saveRecord(state){
      window.localStorage.setItem('recordList',
        JSON.stringify(state.recordList));
    },
  },
  actions: {
  },
  modules: {
  }
})
export default store