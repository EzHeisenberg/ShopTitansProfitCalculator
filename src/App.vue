<template>
  <div id="app">
    <div class="img-logo">
      <img class="img-fluid" :src="require('./assets/shoptitanslogo.png')" alt="Logo">
    </div>
    <div id="nav">
      <router-link to="/">Market Profit Calculator</router-link> |
      <router-link to="shop">Your Shop</router-link>
    </div>
    <router-view/>

    <Footer></Footer>
  </div>
</template>


<script>
// @ is an alias to /src
import Footer from "@/components/Footer";

export default {
  name: 'app',
  components: {
    Footer
  }
}
</script>


<style lang="sass">
@import "styles/variables.sass"


@font-face
  font-family: "BebasNeue"
  src: url("styles/fonts/BebasNeue-Regular.ttf") format("truetype")

@font-face
  font-family: "Pr"
  src: url("styles/fonts/Pr.ttf") format("truetype")

@font-face
  font-family: "eurostyleB"
  src: url("styles/fonts/EurostyleB.ttf") format("truetype")

@font-face
  font-family: "Europa"
  src: url("styles/fonts/mk2.ttf") format("truetype")


.img-logo
  display: flex
  justify-content: center
  img
    max-height: 200px


a
  text-decoration: none

p
  margin: 0

body
  background: #2183e8

.container
  background: $bg-yellow
  border: 1px #525252 solid
  border-radius: 10px

.container-wbg
  color: $light-background
  background: #40769b  /* fallback for old browsers */
  background: $backgroun-gradiant-webkit
  background: $backgroun-gradiant
  filter: drop-shadow(0px 10px 5px rgba(0,0,0,0.4))

.title
  font-family: $font-title
  letter-spacing: 2px
  text-align: center
  margin: 0
  font-size: $size-title
  -webkit-animation: title 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both
  animation: title 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both

.subtitle
  font-family: $font-subtitle
  letter-spacing: 0.5px
  font-size: $size-subtitle

.title-paragraphe
  padding: 10px 0
  font-family: $font-title-paragraphe
  font-size: $size-title-paragraphe
  letter-spacing: 1px

.paragraphe
  font-family: $font-paragraphe
  font-size: $size-paragraphe
  font-style: normal
  line-height: 28px
  font-weight: 300
  max-width: 850px



#nav
  padding: 30px 0 10px 0
  text-align: center


#nav a
  text-decoration: none
  font-weight: bold
  color: #2c3e50


#nav a.router-link-exact-active
  color: #00e1ff

</style>
