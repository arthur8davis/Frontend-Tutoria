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
            <button v-if="getSheduleOfTutorByTutor.hours[0].state == 0" class="btn btn-success" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[0].id, 2)"> Tutoria </button>
            <button v-else class="btn btn-danger" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[0].id, 0)">No Disponible</button>
          </td>
          <td>
            <button v-if="getSheduleOfTutorByTutor.hours[1].state == 0" class="btn btn-success" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[1].id, 2)"> Tutoria </button>
            <button v-else class="btn btn-danger" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[1].id, 0)">No Disponible</button>
          </td>
          <td>
            <button v-if="getSheduleOfTutorByTutor.hours[2].state == 0" class="btn btn-success" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[2].id, 2)"> Tutoria </button>
            <button v-else class="btn btn-danger" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[2].id, 0)">No Disponible</button>
          </td>
          <td>
            <button v-if="getSheduleOfTutorByTutor.hours[3].state == 0" class="btn btn-success" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[3].id, 2)"> Tutoria </button>
            <button v-else class="btn btn-danger" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[3].id, 0)">No Disponible</button>
          </td>
          <td>
            <button v-if="getSheduleOfTutorByTutor.hours[4].state == 0" class="btn btn-success" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[4].id, 2)"> Tutoria </button>
            <button v-else class="btn btn-danger" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[4].id, 0)">No Disponible</button>
          </td>
        </tr>
        <tr>
          <th scope="row">08:00</th>
          <td>
            <button v-if="getSheduleOfTutorByTutor.hours[5].state == 0" class="btn btn-success" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[5].id, 2)"> Tutoria </button>
            <button v-else class="btn btn-danger" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[5].id, 0)">No Disponible</button>
          </td>
          <td>
            <button v-if="getSheduleOfTutorByTutor.hours[6].state == 0" class="btn btn-success" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[6].id, 2)"> Tutoria </button>
            <button v-else class="btn btn-danger" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[6].id, 0)">No Disponible</button>
          </td>
          <td>
            <button v-if="getSheduleOfTutorByTutor.hours[7].state == 0" class="btn btn-success" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[7].id, 2)"> Tutoria </button>
            <button v-else class="btn btn-danger" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[7].id, 0)">No Disponible</button>
          </td>
          <td>
            <button v-if="getSheduleOfTutorByTutor.hours[8].state == 0" class="btn btn-success" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[8].id, 2)"> Tutoria </button>
            <button v-else class="btn btn-danger" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[8].id, 0)">No Disponible</button>
          </td>
          <td>
            <button v-if="getSheduleOfTutorByTutor.hours[9].state == 0" class="btn btn-success" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[9].id, 2)"> Tutoria </button>
            <button v-else class="btn btn-danger" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[9].id, 0)">No Disponible</button>
          </td>
        </tr>
        <tr>
          <th scope="row">09:00</th>
          <td>
            <button v-if="getSheduleOfTutorByTutor.hours[10].state == 0" class="btn btn-success" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[10].id, 2)"> Tutoria </button>
            <button v-else class="btn btn-danger" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[10].id, 0)">No Disponible</button>
          </td>
          <td>
            <button v-if="getSheduleOfTutorByTutor.hours[11].state == 0" class="btn btn-success" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[11].id, 2)"> Tutoria </button>
            <button v-else class="btn btn-danger" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[11].id, 0)">No Disponible</button>
          </td>
          <td>
            <button v-if="getSheduleOfTutorByTutor.hours[12].state == 0" class="btn btn-success" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[12].id, 2)"> Tutoria </button>
            <button v-else class="btn btn-danger" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[12].id, 0)">No Disponible</button>
          </td>
          <td>
            <button v-if="getSheduleOfTutorByTutor.hours[13].state == 0" class="btn btn-success" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[13].id, 2)"> Tutoria </button>
            <button v-else class="btn btn-danger" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[13].id, 0)">No Disponible</button>
          </td>
          <td>
            <button v-if="getSheduleOfTutorByTutor.hours[14].state == 0" class="btn btn-success" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[14].id, 2)"> Tutoria </button>
            <button v-else class="btn btn-danger" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[14].id, 0)">No Disponible</button>
          </td>
        </tr>
        <tr>
          <th scope="row">10:00</th>
          <td>
            <button v-if="getSheduleOfTutorByTutor.hours[15].state == 0" class="btn btn-success" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[15].id, 2)"> Tutoria </button>
            <button v-else class="btn btn-danger" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[15].id, 0)">No Disponible</button>
          </td>
          <td>
            <button v-if="getSheduleOfTutorByTutor.hours[16].state == 0" class="btn btn-success" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[16].id, 2)"> Tutoria </button>
            <button v-else class="btn btn-danger" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[16].id, 0)">No Disponible</button>
          </td>
          <td>
            <button v-if="getSheduleOfTutorByTutor.hours[17].state == 0" class="btn btn-success" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[17].id, 2)"> Tutoria </button>
            <button v-else class="btn btn-danger" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[17].id, 0)">No Disponible</button>
          </td>
          <td>
            <button v-if="getSheduleOfTutorByTutor.hours[18].state == 0" class="btn btn-success" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[18].id, 2)"> Tutoria </button>
            <button v-else class="btn btn-danger" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[18].id, 0)">No Disponible</button>
          </td>
          <td>
            <button v-if="getSheduleOfTutorByTutor.hours[19].state == 0" class="btn btn-success" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[19].id, 2)"> Tutoria </button>
            <button v-else class="btn btn-danger" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[19].id, 0)">No Disponible</button>
          </td>
        </tr>
        <tr>
          <th scope="row">11:00</th>
          <td>
            <button v-if="getSheduleOfTutorByTutor.hours[20].state == 0" class="btn btn-success" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[20].id, 2)"> Tutoria </button>
            <button v-else class="btn btn-danger" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[20].id, 0)">No Disponible</button>
          </td>
          <td>
            <button v-if="getSheduleOfTutorByTutor.hours[21].state == 0" class="btn btn-success" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[21].id, 2)"> Tutoria </button>
            <button v-else class="btn btn-danger" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[21].id, 0)">No Disponible</button>
          </td>
          <td>
            <button v-if="getSheduleOfTutorByTutor.hours[22].state == 0" class="btn btn-success" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[22].id, 2)"> Tutoria </button>
            <button v-else class="btn btn-danger" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[22].id, 0)">No Disponible</button>
          </td>
          <td>
            <button v-if="getSheduleOfTutorByTutor.hours[23].state == 0" class="btn btn-success" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[23].id, 2)"> Tutoria </button>
            <button v-else class="btn btn-danger" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[23].id, 0)">No Disponible</button>
          </td>
          <td>
            <button v-if="getSheduleOfTutorByTutor.hours[24].state == 0" class="btn btn-success" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[24].id, 2)"> Tutoria </button>
            <button v-else class="btn btn-danger" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[24].id, 0)">No Disponible</button>
          </td>
        </tr>
        <tr>
          <th scope="row">12:00</th>
          <td>
            <button v-if="getSheduleOfTutorByTutor.hours[25].state == 0" class="btn btn-success" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[25].id, 2)"> Tutoria </button>
            <button v-else class="btn btn-danger" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[25].id, 0)">No Disponible</button>
          </td>
          <td>
            <button v-if="getSheduleOfTutorByTutor.hours[26].state == 0" class="btn btn-success" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[26].id, 2)"> Tutoria </button>
            <button v-else class="btn btn-danger" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[26].id, 0)">No Disponible</button>
          </td>
          <td>
            <button v-if="getSheduleOfTutorByTutor.hours[27].state == 0" class="btn btn-success" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[27].id, 2)"> Tutoria </button>
            <button v-else class="btn btn-danger" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[27].id, 0)">No Disponible</button>
          </td>
          <td>
            <button v-if="getSheduleOfTutorByTutor.hours[28].state == 0" class="btn btn-success" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[28].id, 2)"> Tutoria </button>
            <button v-else class="btn btn-danger" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[28].id, 0)">No Disponible</button>
          </td>
          <td>
            <button v-if="getSheduleOfTutorByTutor.hours[29].state == 0" class="btn btn-success" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[29].id, 2)"> Tutoria </button>
            <button v-else class="btn btn-danger" @click="activateHourOfTeacher(getSheduleOfTutorByTutor.teacher.id, getSheduleOfTutorByTutor.hours[29].id, 0)">No Disponible</button>
          </td>
        </tr>
      </tbody>
    
    </table>
  </div>
</template>
<script>
import {horario, activar} from '@/graphql/mutationsTutor.js'

export default {
  name: 'Hours',
  data(){
    return {
      
    }
  },
  apollo: {
    getSheduleOfTutorByTutor: horario
  },
  methods: {
    activateHourOfTeacher(idTutor, idHour, estado) {
      this.$apollo.mutate({
        mutation: activar,
        variables:{
          idTutor: idTutor,
          idHour: idHour,
          hour: {
            state: estado
          }
        }
      })
      this.$apollo.queries.getSheduleOfTutorByTutor.skip = false
      this.$apollo.queries.getSheduleOfTutorByTutor.refetch();
    }
  }
}
</script>