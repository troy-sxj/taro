export default {
  props: {
    id: String,
    cls: '',
    hoverClass: String,
    hoverStartTime: {
      default: 50
    },
    hoverStayTime: {
      default: 400
    }
  },

  data () {
    return {
      touch: false,
      hover: false
    }
  },
  computed: {
    clsType () {
      if (this.hover) {
        return this.hoverClass
      } else {
        return this.cls
      }
    }
  },

  onTouchStart () {
    this.touch = true
    if (this.hoverClass) {
      setTimeout(() => {
        if (this.touch) {
          this.hover = true
        }
      }, this.hoverStayTime)
    }
  },

  onTouchEnd () {
    this.touch = false
    if (this.hoverClass) {
      setTimeout(() => {
        if (!this.touch) {
          this.hover = false
        }
      }, this.hoverStayTime)
    }
  }
}
