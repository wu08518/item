<template>
  <div>
    <el-row class="footer">
      <el-col :span="6" @click.native="book">车票预订</el-col>
      <el-col :span="6" @click.native="serverFF">商旅服务</el-col>
      <el-col :span="6" @click.native="queryOder">订单查询</el-col>
      <el-col :span="6" @click.native="my">我的</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    book () {
      this.$emit('isbook')
    },
    serverFF () {
      this.$emit('isserverFF')
    },
    queryOder () {
      this.$emit('isqueryOder')
    },
    my () {
      this.$emit('ismy')
    }
  }
}
</script>

<style>
.footer{
  width: 100%;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  bottom: 0;
  line-height:40px;
}
</style>

