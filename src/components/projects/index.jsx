import './style.scss'

export function Projects() {

  return (
    <section id="projects" class="projects">
      <div class="projects-container">
        <h2 class="projects-title">Projects</h2>
        <div class="project">
          <img
            src="https://picsum.photos/300/200"
            alt="Project 1"
            class="project-image"
          />
          <h3 class="project-title">Project 1</h3>
          <p class="project-description">
            lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
        <div class="project">
          <img
            src="https://picsum.photos/300/200"
            alt="Project 2"
            class="project-image"
          />
          <h3 class="project-title">Project 2</h3>
          <p class="project-description">
            lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
        <div class="project">
          <img
            src="https://picsum.photos/300/200"
            alt="Project 3"
            class="project-image"
          />
          <h3 class="project-title">Project 3</h3>
          <p class="project-description">
            lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
  )
}