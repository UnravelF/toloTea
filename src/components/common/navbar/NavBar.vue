<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    height: 49px;
    line-height: 49px;
    text-align: center;
  }

  .left {
    width: 80px;
  }

  .right {
    width: 80px;
  }

  .center {
    flex: 1;
  }
</style>