<template>
  <section class="contrall">
    <div id="app">
      <p>欢迎来到搅布局</p>
      <br/>
      <br/>
      <br/>
      <div>
        <el-button type="primary" plain @click.native="ishome">SIGN IN</el-button>
      </div>
      </div>
		<div id="ismobile"><img src="static/img/github.png" alt="" /><p>请在移动端打开，并刷新页面。</p></div>
  </section>
</template>

<script>

export default {
  data () {
    return {
      //
    }
  },
  // watch: {
  //   $route (to, from) {
  //     console.log('to', to)
  //   }
  // },
  beforeRouteUpdate (to, from, next) {
    console.log('去了那个页面', to.name)
    next()
  },
  mounted () {
    this.browserRedirect()
  },
  methods: {
    browserRedirect () {
      var sUserAgent = navigator.userAgent.toLowerCase()
      var bIsIpad = sUserAgent.match(/ipad/i) == "ipad"
      var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os"
      var bIsMidp = sUserAgent.match(/midp/i) == "midp"
      var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4"
      var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb"
      var bIsAndroid = sUserAgent.match(/android/i) == "android"
      var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce"
      var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile"
			if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
				document.getElementById('ismobile').style.display = "none"
				document.getElementById('app').style.display = "block"
			} else {
				document.getElementById('ismobile').style.display = "block"
				document.getElementById('app').style.display = "none"
			}
		},
    ishome () {
      this.$router.push('./home')
    }
  }
}
</script>

<style>
  .contrall{
    min-height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #ismobile {
    display: none;
    font-size: .6rem;
    text-align: center;
    padding-top: 4rem;
  }
</style>
