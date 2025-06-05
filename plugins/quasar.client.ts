import { Quasar, Dialog, Notify } from 'quasar'
import * as AllQuasarComponents from 'quasar'
import * as QuasarDirectives from 'quasar'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Quasar, {
    components: AllQuasarComponents,
    directives: QuasarDirectives,
    plugins: {
      Dialog,
      Notify
    },
  })
})