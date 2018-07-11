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
  border-top: 1px solid var(--primary-dark-border);

  @media (max-width: 767px) {
    display: none;
  }
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
  color: var(--primary-nav-color);
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
  background:
    linear-gradient(
      to top,
      rgba(0, 0, 0, 0.45),
      rgba(0, 0, 0, 0.45)
    )
    var(--primary);
  border-right: 5px solid var(--primary-nav-active);
  color: #fff;

  svg {
    color: var(--primary-nav-active);
  }
}
</style>
