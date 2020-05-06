import Vue from 'vue'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'

// custom validator
extend('secret', {
  validate: value => value === 'example',
  message: 'This is not the magic word'
})
extend('required', {
  ...required,
  message: '{_field_} can not be empty'
})
extend('email', {
  ...email,
  message: 'Email must be valid'
})

// register component globaly
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
