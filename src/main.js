import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

// import styling and tailwind
import '@/assets/style.css'
import '@/assets/css/main.css'

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
