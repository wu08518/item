<template>
  <div>
    <el-row class="contr">
      <el-col :span="2"></el-col>
      <el-col :span="10"><img src="~/assets/img/deepgit.png" alt=""/></el-col>
      <el-col :span="4" @click.native="ishome"><i class="iconfont zhuye"></i></el-col>
      <el-col :span="4">sign in</el-col>
      <el-col :span="4">sign up</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    ishome () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
  .contr{
    display: flex;
    justify-content: center;
    height: 1rem;
    top: 0;
    line-height:40px;
    margin-bottom:1rem;
    font-size:1.4rem;
  }
  .zhuye {
    font-size:2.4rem;
  }
</style>
