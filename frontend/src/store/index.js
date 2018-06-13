import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import { mapGetters, mapMutations, mapActions } from 'vuex'

var md5 = require('md5');

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    
  },

  mutations: {
    
  },

  actions: {
    validarFormulario(context, usuario){
      if (usuario.pass == usuario.repass) {
        let nUsuario = {nombre: usuario.nombre, email: usuario.email, pass: md5(usuario.pass)}
        console.log(nUsuario);
        return Axios.post('http://localhost:3773/nuevousuario', nUsuario)
        .then(function(result){
          return result.data;
        })
        .catch(function(err){

        })
      }else{
        return Promise.reject("Las contraseñas no coinciden");
      }
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
      'validarFormulario'
    ])

  }
})

export default store
