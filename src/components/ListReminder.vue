<template>
  <b-card-group deck>
    <b-card no-body header="TUTORADOS PARA RECORDAR">
      <b-list-group flush>
        <b-list-group-item class="d-flex justify-content-between">
          <div>John Wick </div>
          <div><button class="btn btn-danger btn-sm">1 sesiones</button></div>
          <div><button class="btn btn-outline-primary btn-sm">Recordar</button></div>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between">
          <div>Sam Williams</div>
          <div><button class="btn btn-danger btn-sm">2 sesiones</button></div>
          <div><button class="btn btn-outline-primary btn-sm">Recordar</button></div>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between">
          <div>Lil Tupac</div>
          <div><button class="btn btn-danger btn-sm">1 sesiones</button></div>
          <div><button class="btn btn-outline-primary btn-sm">Recordar</button></div>
        </b-list-group-item>
      </b-list-group>
    </b-card>
  </b-card-group>

</template>
<script>
export default {
  name: 'ListReminder'
}
</script>