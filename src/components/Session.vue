<template>
  <table class="table">
    <thead class="thead-dark">
      <th>Hora</th>
      <th>Alumno</th>
      <th>Operacion</th>
    </thead>
    
  <tr v-for='teacher in Citas' :key="teacher.id">
    <td>{{ teacher.code }}</td>
    <td>{{ teacher.name }}</td>
    <td >
      <input class="btn btn-primary" type="button" @click="selectTeacher(teacher)" value="Realizar">
      
    </td> 
  </tr>
</table>
</template>
<script>
export default {
  name: 'Session'
}
</script>