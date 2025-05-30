import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


// FontAwesome setup
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(faHouse, faUser, faEnvelope)

axios.defaults.baseURL = 'http://127.0.0.1:8000/api'
const app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
