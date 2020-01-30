<template>
  <div class="container text-center">
    <!-- <div v-if="teachers != null">
      <h1>teachers</h1>
    </div>
    <div v-if="students != null">
      <h1>students</h1>
    </div> -->
    <div v.model="rol" v-if="user.roles[0].name == 'admin'">
      <h1>{{ user.roles.name }}</h1>
      <h1>user</h1>
    </div>
    <pre>{{$data}}</pre>
  </div>
  
</template>

<script>
import { consulta } from '@/graphql/queryUser';


export default {
  name: 'Home',
  data(){
    return{
      rol:''
    }
  },
  apollo: {
    user: consulta
    // students: consulta,
    // prof: profesor
  },
  methods: {
    
  }
}
</script>