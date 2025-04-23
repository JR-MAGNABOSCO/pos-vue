import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

// FontAwesome setup
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(faHouse, faUser, faEnvelope)

const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
