<template>
  <div>
    <b-card no-body>
      <b-tabs pills card vertical nav-wrapper-class="w-30">
        
        <b-tab title="Horario" active>
          <Hours></Hours>
        </b-tab>
        <b-tab title="Citas">
          <div class="alert alert-success mt-3">
            <strong>Aviso </strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#" class="alert-link">X</a>
          </div>
          <div class="alert alert-info mt-3">
              <strong>Aviso </strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#" class="alert-link">X</a>
          </div>
          <div class="row">
            <Dates></Dates>
          </div>
          
          <div class="row">
            <div class="col-6">
              <ListDates></ListDates>
            </div>
            
            <div class="col-6">
              <ListReminder></ListReminder>
            </div>
          </div>
        </b-tab>
        <b-tab title="Sesion de Tutoria">
          <Session></Session>
        </b-tab>
        <b-tab title="Reportes">
          <b-card-text>Tab contents 3</b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import Dates from '@/components/Dates.vue';
import Hours from '@/components/Hours.vue';
import ListDates from '@/components/ListDates.vue';
import ListReminder from '@/components/ListReminder.vue';
import Session from '@/components/Session.vue';

export default {
  name: 'Tutor',
  components: {
    Dates,
    Hours,
    ListDates,
    ListReminder,
    Session
  }
}
</script>