import Vue from 'vue';
import App from './App.vue';
import '@material/checkbox/dist/mdc.checkbox.css'
import '@material/form-field/dist/mdc.form-field.css'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
