import Header from "@/components/Header";
import Container from "@/components/ui/Container";
import { HeroSubHeadline, HeroImage, HeroHeadline } from "@/components/Hero";
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
            <HeroHeadline>
              Hello I'am <Bold extra>Verseler kerr. </Bold>
              Aspiring <Bold extra>Web Developer</Bold>
            </HeroHeadline>
            <HeroSubHeadline>
              I'm passionate about learning and building responsive web
              application while continuously improving my skills. I am eager to
              learn, grow as a developer, and contribute to meaningful projects.
            </HeroSubHeadline>
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
              passion for web development. I specialize in React/Laravel and
              have been exploring ways to build clean, responsive, and
              user-friendly web applications. My portfolio reflects my journey
              of learning and creating, showcasing projects that highlight my
              growing skills and dedication to improve as a developer.
            </P>
            <P dark>
              When I'm not coding, I enjoy reading manhwa and manga, as well as
              watching anime and films. I also love playing card games such as
              Legends of Runeterra and Hearthstone.
            </P>
            <P dark>
              My goal is to continue learning, grow as a developer, and
              contribute to meaningful projects. I'm currently seeking
              opportunities where I can learn, improve my skills, gain hands-on
              experience, and collaborate with a team.
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
            <p>(+63)-952-485-6149</p>
            <p>handuman.verselerkerr@gmail.com</p>
          </div>
        </Container>
      </footer>
    </>
  );
}
