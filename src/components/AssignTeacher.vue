<template>
    <div id="asig"> 
        
        <table class="table">
            <thead class="thead-dark">
                <th>Codigo</th>
                <th>Docente</th>
                <th>Tutor</th>
            </thead>
            
            <tr v-for="teacher in teachers" :key="teacher.id">
                <td>{{teacher.code}}</td>
                <td>{{teacher.name}} {{teacher.fatherLastName}} {{teacher.motherLastName}}</td>
                <td v-if="teacher.isTutor === true">
                    <button class="btn btn-danger" @click="updateTutor(teacher)">Desactivar</button>
                </td>
                <td v-else>
                    <button class="btn btn-success" @click="updateTutor(teacher)">Activar</button>
                </td>
            </tr>
        </table>
        
    </div>
</template>
<script>
import { consulta, consulta1 } from '@/graphql/querys'
import { asignar } from '@/graphql/MutationsTeacher'

export default {
  name:'AssignTeacher',
    data(){
        return{
            id: null,
            id1: null,
            code: '',
            name: '',
            tutor: '',
            fatherLastName: '',
            motherLastName: '',
            numberCellphone: null,
            isTutor: false            
        }
    },
    apollo:{
        students: consulta,
        teachers: consulta1,
    },    
    methods: {
        Asignar(id,id1){
            this.$apollo.mutate({
                mutation: asignar,
                variables: {
                    idTeacher: id1,
                    idStudent: id
                }
            })
        },
        selectStudent(student){
            this.id = student.id;
            this.code = student.code;
        },
        selectTeacher(teacher){
            this.id1 = teacher.id;
            this.tutor = teacher.name;
        },
        updateTutor(teacher) {
            this.updateTeacher(teacher.id, teacher.code, teacher.name, teacher.fatherLastName, teacher.motherLastName, teacher.numberCellphone, !teacher.isTutor);
            // location.reload();
        },
        updateTeacher(id, code, name, fatherLastName, motherLastName, numberCellphone, isTutor){
            console.log(`Actualizar contact: # ${id}`)
            this.$apollo.mutate({
                mutation: asignar,
                variables:{
                    id: id,
                    teacher: {
                        code: code,
                        name: name,
                        fatherLastName: fatherLastName,
                        motherLastName: motherLastName,
                        numberCellphone: numberCellphone,
                        isTutor: isTutor
                    }
                }
            });
            //location.reload();
        }
    }
}
</script>