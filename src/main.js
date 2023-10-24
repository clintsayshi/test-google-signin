import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import GoogleSignInPlugin from "vue3-google-signin";

const app = createApp(App);

app.use(GoogleSignInPlugin, {
  clientId: import.meta.env.VITE_CLIENT_ID,
});

app.mount("#app");
