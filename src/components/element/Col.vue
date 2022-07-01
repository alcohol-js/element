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
    left: $i / 24 * 100%;
  }
  .el-col-pull-#{$i}{
    position: relative;
    right: $i / 24 * 100%;
  }
}
// xs <168px
@media only screen and (max-width: 767px) {
  @for $i from 0 through 24 {
    .el-col-xs-#{$i} {
      width: $i / 24 * 100%;
    }
    .el-col-xs-offset-#{$i}{
      margin-left: $i / 24 * 100%;
    }
    .el-col-xs-push-#{$i}{
      position: relative;
      left: $i / 24 * 100%;
    }
    .el-col-xs-pull-#{$i}{
      position: relative;
      right: $i / 24 * 100%;
    }
  }
}
//sm >=768px
@media only screen and (min-width: 768px) {
  @for $i from 0 through 24 {
    .el-col-sm-#{$i} {
      width: $i / 24 * 100%;
    }
    .el-col-sm-offset-#{$i}{
      margin-left: $i / 24 * 100%;
    }
    .el-col-sm-push-#{$i}{
      position: relative;
      left: $i / 24 * 100%;
    }
    .el-col-sm-pull-#{$i}{
      position: relative;
      right: $i / 24 * 100%;
    }
  }
}
//md >=992px
@media only screen and (min-width: 992px) {
  @for $i from 0 through 24 {
    .el-col-md-#{$i} {
      width: $i / 24 * 100%;
    }
    .el-col-md-offset-#{$i}{
      margin-left: $i / 24 * 100%;
    }
    .el-col-md-push-#{$i}{
      position: relative;
      left: $i / 24 * 100%;
    }
    .el-col-md-pull-#{$i}{
      position: relative;
      right: $i / 24 * 100%;
    }
  }
}
//lg >=1200px
@media only screen and (min-width: 1200px) {
  @for $i from 0 through 24 {
    .el-col-lg-#{$i} {
      width: $i / 24 * 100%;
    }
    .el-col-lg-offset-#{$i}{
      margin-left: $i / 24 * 100%;
    }
    .el-col-lg-push-#{$i}{
      position: relative;
      left: $i / 24 * 100%;
    }
    .el-col-lg-pull-#{$i}{
      position: relative;
      right: $i / 24 * 100%;
    }
  }
}
//xl >=1920px
@media only screen and (min-width: 1920px) {
  @for $i from 0 through 24 {
    .el-col-xl-#{$i} {
      width: $i / 24 * 100%;
    }
    .el-col-xl-offset-#{$i}{
      margin-left: $i / 24 * 100%;
    }
    .el-col-xl-push-#{$i}{
      position: relative;
      left: $i / 24 * 100%;
    }
    .el-col-xl -pull-#{$i}{
      position: relative;
      right: $i / 24 * 100%;
    }
  }
}
</style>
