<template>
  <div>
    <h1>Buenos días {{user}}</h1>
    <button @click='logOff'>Cerrar sesión</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ZonaUsuarios',
  data () {
    return {
      user: 'Gilipollas'
    }
  },
  created () {
    this.cargarNombreUsuario();
  },
  methods: {
    ...mapActions(['getUserName', 'cerrarSesion']),
    cargarNombreUsuario: function(){
      if(document.cookie != ''){
        let sessID = this.getCookie();
        alert(sessID);
        let self = this;
        this.getUserName(sessID)
        .then(function(res){
          self.user = res;
        })
        .catch(function(err){
          alert(err);
        })
      }else{
        alert('Tienes que haber iniciado sesión para acceder aquí');
        this.$router.push({name: 'Login'});
      }
    },
    logOff: function(){
      let sessID = this.getCookie();
      let self = this;
      this.cerrarSesion(sessID)
      .then(function(){
        document.cookie = 'sessID=;expires=Thu, 01 Jan 1970 00:00:00 UTC;';
        alert('Has cerrado sesión');
        self.$router.push({name: 'Login'});
      })
      .catch(function(err){
        console.log(err);
      })
    },
    getCookie: function(){
      return document.cookie.slice('sessID='.length);
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
