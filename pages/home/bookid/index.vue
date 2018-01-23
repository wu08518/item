<template>
  <div>
    <heade></heade>
    <el-row class="targe">
      <el-col :span="6" :offset="2">目的地</el-col>
      <el-col :span="4"><i class="icon-font"></i></el-col>
      <el-col :span="6">到达地</el-col>
    </el-row>
    <el-row><el-button @click.native="getTargeInfo">查看目的地</el-button></el-row>
    <el-row>
      <el-col :span="8">
        <el-row v-for="(item, index) in targeList" :key="index">{{item.cat_name}}</el-row>
      </el-col>
      <el-col :span="16">右</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      targeList: ''
    }
  },
  methods: {
    getTargeInfo () {
      console.log('111')
      this.$http.post('/api/menudata').then((res) => {
        this.targeList = res.data.data
        console.log('res', this.targeList)
      })
    }
  }
}
</script>

<style>
.targe{
  margin: 2rem 0 2rem
}
</style>
