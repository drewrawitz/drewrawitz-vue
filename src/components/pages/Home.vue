<template>
  <div class="homepage-wrapper">
    <div class="homepage-bg"></div>
    <div class="homepage-content">
      <transition name="slide-fade" appear>
        <h1 class="homepage-heading">Hello!</h1>
      </transition>
      <transition name="fade" appear>
        <p class="homepage-intro">My name is <span class="h-fw800">Drew Rawitz</span>, and I'm a Senior Front-end Developer working remotely out of Albuquerque, New Mexico!</p>
      </transition>
      <transition name="fade" appear>
        <div class="homepage-cta">
          <router-link to="/about">
            <div class="h-text-icon" v-on:click="gaEvent('Home', 'click', 'Learn more')">
              <span><UserIcon /></span>
              <span>Learn more about me</span>
            </div>
          </router-link>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import UserIcon from '../../assets/svg/user.svg';

export default {
  name: 'Home',
  components: {
    UserIcon,
  },
  methods: {
    gaEvent(category, action, label) {
      this.$ga.event(category, action, label);
    },
  },
};
</script>

<style scoped>
.homepage-wrapper {
  position: relative;
  height: 100%;
}

.homepage-content {
  position: relative;
  z-index: 100;
  padding: 20px;
  height: 100%;
  max-width: 700px;
  margin: auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;

  @media (max-width: 767px) {
    padding-top: 120px;
    padding-bottom: 120px;
  }
}

.homepage-heading {
  margin: 0;
  font-size: 80px;
  line-height: 1;

  svg {
    font-size: 65%;
  }
}

.homepage-cta {
  margin: 30px 0 0 0;

  a {
    color: var(--primary-nav-active);
    text-decoration: none;
  }
}

.homepage-intro {
  margin: 20px 0 0 0;
  font-size: 30px;
}

.homepage-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background-image: url(../../assets/bg_homepage.jpg);
  background-size: cover;
  background-position: center;
  height: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.65);
    outline: 1px solid rgba(255, 255, 255, 0.25);
    outline-offset: -8px;
  }
}
</style>
