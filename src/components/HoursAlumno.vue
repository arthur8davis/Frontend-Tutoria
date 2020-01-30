<template>
  <div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Hora</th>
          <th scope="col">Lunes</th>
          <th scope="col">Martes</th>
          <th scope="col">Miercoles</th>
          <th scope="col">Jueves</th>
          <th scope="col">Viernes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">07:00</th>
          <td>
            <p class="text-primary" v-if="getSheduleOfTutorByStudent.hours[0].state == 0"> Tutoria </p>
            <p class="text-danger" v-else>Reservado</p>
          </td>
          <td>
            <p class="text-primary" v-if="getSheduleOfTutorByStudent.hours[1].state == 0"> Tutoria </p>
            <p class="text-danger" v-else>Reservado</p>
          </td>
          <td>
            <p class="text-primary" v-if="getSheduleOfTutorByStudent.hours[2].state == 0"> Tutoria </p>
            <p class="text-danger" v-else>Reservado</p>
          </td>
          <td>
            <p class="text-primary" v-if="getSheduleOfTutorByStudent.hours[3].state == 0"> Tutoria </p>
            <p class="text-danger" v-else>Reservado</p>
          </td>
          <td>
            <p class="text-primary" v-if="getSheduleOfTutorByStudent.hours[4].state == 0"> Tutoria </p>
            <p class="text-danger" v-else>Reservado</p>
          </td>
        </tr>
        <tr>
          <th scope="row">08:00</th>
          <td>
            <p class="text-primary" v-if="getSheduleOfTutorByStudent.hours[5].state == 0"> Tutoria </p>
            <p class="text-danger" v-else>Reservado</p>
          </td>
          <td>
            <p class="text-primary" v-if="getSheduleOfTutorByStudent.hours[6].state == 0"> Tutoria </p>
            <p class="text-danger" v-else>Reservado</p>
          </td>
          <td>
            <p class="text-primary" v-if="getSheduleOfTutorByStudent.hours[7].state == 0"> Tutoria </p>
            <p class="text-danger" v-else>Reservado</p>
          </td>
          <td>
            <p class="text-primary" v-if="getSheduleOfTutorByStudent.hours[8].state == 0"> Tutoria </p>
            <p class="text-danger" v-else>Reservado</p>
          </td>
          <td>
            <p class="text-primary" v-if="getSheduleOfTutorByStudent.hours[9].state == 0"> Tutoria </p>
            <p class="text-danger" v-else>Reservado</p>
          </td>
        </tr>
        <tr>
          <th scope="row">09:00</th>
          <td>
            <p class="text-primary" v-if="getSheduleOfTutorByStudent.hours[10].state == 0"> Tutoria </p>
            <p class="text-danger" v-else>Reservado</p>
          </td>
          <td>
            <p class="text-primary" v-if="getSheduleOfTutorByStudent.hours[11].state == 0"> Tutoria </p>
            <p class="text-danger" v-else>Reservado</p>
          </td>
          <td>
            <p class="text-primary" v-if="getSheduleOfTutorByStudent.hours[12].state == 0"> Tutoria </p>
            <p class="text-danger" v-else>Reservado</p>
          </td>
          <td>
            <p class="text-primary" v-if="getSheduleOfTutorByStudent.hours[13].state == 0"> Tutoria </p>
            <p class="text-danger" v-else>Reservado</p>
          </td>
          <td>
            <p class="text-primary" v-if="getSheduleOfTutorByStudent.hours[14].state == 0"> Tutoria </p>
            <p class="text-danger" v-else>Reservado</p>
          </td>
        </tr>
        <tr>
          <th scope="row">10:00</th>
          <td>
            <p class="text-primary" v-if="getSheduleOfTutorByStudent.hours[15].state == 0"> Tutoria </p>
            <p class="text-danger" v-else>Reservado</p>
          </td>
          <td>
            <p class="text-primary" v-if="getSheduleOfTutorByStudent.hours[16].state == 0"> Tutoria </p>
            <p class="text-danger" v-else>Reservado</p>
          </td>
          <td>
            <p class="text-primary" v-if="getSheduleOfTutorByStudent.hours[17].state == 0"> Tutoria </p>
            <p class="text-danger" v-else>Reservado</p>
          </td>
          <td>
            <p class="text-primary" v-if="getSheduleOfTutorByStudent.hours[18].state == 0"> Tutoria </p>
            <p class="text-danger" v-else>Reservado</p>
          </td>
          <td>
            <p class="text-primary" v-if="getSheduleOfTutorByStudent.hours[19].state == 0"> Tutoria </p>
            <p class="text-danger" v-else>Reservado</p>
          </td>
        </tr>
        <tr>
          <th scope="row">11:00</th>
          <td>
            <p class="text-primary" v-if="getSheduleOfTutorByStudent.hours[20].state == 0"> Tutoria </p>
            <p class="text-danger" v-else>Reservado</p>
          </td>
          <td>
            <p class="text-primary" v-if="getSheduleOfTutorByStudent.hours[21].state == 0"> Tutoria </p>
            <p class="text-danger" v-else>Reservado</p>
          </td>
          <td>
            <p class="text-primary" v-if="getSheduleOfTutorByStudent.hours[22].state == 0"> Tutoria </p>
            <p class="text-danger" v-else>Reservado</p>
          </td>
          <td>
            <p class="text-primary" v-if="getSheduleOfTutorByStudent.hours[23].state == 0"> Tutoria </p>
            <p class="text-danger" v-else>Reservado</p>
          </td>
          <td>
            <p class="text-primary" v-if="getSheduleOfTutorByStudent.hours[24].state == 0"> Tutoria </p>
            <p class="text-danger" v-else>Reservado</p>
          </td>
        </tr>
        <tr>
          <th scope="row">12:00</th>
          <td>
            <p class="text-primary" v-if="getSheduleOfTutorByStudent.hours[25].state == 0"> Tutoria </p>
            <p class="text-danger" v-else>Reservado</p>
          </td>
          <td>
            <p class="text-primary" v-if="getSheduleOfTutorByStudent.hours[26].state == 0"> Tutoria </p>
            <p class="text-danger" v-else>Reservado</p>
          </td>
          <td>
            <p class="text-primary" v-if="getSheduleOfTutorByStudent.hours[27].state == 0"> Tutoria </p>
            <p class="text-danger" v-else>Reservado</p>
          </td>
          <td>
            <p class="text-primary" v-if="getSheduleOfTutorByStudent.hours[28].state == 0"> Tutoria </p>
            <p class="text-danger" v-else>Reservado</p>
          </td>
          <td>
            <p class="text-primary" v-if="getSheduleOfTutorByStudent.hours[29].state == 0"> Tutoria </p>
            <p class="text-danger" v-else>Reservado</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import {horario} from '@/graphql/students.js'

export default {
  name: 'HoursAlumno',
  data(){
    return {
      
    }
  },
  apollo: {
    getSheduleOfTutorByStudent: horario
  },
  methods: {
    // activateHourOfTeacher(idTutor, idHour, estado) {
    //   this.$apollo.mutate({
    //     mutation: activar,
    //     variables:{
    //       idTutor: idTutor,
    //       idHour: idHour,
    //       hour: {
    //         state: estado
    //       }
    //     }
    //   })
    //   this.$apollo.queries.getSheduleOfTutorByStudent.skip = false
    //   this.$apollo.queries.getSheduleOfTutorByStudent.refetch();
    // }
  }
}
</script>