import ExperienceInfoCard from "./ExperienceInfoCard";

export default function ExperienceSection() {
  let codingExp = [
    { id: 1, topic: "HTML", time: "2 years" },
    { id: 2, topic: "CSS", time: "1 year" },
    { id: 3, topic: "Javascript", time: "6 months" },
    { id: 4, topic: "Accessibilty", time: "3 days" },
    { id: 5, topic: "React", time: "3 weeks" },
    { id: 6, topic: "Sass", time: "1 week" },
  ];

  return (
    <section>
      <div className="grid w-5/6 gap-10 py-16 m-auto border-b-2 border-white md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
        {codingExp.map((exp) => (
          <ExperienceInfoCard key={exp.id} topic={exp.topic} time={exp.time} />
        ))}
      </div>
    </section>
  );
}
