<template>
  <div class="profile-assets">
    <h3>我的资产</h3>
    <div class="item">
      <div class="assets-item" v-for="(item, index) in assetsItem" :key="index">
      <h3><i class="iconfont" :class="item.style"></i> {{item.title}}</h3>
      <h4>{{item.count}}<i> {{item.Company}}未使用</i></h4>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileAssets",
  data() {
    return {
      assetsItem: [
        {
          style: 'icon-searchbonus-s',
          title: '积分',
          count: 101,
          Company: '个'
        },
        {
          style: 'icon-searchyouhuijuan',
          title: '优惠卷',
          count: 0,
          Company: '张'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .profile-assets {
    height: 100px;
    margin: 0 10px;
    border-radius: 15px;
    background-color: #fff;
    box-shadow: 0 0 10px #eee;
    overflow: hidden;
    padding: 10px 20px;
    color: #303133;
  }
  
  .item {
    display: flex;
  }

  .assets-item {
    flex: 1;
    margin-top: 5px;
    color: #303133;
    text-align: center;
  }

  .assets-item h3 i {
    font-size: 22px;
    color: #f97070;
  }

  .assets-item h4 {
    font-size: 18px;
    color: #f97070;
  }

  .assets-item h4 i {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: #909399;
  }

</style>
