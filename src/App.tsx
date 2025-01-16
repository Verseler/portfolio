import Header from "@/components/Header";
import Container from "@/components/ui/Container";
import { HeroDescription, HeroImage, HeroMessage } from "@/components/Hero";
import { Bold, H1, P } from "@/components/Typography";
import Section from "@/components/Section";
import ProfilePic1 from "@/assets/images/profile-pic-1.png";
import ProfilePic2 from "@/assets/images/profile-pic-2.png";
import Projects from "@/components/ProjectCards";
import AppLogo from "@/components/AppLogo";
import Skills from "@/components/Skills";
import SocialButtons from "@/components/SocialButtons";
import AboutMeProfile from "@/components/AboutMeProfile";
import { data } from "@/data";

export default function App() {
  return (
    <>
      <Header />
      <Section id="hero" className="py-14 2xl:py-40">
        <Container className="md:flex gap-x-24 md:flex-row-reverse">
          <HeroImage src={ProfilePic1} />
          <div className="flex-1 max-w-xl">
            <HeroMessage>
              Hello I'am <Bold extra>Verseler kerr. </Bold>
              Aspiring <Bold extra>Frontend</Bold> <span>Developer</span>
            </HeroMessage>
            <HeroDescription>
              I'm passionate about building responsive and user-friendly
              interfaces with React while continuously improving my skills. I am
              eager to learn, grow as a developer, and contribute to meaningful
              projects."
            </HeroDescription>
            <SocialButtons socials={data.socialMedia} />
          </div>
        </Container>
      </Section>

      <Section id="skills">
        <Container className="text-center">
          <H1>
            My <Bold>Skills</Bold>
          </H1>
          <Skills skills={data.skills} />
        </Container>
      </Section>

      <Section id="about" dark>
        <Container className="flex flex-col items-center gap-6 lg:flex-row 2xl:gap-x-16">
          <div className="flex-1">
            <AboutMeProfile src={ProfilePic2} />
          </div>
          <div className="flex-1 space-y-4 text-center pe-5 lg:text-start">
            <H1>
              About <Bold>Me</Bold>
            </H1>
            <P dark>
              I am Verseler Kerr Flores Handuman, a graduating IT student with a
              passion for front-end development. I specialize in React and have
              been exploring ways to build clean, responsive, and user-friendly
              interfaces. My portfolio reflects my journey of learning and
              creating, showcasing projects that highlight my growing skills and
              dedication to improve as a developer.
            </P>
            <P dark>
              When I'm not coding, I enjoy playing card games such as legend of
              runeterra and hearstone. I also love reading manhwa and manga, as
              well as watching anime and films.
            </P>
            <P dark>
              My goal is to continue learning, grow as a developer, and
              contribute to meaningful projects. I'm currently seeking an
              internship opportunity where I can learn, improve my skills, gain
              hands-on experience, and collaborate with a team.
            </P>
          </div>
        </Container>
      </Section>

      <Section id="projects">
        <Container className="text-center">
          <H1>
            My <Bold>Projects</Bold>
          </H1>
          <Projects projects={data.projects} />
        </Container>
      </Section>

      <footer className="text-white bg-black">
        <Container className="flex flex-col items-center justify-between py-4 text-center md:py-10 md:flex-row">
          <AppLogo size="lg" />
          <div className="md:text-end">
            <p>(+63)-905-960-9327</p>
            <p>handuman.verselerkerr@gmail.com</p>
          </div>
        </Container>
      </footer>
    </>
  );
}
