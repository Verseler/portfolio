export default function ExperienceInfoCard(props) {
  return(
    <div className="text-center text-white">
      <p className="mb-1 text-3xl md:text-4xl">{props.topic}</p>
      <p className="text-gray-300">{props.time} Experience</p>
    </div>
  );
}