const errorsDJ = {
  data () {
    return {
      errors: []
    }
  },
  methods: {
    hasError (field) {
      return Boolean(this.errors[field])
    },
    hasErrorNested (field, nested, index) {
      return Boolean(nested[index][field])
    },
    getError (field) {
      return this.errors[field]
    },
    getErrorNested (nested, index, field) {
      return nested[index][field]
    },
  }
}
export default errorsDJ