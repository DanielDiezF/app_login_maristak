<template>
  <div>
    <div>
      <h3>Por favor inicia sesión</h3>
      <form>
        <p id="errores"></p>
        <p><label for="usuario">Usuario: </label> <input type="text" id="usuario"/></p>
        <p><label for="pass">Contraseña: </label> <input type="password" id="pass"/></p>
        <p><button id="login">Iniciar sesión</button></p>
        <p>¿Nuevo usuario? <a href="/register">Regístrate</a></p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      
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
  #errores {
    color: red;
  }
</style>
