export default {
  name: 'ElCol',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
    push: {
      type: Number,
      default: 0,
    },
    pull: {
      type: Number,
      default: 0,
    },
    xs: [Number, String],
    sm: [Number, String],
    md: [Number, String],
    lg: [Number, String],
    xl: [Number, String],
  },
  computed: {
    gutter() {
      let parent = this.$parent;

      while (parent && parent.$options.name !== 'ElRow') {
        parent = parent.$parent;
      }
      // console.log(parent.$options.name === 'ElRow' ? parent.gutter : 0);
      return parent.$options.name === 'ElRow' ? parent.gutter : 0;
    },
    style() {
      const style = {};

      if (this.gutter) {
        style.paddingLeft = `${this.gutter / 2}px`;
        style.paddingRight = style.paddingLeft;
      }
      return style;
    },
    classList() {
      const classList = [];

      ['span', 'offset', 'push', 'pull'].forEach((item) => {
        if (this[item]) {
          classList.push(item === 'span' ? `el-col-${this[item]}` : `el-col-${item}-${this[item]}`);
        }
      });

      ['xs', 'sm', 'md', 'lg', 'xl'].forEach((item) => {
        if (this[item]) {
          if (typeof this[item] === 'number') {
            classList.push(`el-col-${item}-${this[item]}`);
          } else {
            const porp = this[item];
            Object.keys(porp).forEach((data) => {
              if (data === 'span') {
                classList.push(`el-col-${item}-${porp[data]}`);
              } else {
                classList.push(`el-col-${item}-${porp}-${porp[data]}`);
              }
            });
          }
        }
      });
      return classList;
    },
  },
  render(h) {
    return h(this.tag,
      {
        class: ['el-col', this.classList],
        style: this.style,
      },
      this.$slots.default);
  },
};
