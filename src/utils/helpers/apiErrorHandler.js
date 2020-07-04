const apiErrorHandler = function (errors) {
  if (!errors || errors.length === 0) return false
  const h = this.$createElement
  const messages = errors.map(({ message }) => h('p', null, message))
  this.$message({ message: h('p', null, messages), type: 'error' })
}

export { apiErrorHandler }
