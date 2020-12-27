import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";

// 引入antd
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

//import store from "./store"
import "./main.css";
import "./assets/global.css";

const app = createApp(App);
app.use(Antd);
app.use(router);

//app.use(store);
app.mount('#app');
