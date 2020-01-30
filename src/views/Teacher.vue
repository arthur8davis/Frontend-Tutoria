<template>
  <div id="app" class="container">
    <b-tabs content-class="mt-3" align="center">
      <b-tab title="Registrar Docente" active>
        <AddTeacher></AddTeacher>
      </b-tab>
      <b-tab title="Activar Tutor">
        <AssignTeacher></AssignTeacher>
      </b-tab>
    </b-tabs>
  </div>
</template>


<script>
import AddTeacher from '@/components/AddTeacher.vue';
import AssignTeacher from '@/components/AssignTeacher.vue';

export default {
  name: 'Teacher',
  components: {
    AddTeacher,
    AssignTeacher
  }
}
</script>