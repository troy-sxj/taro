// @see https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-components-basic-input-0000000000611673

export default {
  data: {
    inputValue: ''
  },
  props: {
    id: String,
    cls: String,
    type: String,
    password: Boolean,
    placeholder: String,
    disabled: Boolean,
    maxlength: {
      default: 140
    },
    focus: Boolean,
    confirmType: {
      default: 'done',
      validator: function (value) {
        const isValidConfirmType = ['default', 'next', 'go', 'done', 'send', 'search'].indexOf(value) !== -1
        if (!isValidConfirmType) {
          console.warn('unsupported props-confirmType:' + value + ', will use default confirmType[done].')
        }
        return isValidConfirmType
      }
    }
  },

  computed: {
    realType: {
      get () {
        let temp = this.type
        if (this.password && this.password === 'true') {
          temp = 'password'
        }
        return temp
      }
    }
  },

  changeCallback: function (e) {
    this.inputValue = e.value
    this.$emit('input', { id: this.id, value: e.value, cursor: null, keyCode: null })
  },

  focusCallback: function () {
    let temp = ''
    if (this.inputValue) {
      temp = this.inputValue
    }
    this.$emit('focus', { id: this.id, value: temp })
  },

  blurCallback: function () {
    this.$emit('blur', { id: this.id, value: this.inputValue })
  },

  enterkeyclickCallback: function (e) {
    this.$emit('confirm', { id: this.id, value: this.inputValue, enterKey: e.value })
  }
}
