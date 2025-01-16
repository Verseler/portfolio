type AboutMeProfileProps = {
  src: string;
};

export default function AboutMeProfile({ src }: AboutMeProfileProps) {
  return (
    <div className="relative size-80 md:size-[30rem] mx-auto border-2 border-white rounded-lg shadow-md">
      <img
        className="h-96 md:h-[33rem] absolute bottom-0.5 right-5 md:right-14"
        alt="My profile picture"
        src={src}
      />
    </div>
  );
}
