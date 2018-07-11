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
            <a href="https://www.twitter.com/drewrawitz" target="_blank"><TwitterIcon /></a>
          </li>
          <li>
            <a href="http://www.linkedin.com/pub/drew-rawitz/78/97b/2b7" target="_blank"><LinkedInIcon /></a>
          </li>
          <li>
            <a href="https://www.instagram.com/drewrawitz" target="_blank"><InstagramIcon /></a>
          </li>
          <li>
            <a href="https://www.github.com/drewrawitz" target="_blank"><GithubIcon /></a>
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

.app-sidebar__content {
  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }
}

.app-sidebar__container {
  background:
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.10),
      rgba(0, 0, 0, 0.30)
    )
    var(--primary);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;

  @media (min-width: 768px) {
    position: fixed;
    width: 17vw;
    min-width: 200px;
    height: calc(100vh - 40px);
    max-height: 850px;
  }
}

.app-sidebar__footer {
  @media (max-width: 767px) {
    display: none;
  }

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
    color: var(--primary-nav-color);
  }
}

.logo-wrapper {
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 20px auto;
  border: 1px solid white;

  @media (max-width: 767px) {
    margin: 0;
    width: 80px;
    height: 80px;
  }
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
  border: 3px solid var(--primary);
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
    margin-bottom: 0;

    @media (min-width: 768px) {
      margin-bottom: 20px;
    }
  }
}
</style>
