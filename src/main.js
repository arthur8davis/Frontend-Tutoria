import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ApolloClient from "apollo-boost"
import VueApollo from "vue-apollo"
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

const apolloClient = new ApolloClient({
  uri: "http://localhost:4000/graphql"
  //uri: "http://192.168.43.24:4015/graphql"
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  apolloProvider,
}).$mount('#app')
