import {createApp} from "vue";
import {router} from "@frontend/router";
import App from "@frontend/views/App.vue";

import "@frontend/assets/styles/normalize.css";
import "@frontend/assets/styles/global.scss";

const app = createApp(App);
app.use(router);
app.mount("body");