import { ABOUT_ME_TEXT } from '../../constants'
import './style.scss'

export function AboutMe() {
  return (
    <section id="about" class="about">
      <div class="about-container">
        <h2 class="about-title">About me</h2>
        <p class="about-text">
          {ABOUT_ME_TEXT}
        </p>
        <div class="about-social">
          <a href="https://github.com/lucasclmb1" target="_blank" rel="noreferrer">
            <img src="src/images/github-icon.png" alt="github" class="icon github"></img>
          </a>
          <a href="https://www.linkedin.com/in/lucas-colombo-a4965a232/" target="_blank" rel="noreferrer">
            <img src="images/linkedin-icon.png" alt="linkedin" class="icon linkedin"></img>
          </a>
        </div>
      </div>
    </section>
  )
}