<template>
  <div id="app">
    <div class="color-picker" v-on:click="colorPicker">
      <div class="color-picker__swatches">
        <div class="color-picker__swatch">
          <ColorPickerIcon />
        </div>
        <div class="color-picker__swatch-group">
          <div class="color-picker__swatch color-picker__swatch--blue"></div>
          <div class="color-picker__swatch color-picker__swatch--purple"></div>
        </div>
      </div>
    </div>
    <div class="app-wrapper">
      <Sidebar />
      <main class="app-content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar';
import ColorPickerIcon from './assets/svg/eyedropper.svg';

export default {
  name: 'app',
  data() {
    return {
      name: 'Drew Rawitz',
    };
  },
  components: {
    Sidebar,
    ColorPickerIcon,
  },
  methods: {
    colorPicker() {
      console.log('hi');
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i,800');
@import url('https://fonts.googleapis.com/css?family=Arima+Madurai:400,700,900');

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  /* background: linear-gradient(90deg, var(--primary-light) 0%, var(--primary) 100%); */
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.1)) var(--primary);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1350px;
  height: calc(100vh - 40px);
  max-height: 850px;
  overflow: auto;
  background: #fff;
  flex: 1;
  margin: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.app-content {
  grid-area: content;
  background-color: var(--background);
  grid-column-start: 2;
  font-size: 16px;
  line-height: 1.8;
  padding: 10px;

  h1,
  h2,
  h3 {
    font-family: 'Arima Madurai', cursive;
    font-weight: 700;
    line-height: 1;
  }

  h2 {
    font-size: 35px;
  }

  h3 {
    font-size: 25px;
  }
}

img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}

svg {
  width: 1em;
  height: 1em;
}

a {
  color: #3890dc;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: var(--primary-xl);
  }
}

hr {
  height: 1px;
  background: #ccc;
  border: none;
  margin: 20px 0;
}

::-webkit-scrollbar {
  display: none;
}

.app-wrapper {
  display: grid;
  grid-template-areas: 'sidebar content';
  grid-template-columns: minmax(180px, 17vw) 1fr;
  height: 100%;
}

.container {
  padding: 20px;
}

figure {
  align-self: flex-start;
  text-align: center;

  img {
    /* outline: 2px solid #b0a2de; */
    outline: 2px solid var(--primary-xl);
    outline-offset: 2px;
  }
}

figcaption {
  font-size: 12px;
  line-height: 1.3;
  color: #545454;
  max-width: 80%;
  margin: auto;
  margin-top: 10px;
}

.h-text-icon {
  display: flex;
  align-items: center;
  line-height: 1;

  > *:not(:last-child) {
    margin-right: 10px;
  }
}

.h-text-center {
  text-align: center;
}
.h-fw800 {
  font-weight: 800 !important;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(15px);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
<style scoped>
.color-picker {
  position: fixed;
  top: 5px;
  right: 5px;
  z-index: 100;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.color-picker__swatches {
  background-color: var(--background);
  padding: 5px;
  border-radius: 25px;
}

.color-picker__swatch-group {
  margin-top: 5px;

  > *:not(:last-child) {
    margin-bottom: 5px;
  }
}

.color-picker__swatch {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &--blue {
    background-color: var(--blue);
  }

  &--purple {
    background-color: var(--purple);
  }
}
</style>
