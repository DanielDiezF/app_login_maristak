import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

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
        return Axios.post('http://localhost:3773/nuevousuario', nUsuario)
        .then(function(result){
          if(result.data.error){
            return Promise.reject(result.data.error);
          }else{
            return result.data;
          }
        })
      }else{
        return Promise.reject("Las contraseñas no coinciden");
      }
    },
    login(context, datosLogin){
      return Axios.post('http://localhost:3773/login', datosLogin)
      .then(function(result){
        if(result.data.error){
          return Promise.reject(result.data.error);
        }else{
          return result.data;
        }
      })
    },
    getUserName(context, sessID){
      return Axios.get('http://localhost:3773/session/'+sessID)
      .then(function(result){
        return result.data;
      })
    },
    cerrarSesion(context, sessID){
      return Axios.post('http://localhost:3773/cerrarSesion', {'sessID': sessID})
    }
  },

  getters: {
    
  },
  computed: {
    
  }
})

export default store
