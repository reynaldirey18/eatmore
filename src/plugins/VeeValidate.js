import Vue from 'vue'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import { required, email, min } from 'vee-validate/dist/rules'

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
extend('min', {
  ...min,
  message: '{_field_} must be at least 4 characters'
})
extend('password', {
  params: ['target'],
  validate (value, { target }) {
    return value === target
  },
  message: 'Password confirmation does not match'
})

// register component globaly
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
