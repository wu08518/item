<template>
  <section>
    <heade></heade>
    <div v-touch="tou" @click="handleTouch('123')">
      hello
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      x: false,
      y: false,
    }
  },
  computed: {
    touch() {
      return {
        x: this.x,
        y: this.y,
        methods: true
      }
    }
  },
  mounted () {
    this.handleT()
  },
  methods: {
    handleTouch (val) {
      console.log('..................' + val + '<')
      alert('..................' + val + '<')
    },
    handleT () {
      let isT = this.touch()
      console.log('isT', isT)
    }
  }
}
</script>

<style>

</style>
