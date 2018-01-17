<template>
  <div>
    <heade></heade>
    <div>
      <el-button type="primary" @click.native="ismy">去我</el-button>
      <el-button type="success" @click.native="isshopping">去购物</el-button>
    </div>
    <router-view></router-view>
    <foote></foote>
  </div>
</template>

<script>
import foote from '~/components/foote'
import heade from '~/components/heade'

export default {
  data () {
    return {
      //
    }
  },
  components: {
    'foote': foote,
    'heade': heade
  },
  methods: {
    ismy () {
      this.$router.push('/home/myinfo')
    },
    isshopping () {
      this.$router.push('/home/shoppingcar')
    }
  }
}
</script>

<style>

</style>
