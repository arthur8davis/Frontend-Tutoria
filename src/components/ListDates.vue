<template>
  <b-card-group deck>
    <b-card no-body header="SOLICITUDES DE CITAS">
      <b-list-group flush>
        <b-list-group-item class="d-flex justify-content-between">
          <div>Tom Cat</div>
          <div><button class="btn btn-outline-primary btn-sm">Ver</button></div>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between">
          <div>Jerry Mouse</div>
          <div><button class="btn btn-outline-primary btn-sm">Ver</button></div>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between">
          <div>Lucas Duck</div>
          <div><button class="btn btn-outline-primary btn-sm">Ver</button></div>
        </b-list-group-item>
      </b-list-group>
    </b-card>
  </b-card-group>

</template>
<script>
export default {
  name: 'ListDates'
}
</script>