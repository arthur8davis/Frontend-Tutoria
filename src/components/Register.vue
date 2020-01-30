<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        label="Email:"
        label-for="correo"
      >
        <b-form-input
          id="correo"
          v-model="form.email"
          type="email"
          required
          
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Nombres:" label-for="nombre">
        <b-form-input
          id="nombre"
          v-model="form.name"
          required
          
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Apellido Paterno:" label-for="apellidoPaterno">
        <b-form-input
          id="apellidoPaterno"
          v-model="form.ln"
          required
          
        ></b-form-input>
      </b-form-group>
      
      <b-form-group label="Apellido Materno:" label-for="apellidoMaterno">
        <b-form-input
          id="apellidoMaterno"
          v-model="form.mln"
          required
          
        ></b-form-input>
      </b-form-group>
      
      <b-form-group label="DNI:" label-for="dni">
        <b-form-input
          id="dni"
          v-model="form.dni"
          required
          
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Usuario:" label-for="usuario">
        <b-form-input
          id="usuario"
          v-model="form.nick"
          required
          
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Rol:" label-for="rol">
        <b-form-select
          id="rol"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        form: {
          dni: '',
          email: '',
          name: '',
          ln: '',
          mln: '',
          nick: '',
          food: null,
          checked: []
        },
        roles: [{ text: 'Seleccione Rol', value: null }, 'Coordinador', 'Director de escuela', 'Director de departamento'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>