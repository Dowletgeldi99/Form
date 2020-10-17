import Vue from "vue";
import App from './views/App';
import store from './vuex/store';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);

const app = new Vue({
    el : '#app',
    render: h => h(App),
    store
}).$mount('#app');