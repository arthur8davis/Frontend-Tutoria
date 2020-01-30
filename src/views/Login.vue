    <template>
    <div align="center">
        <br>
        <b-card style="max-width: 30rem;" border-variant="dark">
            <h2 >Login</h2>
            <form>
                <div align="justify">
                    <label>Usuario: </label><br>
                    <b-form-input type="text" name="usuario" v-model="usuario"></b-form-input>
                    <label>Contraseña: </label><br>
                    <b-form-input type="password" name="password" v-model="password"></b-form-input>
                </div>
                <br>
                <b-button @click="login(users)">Login</b-button>
            </form>
        </b-card><br>
        <p style="font-size: 13px; opacity: 0.5;">FACULTAD DE INGENIERIA INFORMATICA Y DE SISTEMAS</p>
    </div>
</template>
<script>
import { usuarios } from '@/graphql/queryUser';

export default {
    name: 'login',
    data(){
        return{
            usuario: '',
            password: '',
        }
    },
    apollo:{
        users: usuarios
    },
    methods: {
        login(users){
           this.ingresar(users)
        },
        ingresar(usuarios){
            for (let user of usuarios) {
                if(user.dni == this.usuario){
                    console.log(user.dni)
                    window.location.href = "/" + this.usuario;
                }
            }
        }
    }
}
</script>