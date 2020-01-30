<template>
    <div id="asig"> 
        <br>
        <h5>Seleccione los alumnos y docente para que puedan ser asignados, después haga click en "Añadir".</h5>
        <br>
        <b-row>
            <b-col>
                <h2>ALUMNOS</h2>
                <table class="table">
                    <tr>
                        <th>Codigo</th>
                        <th>Alumno</th>
                        <th>Accion</th>                
                    </tr>
                    <tr v-for="student in students" :key="student.id">
                        <td v-if="!student.isTutorado">{{student.code}}</td>
                        <td v-if="!student.isTutorado">{{student.name}} {{student.fatherLastName}} {{student.motherLastName}}</td>
                        <td v-if="!student.isTutorado">
                            <input v-if="checked" type="checkbox" @click="selectStudent(student)">
                            <input v-else type="checkbox" @click="selectStudent(student)">
                        </td>
                    </tr>
                </table>
            </b-col>
        
            <b-col>
                <h2>DOCENTES</h2>
                <div>
                    <b-form-select v-model="selected">
                        <option :value="null" disabled>Seleccione un docente</option>
                        <option v-for="teacher in teachers" :key="teacher.id" @click="selectTeacher(teacher)">
                            {{teacher.name}} {{teacher.fatherLastName}} {{teacher.motherLastName}}
                        </option>
                    </b-form-select>
                </div>
            </b-col>
        </b-row>
        <br>
        <div align="center">
            <form>
            <!--<label>Codigo Alumno: </label><br>
            <input type="text" name="code" v-model="code">
            <br>
            <label>Docente: </label><br>
            <input type="text" name="tutor" v-model="tutor">
            <br>-->
            <br>
            <input type="button" @click="allAsig(id2)" value="Añadir">
            </form>
        </div>
        <br>
        <h2 align="center">ASIGNADOS</h2>
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th>Codigo</th>
                    <th>Alumno</th>
                    <th>Docente</th>
                </tr>
            </thead>
            <tr v-for="teacher in teachers" :key="teacher.id">
                <td>
                    <div v-for="i in teacher.tutorados" :key="i.id">
                        {{i.code}}
                    </div>
                </td>
                <td>
                    <div v-for="j in teacher.tutorados" :key="j.id">
                        {{j.name}} {{j.fatherLastName}} {{j.motherLastName}}
                    </div>
                </td>
                <td>{{teacher.name}} {{teacher.fatherLastName}} {{teacher.motherLastName}}</td>
            </tr>
        </table>
        <br>
        <!-- <pre> {{$data}} </pre> -->
    </div>
</template>
<script>
import { consulta, consulta1 } from '@/graphql/querys'
import { asignar, actualizar } from '@/graphql/mutations'

export default {
  name:'Asignar',
    data(){
        return{
            id1: null,
            id2: null,
            code: '',
            name: '',
            tutor: '',
            fatherLastName: '',
            motherLastName: '',
            numberCellphone: null,
            isTutorado: false,
            selected: null,
            arregloAsig: [],
            checked: true
        }
    },
    apollo:{
        students: consulta,
        teachers: consulta1,
    },    
    methods: {
        Asignar(id1,id2){
            this.$apollo.mutate({
                mutation: asignar,
                variables: {
                    idTeacher: id2,
                    idStudent: id1
                }
            })
            this.updateAlum(id1);
            //location.reload();
        },
        updateAlum(id1){
            const isTutorado = true
            this.$apollo.mutate({
                mutation: actualizar,
                variables: {
                    id: id1,
                    student:{
                        isTutorado
                    }
                }
            })
        },
        allAsig(id2){
            for(var i=0;i<this.arregloAsig.length;i++){
                this.Asignar(this.arregloAsig[i].id,id2);
            }            
            this.$apollo.queries.students.skip = false
            this.$apollo.queries.students.refetch();
            this.$apollo.queries.teachers.refetch();
        },
        selectStudent(student){
            /*var j=0;
            for(i=0;i<this.arregloAsig.length;){
                if(student.id == this.arregloAsig[i].id){
                    j=i;
                }
            }*/
            var i = this.arregloAsig.indexOf(student.id);
            if(i !== -1){
                this.arregloAsig.splice(i,1);
            }else{
                this.arregloAsig.push(student);
            }
            //this.id = student.id;
            //this.code = student.code;
        },
        selectTeacher(teacher){
            this.id2 = teacher.id;
            this.tutor = teacher.fatherLastName;
        }
        // arregloTeachers() {
        //     return this.arreglo = JSON.parse(this.teachers);
        // }
    }
}
</script>