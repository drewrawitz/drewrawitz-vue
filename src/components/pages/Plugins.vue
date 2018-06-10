<template>
  <div>
    <Hero heading="Open Source Plugins" bg="bg_tech-computer.jpg" />
    <div class="container">
      <div class="plugins-wrapper">
        <div class="plugin">
          <h2 class="h-text-icon">
            <WordpressIcon />
            <span>Wordpress</span>
          </h2>
          <div class="project-wrapper">
            <div class="project" v-for="plugin in plugins.wordpress">
              <h3 class="project__heading"><a :href="plugin.links.wordpress" target="_blank">{{ plugin.name }}</a></h3>
              <p>{{ plugin.description }}</p>
              <div class="project__media" v-if="plugin.media">
                <figure v-for="media in plugin.media">
                  <img v-img :src="media.src" :alt="media.caption" style="max-width: 200px;" />
                  <figcaption>{{ media.caption }}</figcaption>
                </figure>
              </div>

              <div class="project__links">
                <a :href="plugin.links.github" class="project__source" v-if="plugin.links.github">
                  <GithubIcon />
                  <span>View source on GitHub</span>
                </a>
                <a :href="plugin.links.wordpress" class="project__source" v-if="plugin.links.wordpress">
                  <WordpressIcon />
                  <span>View plugin on WordPress</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="plugin">
          <h2 class="h-text-icon">
            <jQueryIcon />
            <span>jQuery</span>
          </h2>
          <div class="project-wrapper">
            <div class="project" v-for="plugin in plugins.jquery">
              <h3 class="project__heading"><a :href="plugin.links.demo" target="_blank">{{ plugin.name }}</a></h3>
              <p>{{ plugin.description }}</p>
              <div class="project__media" v-if="plugin.media">
                <figure v-for="media in plugin.media">
                  <img v-img :src="media.src" :alt="media.caption" style="max-width: 200px;" />
                  <figcaption>{{ media.caption }}</figcaption>
                </figure>
              </div>
              <div class="project__links">
                <a :href="plugin.links.github" class="project__source" v-if="plugin.links.github">
                  <GithubIcon />
                  <span>View source on GitHub</span>
                </a>
                <a :href="plugin.links.demo" class="project__source" v-if="plugin.links.demo">
                  <ShareIcon />
                  <span>View plugin demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WordpressIcon from '../../assets/svg/wordpress.svg';
import GithubIcon from '../../assets/svg/github.svg';
import ShareIcon from '../../assets/svg/share.svg';
import jQueryIcon from '../../assets/svg/jquery.svg';
import Hero from '../Hero';

export default {
  name: 'Plugins',
  data: function() {
    return {
      plugins: {
        wordpress: [
          {
            name: "Featured Image Notes",
            description: "Sometimes you might need to provide image guidelines to your clients who are using the Featured Image meta box. This plugin will allow you to specify different notes for each custom post type that supports Post Thumbnails.",
            links: {
              github: "https://github.com/drewrawitz/wp-featured-image-notes",
              wordpress: "https://wordpress.org/plugins/featured-image-notes/",
            },
            media: [
              {
                src: require("../../assets/plugins/featured-image-notes1.png"),
                caption: "Plugin settings screen in the admin",
              },
              {
                src: require("../../assets/plugins/featured-image-notes2.png"),
                caption: "Featured Image Notes in action on a post",
              },
            ],
          },
        ],
        jquery: [
          {
            name: "jQuery Fixed Header",
            description: "A jQuery Plugin to fix a header to the top of the window and pad down the content to the height of the bar. This will work on responsive websites where the height of the header may change.",
            links: {
              github: "https://github.com/drewrawitz/jquery-fixed-header",
              demo: "http://drewrawitz.github.io/demo/jquery-fixed-header/",
            },
            media: [
              {
                src: require("../../assets/plugins/jquery-fixed-header1.jpg"),
                caption: "Demo page",
              },
            ],
          },
          {
            name: "jQuery Floating Form Label",
            description: "A jQuery Plugin to turn an input placeholder into a floated form label when selected or filled out.",
            links: {
              github: "https://github.com/drewrawitz/jQuery-Floating-Form-Label",
              demo: "http://drewrawitz.github.io/demo/jquery-floating-form-label/",
            },
            media: [
              {
                src: require("../../assets/plugins/floating-form-labels1.jpg"),
                caption: "Demo page",
              },
              {
                src: require("../../assets/plugins/floating-form-labels2.jpg"),
                caption: "Floating labels",
              },
            ],
          },
        ],
      },
    }
  },
  components: {
    Hero,
    WordpressIcon,
    GithubIcon,
    jQueryIcon,
    ShareIcon,
  },
};
</script>

<style scoped>
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
    margin-top: 20px;

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

  .plugins-wrapper {
    > *:not(:last-child) {
      margin-bottom: 30px;
      padding-bottom: 30px;
      border-bottom: 1px dashed #ccc;
    }
  }

  .project-wrapper {
    > *:not(:last-child) {
      margin-bottom: 15px;
      padding-bottom: 15px;
    }
  }
</style>
