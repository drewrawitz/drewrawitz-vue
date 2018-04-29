<template>
  <div id="app">
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

export default {
  name: 'app',
  data() {
    return {
      name: 'Drew Rawitz',
    };
  },
  components: {
    Sidebar,
  },
};
</script>

<style>
body {
  background: linear-gradient(90deg, #d5c7ff 0%, #7b6bad 100%);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1350px;
  height: 700px;
  overflow: auto;
  background: #fff;
  flex: 1;
  margin: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}

h1,
h2 {
  font-weight: normal;
}

svg {
  width: 1em;
  height: 1em;
}

a {
  color: #3890dc;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #8475b7;
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
  grid-template-columns: 17vw auto;
  height: 100%;
}

.app-content {
  grid-area: content;
  background-color: #f5f5f5;
  grid-column-start: 2;
  font-size: 18px;
  line-height: 1.5;
}

.container {
  padding: 20px;
}
</style>
