<template>
  <div>
    <Hero heading="Open Source Plugins" bg="bg_tech-computer.jpg" />
    <div class="container">
      <h2 class="heading-icon">
        <WordpressIcon />
        <span>Wordpress</span>
      </h2>
      <div class="project">
        <h3 class="project__heading"><a href="https://wordpress.org/plugins/featured-image-notes/" target="_blank">Featured Image Notes</a></h3>
        <p>Sometimes you might need to provide image guidelines to your clients who are using the Featured Image meta box. This plugin will allow you to specify different notes for each custom post type that supports Post Thumbnails.</p>
        <div class="project__media">
          <figure>
            <img v-img src="../../assets/featured-image-notes1.png" alt="Featured Image Notes plugin settings" style="max-width: 200px;" />
            <figcaption>Plugin settings screen in the admin</figcaption>
          </figure>
          <figure>
            <img v-img src="../../assets/featured-image-notes2.png" alt="Featured Image Notes plugin screenshot" style="max-width: 200px;" />
            <figcaption>Featured Image Notes in action on a post</figcaption>
          </figure>
        </div>

        <div class="project__links">
          <a href="#" class="project__source">
            <GithubIcon />
            <span>View source on GitHub</span>
          </a>
          <a href="#" class="project__source">
            <WordpressIcon />
            <span>View plugin on WordPress</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WordpressIcon from '../../assets/svg/wordpress.svg';
import GithubIcon from '../../assets/svg/github.svg';
import Hero from '../Hero';

export default {
  name: 'Plugins',
  components: {
    Hero,
    WordpressIcon,
    GithubIcon,
  },
};
</script>

<style scoped>
  .heading-icon {
    display: flex;
    align-items: center;
    line-height: 1;

    > *:not(:last-child) {
      margin-right: 10px;
    }
  }

  .project {
    a {
      text-decoration: none;
    }

    p {
      margin: 0;
    }
  }

  .project__media {
    display: flex;
    justify-content: flex-start;
    margin: 20px 0;
    padding: 20px;
    background-color: #ececec;

    figure {
      margin: 5px 0 0 5px;
      align-self: stretch;

      &:not(:last-child) {
        margin-right: 20px;
      }
    }
  }

  .project__heading {
    margin-bottom: 10px;
  }

  .project__links {
    display: flex;

    > *:not(:last-child) {
      margin-right: 25px;
    }
  }

  .project__source {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #636363;
    transition: color 0.3s ease-in-out;

    > *:not(:last-child) {
      margin-right: 8px;
    }

    &:hover {
      color: #1a1a1a;
    }
  }
</style>
