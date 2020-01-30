<template>
  <div>
    <b-tabs content-class="mt-3" align="center">
      <b-tab title="SOLICITAR CITA" active>
        <HoursAlumno></HoursAlumno>
        <Reservation></Reservation>
      </b-tab>
      <b-tab title="SOLICITAR CAMBIO DE TUTOR">
        <h3>Motivos del cambio:</h3>
        <b-form-textarea v-model="description"></b-form-textarea>
        <br>
        <b-row>
          <b-col>
            <div class="form-inline">
              <label >Codigo de estudiante:</label>
              <input type="text" class="form-control" v-model="codigo" placeholder="Ingrese código" style="margin: 0 10px;">
            </div>
          </b-col>
          <b-col>
            <b-form-select v-model="selected">
              <option :value="null" disabled>Seleccione un docente</option>
              <option v-for="teacher in teachers" :key="teacher.id">
                  {{teacher.name}} {{teacher.fatherLastName}} {{teacher.motherLastName}}
              </option>
            </b-form-select>
          </b-col>
        </b-row>
        <br><br>
        <div align="center">
          <b-button variant="success" @click="changeRequest(content)">Enviar</b-button>
        </div>
      </b-tab>
      
    </b-tabs>
    
  </div>
</template>

<script>
import HoursAlumno from '@/components/HoursAlumno.vue';
import Reservation from '@/components/ReservationFormAlumno.vue';
import { consulta1,alum } from '@/graphql/querys';
import { cambioTutor } from '@/graphql/mutations';

export default {
  name: 'Estudiante',
  components: {
    HoursAlumno,
    Reservation
  },
  data(){
    return{        
      codigo: '',
      selected: null,
      id: null,
      description: ''
    }
  },
  apollo:{
    teachers: consulta1,
    alumnos:{
      alum,
      variables:{
        code: this.codigo
      },
    },
  },
  methods:{
      changeRequest(description){
        this.$apollo.mutate({
          mutation: cambioTutor,
          variables:{
            idStudent: this.id,
            changeRequest:{
              reason: description
            }
          }
        })
      }
  }
}
</script>