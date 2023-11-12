import ProjectPreviewCard from "./ProjectPreviewCard";

export default function ProjectSection() {
  let projectInfo = [
    {
      id: 1,
      name: "DESIGN PORTFOLIO",
      imgSrc:
        "https://res.cloudinary.com/dz209s6jk/image/upload/v1657881171/Challenges/ygneypulpefsmtf6acbn.jpg",
      lang: ["HTML", "CSS"],
    },
    {
      id: 2,
      name: "E-LEARNING LANDING PAGE",
      imgSrc:
        "https://cdn.dribbble.com/users/5195635/screenshots/16154418/media/a62107ede2387bee4c3e80988f6e6891.jpg?resize=400x0",
      lang: ["HTML", "CSS"],
    },
    {
      id: 3,
      name: "TODO WEB APP",
      imgSrc:
        "https://i.pinimg.com/originals/12/70/f0/1270f070c246bf5815760887919a73b1.png",
      lang: ["HTML", "CSS", "JAVASCRIPT"],
    },
    {
      id: 4,
      name: "ENTERTAINING WEB APP",
      imgSrc:
        "https://cdn.dribbble.com/users/5550421/screenshots/19641473/media/1f7d4d05fce1ccf4b27a681e1f36b337.jpg?resize=400x0",
      lang: ["HTML", "CSS", "JAVASCRIPT"],
    },
    {
      id: 5,
      name: "MEMORY GAME",
      imgSrc: "https://interacty.me/images/thumbnails/products/memoryGames.png",
      lang: ["HTML", "CSS", "JAVASCRIPT"],
    },
    {
      id: 6,
      name: "ART GALLERY SHOWCASE",
      imgSrc:
        "https://d1zdxptf8tk3f9.cloudfront.net/ckeditor_assets/pictures/3282/content_Collector_Screens_413.jpg",
      lang: ["HTML", "CSS", "JAVASCRIPT"],
    },
  ];

  return (
    <section className="text-white">
      <div className="w-5/6 py-20 m-auto border-b-2 border-white max-w-7xl">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-4xl">Projects</h1>
          <a
            className="py-2 text-base tracking-wider text-center border-b-2 border-green-400 cursor-pointer"
            href="#contact-section"
          >
            CONTACT ME
          </a>
        </div>

        <div className="grid gap-10 pt-10 md:grid-cols-2">
          {projectInfo.map((project) => (
            <ProjectPreviewCard
              key={project.id}
              src={project.imgSrc}
              name={project.name}
              languages={project.lang}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
