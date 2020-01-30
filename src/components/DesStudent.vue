<template>
    <div>
        <br>
        <table class="table">
            <thead>
                <tr>
                    <th>Codigo</th>
                    <th>Alumno</th>
                    <th>Estado</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tr v-for="student in students" :key="student.id">
                <td>{{student.code}}</td>
                <td>{{student.name}} {{student.fatherLastName}} {{student.motherLastName}}</td>
                <td v-if="student.isTutorado">Activo</td>
                <td v-else>No Activo</td>
                <td v-if="student.isTutorado">
                    <input type="checkbox" @click="Desactive(student)" checked>
                </td>
                <td v-else>
                    <input type="checkbox" @click="Desactive(student)">
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
import {consulta} from '@/graphql/querys'
import {actualizar} from '@/graphql/mutations'
export default {
    name: 'DesStudent',
    data(){
        return{
            id4: null,
            isTutorado: false
        }
    },
    apollo:{
        students: consulta
    },
    methods:{
        Desactive(student){
            this.id4=student.id,
            this.isTutorado=!student.isTutorado
            this.$apollo.mutate({
                mutation: actualizar,
                variables:{
                    id: this.id4,
                    student:{
                        isTutorado: this.isTutorado
                    }
                }
            })
            this.$apollo.queries.students.skip = false
            this.$apollo.queries.students.refetch();
        }
    }
}
</script>