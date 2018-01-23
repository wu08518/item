<template>
  <div>
    <heade></heade>
    <div>
      <div>订票</div>
      <div>商务服务</div>
      <div>订单查询</div>
      <div>我的</div>
    </div>
    <router-view></router-view>
    <foote
      @isbook="isbook"
      @isserverFF='serverFF'
      @isqueryOder='isqueryOder'
      @ismy='ismyinfo'
    ></foote>
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
    isbook () {
      this.$router.push('/home/bookid')
    },
    serverFF () {
      this.$router.push('/home/shoppingcar')
    },
    isqueryOder () {
      this.$router.push('/home/testtouch')
    },
    ismyinfo () {
      this.$router.push('/home/myinfo')
    }
  }
}
</script>

<style>

</style>
