<template>
  <section>
    <heade></heade>
    <div>
      hello{{$route.name}}
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
  },
  methods: {
  }
}
</script>

<style>

</style>
