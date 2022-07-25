<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data() {
      return {
        message: '',
        isShow: false
      }
    },
    methods: {
      // 默认展示时间2000
      show(message, duration=2000) {
        this.isShow = true
        this.message = message

        // 定时器
        setTimeout(() => {
          this.isShow = false
          this.message = ''
        }, duration)
      }
    }
  }
</script>
<style scoped>
.toast {
    position: fixed;
    left: 50%;
    top: 50%;
    background-color: rgba(0,0,0,.8);
    padding: 10px;
    border-radius: 5px;
    transform: translate(-50%,-50%);
    color:#fff;
    z-index: 99;
  }
</style>
