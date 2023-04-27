import { Header, AboutMe, Skills, Projects } from '../../components'
import './style.scss'

export default function Home() {
  return (
    <body>
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <footer class="footer">
        <div class="footer-container">
          <p>2023. Created by Lucas Colombo.</p>
        </div>
      </footer>
    </body>
  );
}
