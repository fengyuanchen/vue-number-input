import Vue from 'vue';
import App from './app.vue';
import Demo from './components/demo.vue';
import VueNumberInput from '..';

Vue.component('demo', Demo);
Vue.component(VueNumberInput.name, VueNumberInput);

export default new Vue({
  el: '#app',
  render: createElement => createElement(App),
});
