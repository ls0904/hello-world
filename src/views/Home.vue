<template>
  <div>
    <h1>我是APP</h1>
    <!-- <a href="#/page1">page1</a> -->
    <router-link replace :to="{
      name: 'page1',
      query:{
        name:'张三',
        age:'18'
      }}">page1</router-link>
    <hr>
    <!-- <a href="#/page2">page2</a> -->
    <router-link replace="" :to="{ name: 'page2' }">page2</router-link>
    <hr>
    <router-link to='/login' class="router-link-active">登录</router-link>
    <router-view></router-view>
  </div>
</template>
<style lang='less'>
.router-link-active{
  color: red;
}
</style>
