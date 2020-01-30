<template>
    <div>
      <form class="mb-4">
        <label>Codigo: </label><br>
        <b-form-input type="text" name="code" v-model="code"></b-form-input>
        <br>
        <label>Nombre: </label><br>
        <b-form-input type="text" name="name" v-model="name"></b-form-input>
        <br>
        <label>Apellido Paterno: </label><br>
        <b-form-input type="text" name="fatherLastName" v-model="fatherLastName"></b-form-input>
        <br>
        <label>Apellido Materno: </label><br>
        <b-form-input type="text" name="motherLastName" v-model="motherLastName"></b-form-input>
        <br>
        <label>Número Telefónico: </label><br>
        <b-form-input type="text" name="numberCellphone" v-model.number="numberCellphone"></b-form-input>
        <br><br>
        <input class="btn btn-primary" v-if="!id" type="button" @click="addTeacher(code, name, fatherLastName, motherLastName, numberCellphone)" value="Añadir">
        <input class="btn btn-dark" v-if="id" type="button" @click="updateTeacher(id, code, name, fatherLastName, motherLastName, numberCellphone)" value="Modificar">
        <input class="btn btn-dark ml-3" type="button" @click="clearForm()" value="Limpiar">
        
        <br>
      </form>
      
      <table class="table">

          <thead class="thead-dark">
            <th>Codigo</th>
            <th>Nombre</th>
            <th>Apellido Paterno</th>
            <th>Apellido Materno</th>
            <th>Número Telefónico</th>
            <th>Accion</th>
          </thead>
          
        <tr v-for='teacher in teachers' :key="teacher.id">
          <td>{{ teacher.code }}</td>
          <td>{{ teacher.name }}</td>
          <td>{{ teacher.fatherLastName }}</td>
          <td>{{ teacher.motherLastName }}</td>
          <td>{{ teacher.numberCellphone }}</td>
          <td >
            <input class="btn btn-primary" type="button" @click="selectTeacher(teacher)" value="Seleccionar">
            <input class="btn btn-danger ml-2" type="button" @click="removeTeacher(teacher.id)" value="Eliminar">
          </td> 
        </tr>
      </table>
    </div>
</template>
<script>
import { consulta1 } from '@/graphql/querys'
import {añadir, actualizar, eliminar} from '@/graphql/MutationsTeacher'

export default {
  name: 'AddTeacher',
  data(){
    return {
      id: null,
      profesores: '',
      code: '',
      name: '',
      fatherLastName: '',
      motherLastName: '',
      numberCellphone: 0,
      isTutor: false,
      flag: false,
    }
  },
  apollo: {
    teachers: consulta1  
  },
  methods: {
    
    addTeacher(code, name, fatherLastName, motherLastName, numberCellphone, isTutor){
      console.log(`Añadido: ${name}`)
      this.$apollo.mutate({
        mutation: añadir,
        variables:{
          teacher:{
            code,
            name,
            fatherLastName,
            motherLastName,
            numberCellphone,
            isTutor
          }
        }
      })
      this.$apollo.queries.teachers.skip = false
      this.$apollo.queries.teachers.refetch();
      this.clearForm();
      //location.reload();
    },
    updateTeacher(id, code, name, fatherLastName, motherLastName, numberCellphone){
      console.log(`Actualizar contact: # ${id}`)
      this.$apollo.mutate({
        mutation: actualizar,
        variables:{
          id: id,
          teacher: {
            code: code,
            name: name,
            fatherLastName: fatherLastName,
            motherLastName: motherLastName,
            numberCellphone: numberCellphone
          }
        }
      })
      
      this.$apollo.queries.teachers.skip = false
      this.$apollo.queries.teachers.refetch();
      //location.reload();
    },
    removeTeacher(id){
      console.log(`Eliminar contact: # ${id}`);
      this.$apollo.mutate({
        mutation: eliminar,
        variables:{
          id: id,
        }
      })
      this.$apollo.queries.teachers.skip = false
      this.$apollo.queries.teachers.refetch();
      //location.reload();
    },
    selectTeacher(teacher){
      this.id = teacher.id;
      this.code = teacher.code;
      this.name = teacher.name;
      this.fatherLastName = teacher.fatherLastName;
      this.motherLastName = teacher.motherLastName;
      this.numberCellphone = teacher.numberCellphone;
    },
    clearForm(){
      this.id = null;
      this.code = '';
      this.name = '';
      this.fatherLastName = '';
      this.motherLastName = '';
      this.numberCellphone = null;
    }
  }
}
</script>