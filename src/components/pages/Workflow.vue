<template>
  <div>
    <section class="page-hero page-hero--workflow">
      <div class="page-hero__overlay"></div>
      <h1>My Workflow</h1>
    </section>
    <div class="container">
      <p>My development workflow is something I've been constantly working on over the years, and it's always evolving as I discover new tips, tools, methods or applications. I'll list out everything that is typically involved in my everyday workflow, such as my desktop equipment, macOS applications, development tools, etc.</p>

      <h3>Equipment</h3>
      <div class="workflow-group">
        <ul>
          <li>I currently work on a <a href="#">15-inch Macbook Pro</a> running macOS High Sierra.</li>
          <li>I use a <a href="https://www.amazon.com/Blue-Snowball-iCE-Condenser-Microphone/dp/B014PYGTUQ/" target="_blank">Blue Snowball iCE Condenser Microphone</a> to replace the built-in Macbook microphone.</li>
          <li>Along with the microphone, I use a <a href="#" target="_blank">Aokeo Pop Filter Mask Shield</a>.</li>
          <li>I use a <a href="" target="_blank">Logitech HD Webcam C615</a> to replace the built-in Macbook webcam.</li>
          <li>I use a <a href="#" target="_blank">Corsair Gaming K70 Mechanical Keyboard</a> with Cherry MX Red switches.</li>
          <li>I use a <a href="#" target="_blank">Logitech Performance Mouse MX</a> as my wireless mouse.</li>
          <li>I typically work on two <a href="#" target="_blank">ASUS VH236H 23-Inch</a> monitors.</li>
        </ul>
        <figure>
          <img src="../../assets/workspace.jpg" alt="" style="max-width: 200px;" />
          <figcaption>My current workspace. Click to view full size.</figcaption>
        </figure>
      </div>

      <hr />

      <h3>Development</h3>
      <ul>
        <li>I use <a href="#">Atom</a> as my Text Editor, with <a href="#">Vim mode</a> installed.</li>
        <li>My terminal of choice is <a href="#">iTerm2</a>.</li>
        <li>I use <a href="#">zsh</a> as my default shell, and I recently switched to <a href="#">Prezto</a> as my zsh framework, from <a href="#">oh-my-zsh</a>.</li>
        <li>I use the <a href="https://github.com/IBM/plex" target="_blank">IBM Plex Mono</a> font for my editor and terminal.</li>
      </ul>
      <div class="workflow-logos">
        <img src="../../assets/logos/atom.png" alt="Atom" />
        <img src="../../assets/logos/iterm2.png" alt="iTerm2" />
        <img src="../../assets/logos/tmux.png" alt="Tmux" />
      </div>

      <hr />

      <h3>Desktop Apps</h3>
      <ul>
        <li>I currently work on a <a href="#">15-inch Macbook Pro</a> running macOS High Sierra.</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Workflow',
};
</script>

<style scoped>
.page-hero {
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 300px;

  h1 {
    position: relative;
    margin: 0;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
}

.page-hero__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
}

.page-hero--workflow {
  background-image: url(../../assets/bg_workflow.jpg);
}

.workflow-logos {
  display: flex;

  > *:not(:last-child) {
    margin-right: 15px;
  }

  img {
    max-height: 25px;
  }
}

.workflow-group {
  display: flex;

  ul {
    flex: 1;
  }

  figure {
    align-self: flex-start;
    text-align: center;

    img {
      outline: 2px solid #b0a2de;
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
}
</style>
