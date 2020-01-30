<template>
  <div id="app" >
      <!-- <div :to="{name: 'login'}"></div> -->
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-container>
          <b-navbar-brand href="">SISTEMA DE TUTORIA</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-nav-item class="btn btn-secondary text-danger bg-dark" :to="{ name: 'login' }">Logout</b-nav-item>

        <!-- <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{ name: 'login' }">Logout</b-nav-item>
            <b-nav-item :to="{ name: 'student' }">Director de Escuela</b-nav-item>
            <b-nav-item :to="{ name: 'teacher' }">Director de Departamento</b-nav-item>
            <b-nav-item :to="{ name: 'coordinator' }">Coordinador de Tutoria</b-nav-item>
            <b-nav-item :to="{ name: 'tutor' }">Tutor</b-nav-item>
            <b-nav-item :to="{ name: 'estudiante' }">Estudiante</b-nav-item>
          </b-navbar-nav>
        </b-collapse> -->

        </b-container>
      </b-navbar>
      <b-container>
        <router-view/>
      </b-container>
    <!-- <div id="nav" class="text-center">
      <router-link to="/">Home</router-link> |
      <router-link to="/student">Director de Departamento</router-link> |
      <router-link to="/teacher">Director de Escuela</router-link>
    </div>
    <router-view/> -->
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
