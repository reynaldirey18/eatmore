import Vue from 'vue'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'

// custom validator
extend('secret', {
  validate: value => value === 'example',
  message: 'This is not the magic word'
})

// register component globaly
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
