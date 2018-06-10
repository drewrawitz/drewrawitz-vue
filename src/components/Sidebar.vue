<template>
  <aside class="app-sidebar">
    <div class="app-sidebar__container">
      <div class="app-sidebar__content">
        <div class="logo-wrapper">
          <span class="logo"></span>
        </div>
        <div class="profile">
          <h2>Drew Rawitz</h2>
          <p>Front-end Developer</p>
        </div>
        <Navigation />
      </div>
      <div class="app-sidebar__footer">
        <ul>
          <li>
            <a href="#"><TwitterIcon /></a>
          </li>
          <li>
            <a href="#"><LinkedInIcon /></a>
          </li>
          <li>
            <a href="#"><InstagramIcon /></a>
          </li>
          <li>
            <a href="#"><GithubIcon /></a>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<script>
import Navigation from './Navigation';
import TwitterIcon from '../assets/svg/twitter.svg';
import LinkedInIcon from '../assets/svg/linkedin.svg';
import InstagramIcon from '../assets/svg/instagram.svg';
import GithubIcon from '../assets/svg/github.svg';

export default {
  name: 'Sidebar',
  components: {
    Navigation,
    TwitterIcon,
    LinkedInIcon,
    InstagramIcon,
    GithubIcon,
  },
};
</script>

<style scoped>
.app-sidebar {
  grid-area: sidebar;
}

.app-sidebar__container {
  position: fixed;
  width: 17vw;
  height: 80vh;
  background: linear-gradient(0deg, #524284 0%, #6b5b9e 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
}

.app-sidebar__footer {
  ul {
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li {
    list-style: none;

    &:not(:last-child) {
      margin-right: 15px;
    }
  }

  a {
    display: inline-block;
    color: #d5c7ff;
  }
}

.logo-wrapper {
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 20px auto;
  border: 1px solid white;
}

.logo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(../assets/avatar.jpg);
  background-position: top center;
  background-size: cover;
  border-radius: 50%;
  border: 3px solid #524284;
}

.profile {
  color: #fff;
  text-align: center;
  padding: 0 10px;

  h2 {
    font-weight: 700;
    margin: 0;
  }

  p {
    margin-top: 5px;
    margin-bottom: 20px;
  }
}
</style>
