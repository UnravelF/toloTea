<template>
  <div id="profile">
    <scroll class="content"
            :probe-type="3">
      <!-- 顶部banner模块 -->
      <profile-banner/>
      <!-- 登录信息模块 -->
      <profile-login/>
      <!-- 我的资产模块 -->
      <profile-assets/>
      <!-- 我的功能模块 -->
      <profile-select/>
      </scroll>
  </div>
</template>

<script>
  import ProfileBanner from './childComp/ProfileBanner'
  import ProfileLogin from './childComp/ProfileLogin'
  import ProfileAssets from './childComp/ProfileAssets'
  import ProfileSelect from './childComp/ProfileSelect'

  import Scroll from 'components/common/scroll/Scroll'


  export default {
    name: "Profile",
    components: {
      ProfileBanner,
      ProfileLogin,
      ProfileAssets,
      Scroll,
      ProfileSelect
    }
  }
</script>

<style scoped>
  #profile {
    position: relative;
    height: 100vh;
    background-color: #f6f6f6;
  }

    .content {
    position: absolute;
    top: 0;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>