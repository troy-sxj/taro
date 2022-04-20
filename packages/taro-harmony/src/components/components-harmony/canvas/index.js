export default {
  props: {
    id: String,
    canvasId: String,
    cls: String,
    width: 300,
    height: 150,
    type: {
      default: '2d',
      validator: function (value) {
        const isValidConfirmType = ['2d', 'webgl'].indexOf(value) !== -1
        if (!isValidConfirmType) {
          console.warn('unsupported canvas type:' + value + ', will use default type[2d].')
        }
        return isValidConfirmType
      }
    }
  }
}
