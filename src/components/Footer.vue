<template>
  <footer class="container-wbg footer">
    <div class="navigation-bar-social">
      <ul class="items-social" id="navbar-social">
        <li>
          <a href="https://github.com/EzHeisenberg" target="_blank" id="github-social">
            <img src="../assets/SocialNavigation/github.png" alt="Icon GitHub">
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/lucas-reteau/" target="_blank" id="linkedin-social">
            <img src="../assets/SocialNavigation/linkedin.png" alt="Icon LinkedIn">
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/heisen_dev/" target="_blank" id="instagram-social">
            <img src="../assets/SocialNavigation/instagram.png" alt="Icon Instagram">
          </a>
        </li>
        <li>
          <a href="mailto:reteau.lucas-pro@outlook.fr" id="mail-social">
            <img src="../assets/SocialNavigation/mail.png" alt="Icon Mail">
          </a>
        </li>
      </ul>
    </div>
    <div class="logo-ez">
      <img src="../assets/favicon-night.png" alt="">
    </div>
    <div class="footer-navigation">
        <p>Made with ♥️</p>
    </div>
    <p class="text-center copyright">© 2021 <a href="https://ezheisenberg.github.io" class="link-style-2">EzForeach</a></p>
  </footer>
</template>


<script>

export default {
  name: "Footer",

}
</script>
<style lang="sass">

.link-style-contact
  padding: 15px 30px
  border: #ffb6fc 2px solid
  border-radius: 15px
  color: #fff
  transition: 0.2s ease-in
  &:hover
    color: #000
    background: #ffb6fc


.title-paragraphe
  padding: 0

.paragraphe
  padding: 0
  font-size: 15px

.columns
  display: grid
  grid-template-columns: 33.3% 33.3% 33.3%
  align-self: center

.column
  padding: 10px 20px


a.link-style-2
  color: white
  transition: 0.3s ease-in
  &:hover
    color: #1d1d1d

.footer-navigation
  font-family: $font-title-paragraphe
  text-align: center


.navigation-bar-social
  ul
    width: fit-content
    margin: auto
    padding: 0
    list-style-type: none
    overflow: hidden
    li
      display: inline
      padding: 0 5px
      img
        height: calc(2vw + 30px)
        min-height: 40px
        cursor: pointer
        padding: 5px


.container-wbg
  border-top: 1px black solid
  margin-top: 50px
  padding: 25px 0 10px

.copyright
  padding: 0 0 10px

.logo-ez
  padding: 5px
  display: flex
  justify-content: center
  img
    height: 40px
    width: 40px



@media screen and (max-width: 1020px)
  .contact
    margin: -7.5rem 2rem 1rem

@media screen and (max-width: 820px)
  .columns
    display: grid
    grid-template-columns: auto
    align-self: center






</style>