<template>
  <div>
    <div>
      <h3>Formulario de registro</h3>
      <form>
        <p><label for="usuario">Usuario: </label> <input type="text" id="usuario"/></p>
        <p><label for="email">Dirección de email: </label> <input type="email" id="email"/></p>
        <p><label for="pass">Contraseña: </label> <input type="password" id="pass"/></p>
        <p><label for="repass">Repite tu contraseña: </label> <input type="password" id="repass"/></p>
        <p><button id="crear">Crear cuenta</button></p>
        <p>¿Nuevo usuario? <a href="/register">Regístrate</a></p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
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
</style>
