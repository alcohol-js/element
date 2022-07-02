import Vue from 'vue';

import '@/assets/theme-chalk/display.scss';
import '@/assets/theme-chalk/Row.scss';
import '@/assets/theme-chalk/Col.scss';

import { Col, Row } from '@element';

import App from './App.vue';

Vue.use(Col);
Vue.use(Row);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
