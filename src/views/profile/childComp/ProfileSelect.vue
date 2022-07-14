<template>
  <div class="profile-select">
    <h3>我的功能</h3>
    <div class="item">
      <div class="select-item" v-for="(item, index) in selectItem" :key="index">
        <img :src="item.img" alt="">
        <p>{{item.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileSelect",
  data() {
    return {
      // 模拟数据
      selectItem: [
        {
          img: require('../../../assets/img/profile/star.svg'),
          title: '集星有礼'
        },
        {
          img: require('../../../assets/img/profile/coupon.svg'),
          title: '兑换优惠'
        },
        {
          img: require('../../../assets/img/profile/service.svg'),
          title: '客服电话'
        },
        {
          img: require('../../../assets/img/profile/phone.svg'),
          title: '换绑手机号'
        },
        {
          img: require('../../../assets/img/profile/address.svg'),
          title: '地址管理'
        },
        {
          img: require('../../../assets/img/profile/evaluate.svg'),
          title: '我的评价'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .profile-select {
    height: 200px;
    margin: 20px 10px;
    border-radius: 15px;
    background-color: #fff;
    box-shadow: 0 0 10px #eee;
    overflow: hidden;
    padding: 10px 20px;
    color: #303133;
  }
  .item {
    display: flex;
    flex-flow: wrap;
    width: 100%;
  }
  .select-item {
    width: 25%;
    height: 80px;
    text-align: center;
    padding-top: 10px;
  }
  .select-item img {
    width: 30px;
    height: 30px;
    margin-bottom: 5px;
  }
  .select-item p {
    font-size: 14px;
    color: #303133;
  }
</style>
