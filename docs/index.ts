import { createApp } from 'vue';
import App from './app.vue';
import DemoBlock from './components/demo-block.vue';
import VueNumberInput from '../src';

const app = createApp(App);

app.component(VueNumberInput.name, VueNumberInput);
app.component(DemoBlock.name, DemoBlock);
app.mount('#app');
