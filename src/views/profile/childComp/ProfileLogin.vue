<template>
  <div class="profile-login">
    <div class="login-container">
      <!-- 用户头像 -->
      <div class="login-img">
        <div class="login-circle">
          <img src="~assets/img/common/login.jpg" alt="">
        </div>
      </div>
      <!-- 用户信息 -->
      <div class="login-message">
        <div class="login-username">F-</div>
        <div class="login-text">再获得45个新鲜度可升级为LV4</div>
      </div>
      <!-- 授权登录 -->
      <div class="login-empower">
        <span>TOLO会员</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileLogin"
  }
</script>

<style scoped>
  .profile-login {
    position: relative;
    top: -20px;
    z-index: 99;
    margin: 0 10px;
    border-radius: 15px;
    background-color: #fff;
    box-shadow: 0 0 10px #eee;
    overflow: hidden;
  }

  .login-container {
    height: 80px;
    display: flex;
  }

  .login-img {
    width: 70px;
    padding: 15px 10px;
  }

  .login-circle {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    overflow: hidden;
  }

  .login-img img {
    width: 100%;
    height: 100%;
  }

  .login-message {
    flex: 1;
    padding: 15px 5px;
  }

  .login-username {
    font-weight: 700;
    color: #000;
  }

  .login-text {
    font-size: 10px;
    color: rgb(119, 115, 115);
  }

  .login-empower {
    width: 100px;
    line-height: 80px;
    padding: 0 10px;
    text-align: center;
  }

  .login-empower span {
    height: 20px;
    padding: 5px;
    border-radius: 5px;
    background-color: #f97070;
    color: #fff;
    font-size: 14px;
  }  
</style>