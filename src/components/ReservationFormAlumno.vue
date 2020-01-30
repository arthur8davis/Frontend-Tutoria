<template>
  <div>
    <b-form class="mb-4">
      
      <b-form-group id="tutoria" label="Tipo de tutoria:" label-for="tutoria">
          <b-form-select
            id="tutoria"
            v-model="selectedType"
            :options="typeTutoria"
            required
          ></b-form-select>
        </b-form-group>

      <label>Asunto: </label>
      <b-form-input type="text" name="asunto" v-model="asunto"></b-form-input>
      <br>
      
      <div>
        <b-form-select v-model="selected">
          <option :value="null" disabled>Seleccione un hora</option>
          <option v-for="(hora,index) in getSheduleOfTutorByStudent" :key="hora.id" @click="selectTeacher(teacher)">
              {{hora.hours[index].time}}
          </option>
        </b-form-select>
      </div>

        <!-- <div class="col">
          <label>Hora: </label>
          <b-form-input type="text" name="hora" v-model="hora"></b-form-input>
        </div>
        
        <div class="col">
          <label>Dia: </label>
          <b-form-input type="text" name="dia" v-model="dia"></b-form-input>
        </div> -->
      <br>
      <input class="btn btn-primary" v-if="!id" type="button" @click="addTeacher(code, name, fatherLastName, motherLastName, numberCellphone)" value="Reservar">
    </b-form>
    <pre>
      {{ $data }}
    </pre>
  </div>
  
</template>

<script>
import {horario} from '@/graphql/students.js'

export default {
  name: 'Reservation',
  data() {
    return {
      selectedType: null,
      typeTutoria: [
        { value: null, text: 'Seleccione un tipo de tutoria' },
        { value: 'regular', text: 'Regular' },
        { value: 'academica', text: 'Asesoria Academica' },
        { value: 'insersion', text: 'Insersion' },
      ],
      asunto: '',
      dia: '',
      hora: '',
      selected: null
    }
  },
  apollo: {
    getSheduleOfTutorByStudent: horario
  },
  methods: {

  }
}
</script>
