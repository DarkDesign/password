import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Password from 'primevue/password'
import Slider from 'primevue/slider'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import InputSwitch from 'primevue/inputswitch'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'

import 'primevue/resources/themes/vela-purple/theme.css'
import 'primeicons/primeicons.css'
import './assets/reset.scss'
import './assets/style.scss'



createApp(App)
    .use(PrimeVue)
    .use(ToastService)
    .component('Button', Button)
    .component('Password', Password)
    .component('Slider', Slider)
    .component('Card', Card)
    .component('InputText', InputText)
    .component('InputNumber', InputNumber)
    .component('InputSwitch', InputSwitch)
    .component('Toast', Toast)
    .mount('#app')
