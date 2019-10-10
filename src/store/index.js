import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store ({
  state: {
    searchingKey: '',
    checkList: [],
    brands: [],
    prices: null,
    range: [],
    minPrice: null,
    maxPrice: null,
    index: '',
    filterBrands: []
  },
  actions: {
    async loadData({ commit }) {
      await axios
        .get('https://cors-anywhere.herokuapp.com/https://github.com/cscart/apply-for-job/blob/master/frontend-developer/files/002-json-example.json?raw=true')
        .then(response => {
          commit('loadingData', response.data)
        })
    }
  },
  mutations: {
    loadingData(state, data) {
      state.brands = data[0].list_variants,
      state.prices = data[1],
      state.range = [data[1].slider_min_value, data[1].slider_max_value],
      state.minPrice = data[1].slider_min_value,
      state.maxPrice = data[1].slider_max_value,
      state.index = data[1].slider_value_prefix
    },
    searchByKey(state, val) {
      return state.brands.filter(brand => brand.display_name.toLowerCase().indexOf(val) > -1)
    },
    reset(state) {
      state.range = [state.minPrice, state.maxPrice],
      state.searchingKey = '',
      state.checkList = []
    },
    updateSearch(state, value) {
      state.searchingKey = value
    },
  }
})
