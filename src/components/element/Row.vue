<template>
  <div
    :class="[
        'el-row',
        {'el-row--flex': this.type},
        this.justify !== 'start' && `is-justify-${this.justify}`,
        this.align && `is-align-${this.align}`
      ]"
    :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ElRow',
  props: {
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
};
</script>

<style lang="scss">
.el-row {
  &::before,
  &::after {
    display: block;
    content: "";
  }
  &::after {
    clear: both;
  }
  &.el-row--flex{
    &::before,
    &::after {
      display: none;
    }
    display: flex;
  }
  &.is-justify-start{
    justify-content: start;
  }
  &.is-justify-end{
    justify-content: end;
  }
  &.is-justify-center{
    justify-content: center;
  }
  &.is-justify-space-around{
    justify-content: space-around;
  }
  &.is-justify-space-between{
    justify-content: space-between;
  }
  &.is-align-top{
    align-items: flex-start;
  }
  &.is-align-middle{
    align-items: center;
  }
  &.is-align-bottom{
    align-items: flex-end;
  }
}
</style>
