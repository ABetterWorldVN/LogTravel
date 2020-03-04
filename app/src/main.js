import Vue from 'vue';
import App from './App.vue';

import $rq from './request';

Vue.config.productionTip = false;

$rq.init();

new Vue({
  render: h => h(App),
}).$mount('#app')
