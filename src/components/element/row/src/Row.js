export default {
  name: 'ElRow',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    gutter: {
      type: Number,
      default: 0,
    },
    type: {
      type: String,
      validator: (value) => value === 'flex',
    },
    justify: {
      type: String,
      validator: (value) => ['start', 'end', 'center', 'space-around', 'space-between'].includes(value),
    },
    align: {
      type: String,
      validator: (value) => ['top', 'middle', 'bottom'].includes(value),
    },
  },
  computed: {
    style() {
      const style = {};

      if (this.gutter) {
        style.marginLeft = `${-this.gutter / 2}px`;
        style.marginRight = style.marginLeft;
      }
      return style;
    },
  },
  render(h) {
    return h(this.tag,
      {
        class: [
          'el-row',
          { 'el-row--flex': this.type },
          this.justify !== 'start' && `is-justify-${this.justify}`,
          this.align && `is-align-${this.align}`,
        ],
        style: this.style,
      },
      this.$slots.default);
  },
};
