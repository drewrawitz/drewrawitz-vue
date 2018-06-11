<template>
  <nav class="app-sidebar__nav">
    <ul>
      <li>
        <router-link to="/">
          <HomeIcon />
          <span>Home</span>
        </router-link>
      </li>
      <li>
        <router-link to="/about">
          <UserIcon />
          <span>About</span>
        </router-link>
      </li>
      <li>
        <router-link to="/workflow">
          <WorkflowIcon />
          <span>My Workflow</span>
        </router-link>
      </li>
      <li>
        <router-link to="/technology">
          <TechnologyIcon />
          <span>Technology</span>
        </router-link>
      </li>
      <li>
        <router-link to="/plugins">
          <BookIcon />
          <span>Plugins</span>
        </router-link>
      </li>
      <li>
        <router-link to="/contact">
          <MailIcon />
          <span>Contact</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import HomeIcon from '../assets/svg/home.svg';
import WorkflowIcon from '../assets/svg/box.svg';
import TechnologyIcon from '../assets/svg/code.svg';
import BookIcon from '../assets/svg/book-open.svg';
import MailIcon from '../assets/svg/mail.svg';
import UserIcon from '../assets/svg/user.svg';

export default {
  name: 'Navigation',
  components: {
    HomeIcon,
    WorkflowIcon,
    TechnologyIcon,
    BookIcon,
    MailIcon,
    UserIcon,
  },
};
</script>

<style scoped>
nav {
  border-top: 1px solid #5c4d8f;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: #d5c7ff;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  transition: color 0.3s ease-in-out;

  > *:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    color: #fff;
  }

  svg {
    font-size: 24px;
  }
}

.router-link-exact-active {
  background-color: #372b5d;
  border-right: 5px solid #3890dc;
  color: #fff;

  svg {
    color: #3890dc;
  }
}
</style>
