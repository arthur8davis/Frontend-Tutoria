<template>
    <div>
        <b-tabs pills card vertical nav-wrapper-class="w-30">
            <b-tab title="Solicitud de cambio" active>
                <label>Estudiante: </label><br>
                <b-form-input type="text"></b-form-input>
                <br>
                <b-form-textarea placeholder="Describa la razón" v-model="description"></b-form-textarea>
                <br>
                <div align="rigth">
                    <b-button variant="outline-success" @click="changeRequest(description)">Enviar</b-button>
                </div>
            </b-tab>
        </b-tabs>
        <pre>{{$data}}</pre>
    </div>
</template>
<script>
import { cambioTutor } from '@/graphql/mutations'
export default {
    name: 'SolicitudC',
    data(){
        return{
            id: "5e2cc3f16ea0374acc8aaf96",
            description: ""
        }
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