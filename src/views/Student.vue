<template>
  <div id="app" class="container">
    <h1 align="center">DIRECTOR DE ESCUELA</h1>
    <b-tabs content-class="mt-3" align="center">
      <b-tab title="Registrar Alumno" active>
        <form>
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
          <input class="btn btn-primary" v-if="!id" type="button" @click="addStudent(code, name, fatherLastName, motherLastName, numberCellphone)" value="Añadir">
          <input class="btn btn-dark" v-if="id" type="button" @click="updateStudent(id, code, name, fatherLastName, motherLastName, numberCellphone)" value="Modificar">
          <input class="btn btn-dark ml-3" type="button" @click="clearForm()" value="Limpiar">
        </form>
        <br>
        <table class="table" >
          <thead class="thead-dark">
            <tr>
              <th scope="col">Codigo</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido Paterno</th>
              <th scope="col">Apellido Materno</th>
              <th scope="col">Número Telefónico</th>
              <th scope="col">Accion</th>
            </tr>
          </thead>

          <tr v-for='student in students' :key="student.id">
            <td>{{ student.code }}</td>
            <td>{{ student.name }}</td>
            <td>{{ student.fatherLastName }}</td>
            <td>{{ student.motherLastName }}</td>
            <td>{{ student.numberCellphone }}</td>
            <td>
              <input class="btn btn-primary" type="button" @click="selectStudent(student)" value="Seleccionar">
              <input class="ml-3 btn btn-dark" type="button" @click="removeStudent(student.id)" value="Eliminar">
            </td> 
          </tr>
        </table>
        <br>
        
      </b-tab>
      <b-tab title="Asignar Tutorado">
       <Asignar></Asignar>
      </b-tab>
      <b-tab title="Desactivar Alumnos">
        <DesStudent></DesStudent>
      </b-tab>
    </b-tabs>
    <br><br>
  </div>
</template>


<script>
//import gql from 'graphql-tag'
import { consulta } from '@/graphql/querys'
import {agregar, actualizar, eliminar} from '@/graphql/mutations'
import Asignar from '@/components/Asignar.vue'
import DesStudent from '@/components/DesStudent.vue'

export default {
  name: 'Student',
  components:{
    Asignar,
    DesStudent
  },
  data(){
    return {
      id: null,
      code: '',
      name: '',
      fatherLastName: '',
      motherLastName: '',
      numberCellphone: 0,
      isTutorado: false
    }
  },
  apollo: {
    students: consulta,    
  },
  methods: {
    addStudent(code, name, fatherLastName, motherLastName, numberCellphone){
      // const isTutorado = true
      console.log(`Añadido: ${name}`);
      this.$apollo.mutate({
        mutation: agregar,
        variables:{
          student:{
            code,
            name,
            fatherLastName,
            motherLastName,
            numberCellphone,
            //isTutorado
          }
        }
      })
      this.$apollo.queries.students.skip = false
      this.$apollo.queries.students.refetch();
      // this.clearForm();
      //location.reload();
    },
    updateStudent(id, code, name, fatherLastName, motherLastName, numberCellphone){
      console.log(`Actualizar contact: # ${id}`)
      this.$apollo.mutate({
        mutation: actualizar,
        variables:{
          id: id,
          student: {
            code: code,
            name: name,
            fatherLastName: fatherLastName,
            motherLastName: motherLastName,
            numberCellphone: numberCellphone
          }
        }
      })
      this.$apollo.queries.students.skip = false;
      this.$apollo.queries.students.refetch();
      //location.reload();
    },
    removeStudent(id){
      console.log(`Eliminar contact: # ${id}`)
      this.$apollo.mutate({
        mutation: eliminar,
        variables:{
          id: id
        }
      })
      this.$apollo.queries.students.skip = false;
      this.$apollo.queries.students.refetch();
      //location.reload();
    },
    selectStudent(student){
      this.id = student.id;
      this.code = student.code;
      this.name = student.name;
      this.fatherLastName = student.fatherLastName;
      this.motherLastName = student.motherLastName;
      this.numberCellphone = student.numberCellphone;
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