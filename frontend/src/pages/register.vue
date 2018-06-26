<template>
  <div style="text-align:center">
    <div id="contenedorForm">
      <h3>Formulario de registro</h3>
      <p v-if="errores" class="errores">{{ errores }}</p>
      <form @submit.prevent="chequearFormulario" id="formulario">
        <p><label for="usuario">Nombre de usuario: </label> <input type="text" v-model="usuario.nombre" required/></p>
        <p><label for="email">Dirección de email: </label> <input type="email" v-model="usuario.email" required/></p>
        <p><label for="pass">Contraseña: </label> <input type="password" v-model="usuario.pass" required/></p>
        <p><label for="repass">Repite tu contraseña: </label> <input type="password" v-model="usuario.repass" required/></p>
        <button id="crear" type="submit">Crear cuenta</button>
      </form>
      <p>¿Ya estás registrado? <a href="/">Accede</a></p>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'Register',
    data () {
      return {
        errores: '',
        usuario: {
          nombre: '',
          email: '',
          pass: '',
          repass: ''
        }
      }
    },
    created () {
      if(document.cookie != ''){
        this.$router.push({name: 'ZonaUsuarios'});
      }
    },
    methods: {
      ...mapActions(['validarFormulario']),
      chequearFormulario: function(){
        this.errores = '';
        let self = this;
        let usuario = this.usuario;
        

        this.validarFormulario(usuario)
        .then(function(result){
          self.$router.push({name: 'Login'});
        })
        .catch(function(err){
          self.errores = err;
          console.log(err);
        });
      }
    }
  }
</script>


<style scoped>
  #contenedorForm{
    margin: 10% 30%;
    width: 40%;
    border: 1px solid #333333;
    border-radius: 5px;
    box-shadow: 5px 10px 8px #333333;
  }
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
  form p{
    text-align:right;
  }
  input{
    float: right;
    margin: 0px 20% 0px 10px;
  }
</style>
