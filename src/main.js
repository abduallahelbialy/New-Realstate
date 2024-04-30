import './assets/main.css'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/aura-light-green/theme.css";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from "aos";
import "aos/dist/aos.css";
const app = createApp(App)

app.use(router).use(PrimeVue).use(AOS.init());

app.mount('#app')
