<template>
  <nav-bar>
    <div slot="left" class="left">Tolo茶</div>
    <div slot="center" class="center">（韩山师范学院）</div>
    <div slot="right">
      <span>自提</span>
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: "MenuNavBar",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .left, .center {
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    color: #000;
  }

  .right span {
    height: 20px;
    padding: 5px 12px;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    border-radius: 5px;
    background-color: #f97070;
  }
</style>
