import Vue from 'vue'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'

// custom validator
extend('secret', {
  validate: value => value === 'example',
  message: 'This is not the magic word'
})

extend('required', {
  validate (value) {
    return {
      required: true,
      valid: ['', null, undefined].indexOf(value) === -1
    }
  },
  computesRequired: true,
  message: '{_field_} can not be empty'
})

// register component globaly
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
