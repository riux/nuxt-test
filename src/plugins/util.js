const required = value => !!value || 'Este campo es obligatorío!.'
const arrRequired = arr => !_.isEmpty(arr) || 'Por lo menos asigne un valor!.'

export default ({ app }, inject) => {
  inject('required', required)
  inject('arrRequired', arrRequired)
}
