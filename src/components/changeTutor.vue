<template>
    <div>
        <b-row>
            <b-col>
                <h2>Motivos del cambio</h2>
                <b-form-textarea style="height: 13rem;"></b-form-textarea>
            </b-col>
            <b-col>
                <h2>Seleccione tutor</h2>                
                <b-form-select v-model="selected">
                    <option :value="null" disabled>Seleccione un tutor:</option>
                    <option v-for="teacher in teachers" :key="teacher.id">
                        {{teacher.name}} {{teacher.fatherLastName}} {{teacher.motherLastName}}
                    </option>
                </b-form-select>
            </b-col>
        </b-row>
        <br>
        <form>
            <input type="button" value="Enviar">
        </form>
    </div>
</template>
<script>
import {consulta1} from '@/graphql/querys'
export default {
    name: 'Cambio',
    data(){
        return{
            
        }
    },
    apollo:{
        teachers: consulta1
    }
}
</script>