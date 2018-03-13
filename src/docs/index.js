import Vue from 'vue';
import App from './app.vue';
import Demo from './components/demo.vue';
import VueNumberInput from '../../src/index.vue';

Vue.component('demo', Demo);
Vue.component('vue-number-input', VueNumberInput);

export default new Vue({
  el: '#app',
  render: createElement => createElement(App),
});
