import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import { mapGetters, mapMutations, mapActions } from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    
  },

  mutations: {
    
  },

  actions: {
    nuevoUsuario(context, usuario) {

    }
  },

  getters: {
    
  },

  computed: {
    
    ...mapGetters([
      
    ]),
    ...mapMutations([
      
    ]),
    ...mapActions([
      'nuevoUsuario'
    ])

  }
})

export default store
