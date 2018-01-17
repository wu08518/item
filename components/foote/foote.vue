<template>
  <div>
    <el-row class="footer">
      <el-col :span="6"><a>车票预订</a></el-col>
      <el-col :span="6">商旅服务</el-col>
      <el-col :span="6">订单查询</el-col>
      <el-col :span="6">我的</el-col>
    </el-row>
  </div>
</template>

<script>
export default {

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

