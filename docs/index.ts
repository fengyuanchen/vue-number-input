import { createApp } from 'vue';
import App from './app.vue';
import DemoBlock from './components/demo-block.vue';
import VueNumberInput from '../src';

const app = createApp(App);

app.component(VueNumberInput.name as string, VueNumberInput);
app.component(DemoBlock.name as string, DemoBlock);
app.mount('#app');
