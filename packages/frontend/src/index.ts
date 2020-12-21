import {createApp} from "vue";
import {router} from "@frontend/router";
import App from "@frontend/App.vue";

import "@frontend/assets/styles/normalize.css";
import "@frontend/assets/styles/global.scss";
import {ProfileStore, STORE_PROFILE} from "@frontend/stores/ProfileStore";

const app = createApp(App);

app.use(router);
app.provide(STORE_PROFILE, new ProfileStore());
app.mount("body");