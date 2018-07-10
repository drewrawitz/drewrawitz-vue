<template>
  <div>
    <Hero heading="My Workflow" bg="bg_workflow.jpg" />
    <transition name="fade" appear>
      <div class="container">
        <p class="intro">My development workflow is something I've been constantly working on over the years, and it's always evolving as I discover new tips, tools, methods or applications. I'll list out everything that is typically involved in my everyday workflow, such as my desktop equipment, macOS applications, development tools, etc.</p>

        <div class="workflow-group">
          <h2>Equipment</h2>
          <div class="workflow-group__list">
            <ul>
              <li>I currently work on a <a href="https://www.apple.com/macbook-pro/" target="_blank">15-inch Macbook Pro</a> running macOS High Sierra.</li>
              <li>I use a <a href="https://www.amazon.com/Blue-Snowball-iCE-Condenser-Microphone/dp/B014PYGTUQ/" target="_blank">Blue Snowball iCE Condenser Microphone</a> to replace the built-in Macbook microphone.</li>
              <li>Along with the microphone, I use a <a href="https://www.amazon.com/gp/product/B01N21H9WY/" target="_blank">Aokeo Pop Filter Mask Shield</a>.</li>
              <li>I use a <a href="https://www.amazon.com/Logitech-Laptop-Webcam-Design-360-Degree/dp/B004YW7WCY/" target="_blank">Logitech HD Webcam C615</a> to replace the built-in Macbook webcam.</li>
              <li>I use a <a href="https://www.amazon.com/gp/product/B00M5DUOBK" target="_blank">Corsair Gaming K70 Mechanical Keyboard</a> with Cherry MX Red switches.</li>
              <li>I use a <a href="https://www.amazon.com/Logitech-Wireless-Performance-Mouse-Large/dp/B002HWRJBM" target="_blank">Logitech Performance Mouse MX</a> as my wireless mouse.</li>
              <li>I typically work on two <a href="https://www.amazon.com/ASUS-VH236H-23-Inch-Full-HD-Monitor/dp/B002453K5G" target="_blank">ASUS VH236H 23-Inch</a> monitors.</li>
              <li>My headphones are the <a href="https://www.amazon.com/Audio-Technica-ATH-M50x-Professional-Monitor-Headphones/dp/B00HVLUR86" target="_blank">Audio-Technica ATH-M50x</a>'s.</li>
            </ul>
            <figure>
              <img v-img src="../../assets/workspace.jpg" alt="Workspace" style="max-width: 200px;" />
              <figcaption>My current workspace. Click to view full size.</figcaption>
            </figure>
          </div>
        </div>

        <div class="workflow-group">
          <h2>Development</h2>
          <ul>
            <li>I use <a href="https://atom.io/" target="_blank">Atom</a> as my Text Editor, with <a href="https://atom.io/packages/vim-mode-plus" target="_blank">Vim mode</a> installed.</li>
            <li>My terminal of choice is <a href="https://www.iterm2.com/" target="_blank">iTerm2</a>.</li>
            <li>I use <a href="http://www.zsh.org/" target="_blank">zsh</a> as my default shell, and I recently switched to <a href="https://github.com/sorin-ionescu/prezto" target="_blank">Prezto</a> as my zsh framework, from <a href="http://ohmyz.sh/" target="_blank">oh-my-zsh</a>.</li>
            <li>I use the <a href="https://github.com/IBM/plex" target="_blank">IBM Plex Mono</a> font for my editor and terminal.</li>
            <li>I use <a href="https://github.com/tmux/tmux" target="_blank">tmux</a> as a "terminal multiplexer".</li>
            <li>For testing API endpoints, I'm a big fan of <a href="https://www.getpostman.com/" target="_blank">Postman</a>.</li>
          </ul>
        </div>

        <div class="workflow-group">
          <h2>Desktop Apps</h2>
          <ul>
            <li>For my spotlight replacement, I'm a huge fan of <a href="https://www.alfredapp.com/" target="_blank">Alfred</a> with the Powerpack.</li>
            <li>I use <a href="http://mizage.com/divvy/" target="_blank">Divvy</a> as my window management tool.</li>
            <li>To clean up my menu bar, I use <a href="https://www.macbartender.com/" target="_blank">Bartender</a>.</li>
            <li>For my Calendar, I use <a href="https://flexibits.com/fantastical" target="_blank">Fantastical</a>.</li>
            <li>My to-do app of choice is <a href="https://en.todoist.com/" target="_blank">Todoist</a>.</li>
            <li>I use <a href="https://sparkmailapp.com/" target="_blank">Spark</a> for my email client.</li>
            <li>I'm a big fan of <a href="https://evernote.com/" target="_blank">Evernote</a> for note-taking.</li>
            <li>Lately, the designers I've been working with have been using <a href="https://www.sketchapp.com/" target="_blank">Sketch</a> to design in.</li>
            <li>To protect my eyes, I use <a href="https://justgetflux.com/" target="_blank">f.lux</a>.</li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Hero from '../Hero';
import AppleIcon from '../../assets/svg/apple.svg';
import CodeIcon from '../../assets/svg/code2.svg';
import DisplayIcon from '../../assets/svg/display.svg';

export default {
  name: 'Workflow',
  components: {
    Hero,
    AppleIcon,
    CodeIcon,
    DisplayIcon,
  },
};
</script>

<style scoped>
.intro {
  margin-bottom: 45px;
}

.workflow-group {
  &:not(:last-child) {
    margin-bottom: 30px;
    padding-bottom: 30px;
    border-bottom: 1px dashed #ccc;
  }

  svg {
    font-size: 80%;
  }

  ul {
    margin-bottom: 0;
  }
}

.workflow-group__list {
  display: flex;

  ul {
    flex: 1;
    margin: 0;
  }
}
</style>
