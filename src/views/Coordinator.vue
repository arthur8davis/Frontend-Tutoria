<template>
    <div>
        <b-tabs pills card vertical nav-wrapper-class="w-30">
            <b-tab title="Subir Plan de Tutoria" active>
                <!-- <button style="display:block;" onclick="document.getElementById('inputFile').click()">Seleccione archivo</button> -->
                <label for="file">Seleccione archivo</label>
                <b-form-file v-model="file" type="file" @change="convertToBase64"  plain></b-form-file>
                <br><br>
                <b-card border-variant="success" header="Archivo seleccionado">
                    <b-row>
                        <b-col>
                            <b-card-text>{{ file ? file.name : '' }}</b-card-text>
                        </b-col>
                        <b-col>
                            <b-form-textarea placeholder="Describa el archivo" v-model="description"></b-form-textarea>
                        </b-col>
                    </b-row>
                </b-card>
                <br>
                <div align="right">
                    <form>
                        <b-button variant="secondary" @click="uploadPlan(file,description)">Subir</b-button>
                    </form>
                </div>
            </b-tab>
            <b-tab title="Solicitud de cambio">
                <b-row>
                    <b-col cols="4">
                        <h6 align="right">Alumno: </h6>
                    </b-col>
                    <b-col>
                        <label>
                            <input type="text" v-model="student" style="width:25rem;">
                        </label>
                    </b-col>
                </b-row><br>
                <b-row>
                    <b-col cols="4">
                        <h6 align="right">Tutor elegido: </h6>
                    </b-col>
                    <b-col>
                        <label>
                            <input type="text" v-model="tutor" style="width:25rem;">
                        </label>
                    </b-col>
                </b-row><br>
                <h5>Motivos del cambio:</h5>
                <b-form-textarea v-model="changeM" style="height: 8rem;"></b-form-textarea>
                <br>
                <b-row align="center">
                    <b-col><b-button variant="outline-success">Aceptar</b-button></b-col>
                    <b-col><b-button variant="outline-danger">Rechazar</b-button></b-col>
                </b-row>

            </b-tab>
        </b-tabs>
        <!-- <pre>
            {{$data}}
        </pre> -->
    </div>
</template>
<script>
    import {subirPlan} from '@/graphql/mutations'
    // import $ from 'jquery'
    export default {
        name: 'Coordinator',
        data(){
            return{
                file: null,
                description: '',
                id3: null,
                fileconvert: '',
                changeM: '',
                student:'',
                tutor:''
                
            }
        },
        methods:{
            uploadPlan(file, description){
                this.id3 = "5e317f60c074a22380278797"
                this.$apollo.mutate({
                    mutation: subirPlan,
                    variables:{
                        idCoordinator: this.id3,
                        mentoringPlan: {
                            description: description,
                            url: this.fileconvert
                        }
                    }
                })
            },
            convertToBase64(e) {
                //Read File
                let file = e.target.files[0];
                let reader = new FileReader();
                reader.onloadend = ()=>{
                    this.fileconvert = reader.result;
                }
                reader.readAsDataURL(file);
            }
        }
    }
</script>