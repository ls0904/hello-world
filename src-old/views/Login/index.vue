<template>
  <div>
    <h1>登录页面</h1>
    <button @click="handleLogin">点我就登录成功，2秒的一个延时</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleLogin () {
      setTimeout(() => {
        let userInfo = {
          name: '张三',
          pwd: '123'
        }
        localStorage.setItem('userInfo', JSON.stringify(userInfo))

        // this.$router.replace('/home');
        console.log(this.$route);
        
        let redirect = this.$route.query.redirect || '/center'
        this.$router.replace(redirect)
      }, 2000)
    }
  }
}
</script>
