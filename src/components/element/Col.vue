<template>
  <div :class="['el-col', classList]" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
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
      return classList;
    },
  },
};
</script>

<style lang="scss">
.el-col {
  float: left;
  box-sizing: border-box;
}
@for $i from 0 through 24 {
  .el-col-#{$i} {
    width: $i / 24 * 100%;
  }
  .el-col-offset-#{$i}{
    margin-left: $i / 24 * 100%;
  }
  .el-col-push-#{$i}{
    position: relative;
    left: $i / 24 * 100%;;
  }
  .el-col-pull-#{$i}{
    position: relative;
    right: $i / 24 * 100%;;
  }
}
</style>
