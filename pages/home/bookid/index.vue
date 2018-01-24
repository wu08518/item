<template>
  <div>
    <heade></heade>
    <el-row class="targe">
      <el-col :span="6" :offset="2" class="target-a">目的地</el-col>
      <el-col :span="4"><i class="icon-font"></i></el-col>
      <el-col :span="6">到达地</el-col>
    </el-row>
    <el-row><el-button @click.native="getTargeInfo">查看目的地</el-button></el-row>
    <el-row>
      <el-col :span="8">
        <el-row v-for="(item, index) in targeList" :key="index">{{item.cat_name}}</el-row>
      </el-col>
      <el-col :span="16">{{targeList}}</el-col>
    </el-row>
  </div>
</template>

<script>
import httpquery from '~/utils/httpquery'
import {sign} from '~/constant/api'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      targeList: ''
    }
  },
  computed: {
    ...mapState({
      hosId: state => state.hosId,
      chnPid: state => state.chnPid
    })
  },
  methods: {
    async getTargeInfo () {
      const param = {
        // hosId: this.$store.state.hosId,
        // chnPid: this.$store.state.chnPid
        hosId: '61010000',
        chnPid: '00000146',
      }
      const data = await httpquery.post(sign.queryTicketQuestion, param)
      if (data.code === '1') {
        this.targeList = data.responseInfo
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.targe{
  margin: 2rem 0 2rem;
  .target-a{
    color: rgb(57, 23, 150);
  }
}
</style>
