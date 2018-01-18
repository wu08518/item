<template>
  <div>
    <heade></heade>
    <br/>
    <br/>
    <br/>
    <div>
      <el-button type="primary" @click.native="ismy">去我</el-button>
      <el-button type="success" @click.native="isshopping">去购物</el-button>
      <el-button type="success" @click.native="istouch">touch event</el-button>
    </div>
    <router-view></router-view>
    <foote></foote>
  </div>
</template>

<script>
import foote from '~/components/foote'
export default {
  data () {
    return {
      //
    }
  },
  components: {
    'foote': foote
  },
  methods: {
    ismy () {
      this.$router.push('/home/myinfo')
    },
    isshopping () {
      this.$router.push('/home/shoppingcar')
    },
    istouch () {
      this.$router.push('/home/testtouch')
    }
  }
}
</script>

<style>

</style>
