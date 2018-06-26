<template>
  <div>
    <div>
      <h3>Por favor inicia sesión</h3>
      <form @submit.prevent="loguear" id="formulario">
        <p v-if="errores" class="errores">{{ errores }}</p>
        <p><label for="user">Usuario: </label> <input type="text" v-model="user"/></p>
        <p><label for="pass">Contraseña: </label> <input type="password" v-model="pass"/></p>
        <p><button id="login">Iniciar sesión</button></p>
        <p>¿Nuevo usuario? <a href="/register">Regístrate</a></p>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      user: '',
      pass: '',
      errores: ''
    }
  },
  created () {
    if(document.cookie != ''){
      this.$router.push({name: 'ZonaUsuarios'});
    }
  },
  methods: {
    ...mapActions(['login']),
    loguear: function(){
      this.errores = '';
      let self = this;
      let usuario = this.user;
      let md5 = require('md5');
      let pass = md5(this.pass);

      this.login([usuario, pass])
      .then(function(res) {
        document.cookie = res;
        self.$router.push({name: 'ZonaUsuarios'});
      })
      .catch(function(err){
        self.errores = err;
      })
    }
  }
}
</script>


<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .errores {
    margin: auto 10%;
    color: red;
    border: 1px solid red;
    background-color: salmon;
    width: auto;
    border-radius: 5px;
    padding: 10px;
  }
</style>
