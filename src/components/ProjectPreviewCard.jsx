export default function ProjectPreviewCard(props) {
  return(
    <div>
      <div className="h-3/5">
        <img className="object-cover w-full h-full" src={props.src} />
      </div>
      <div className="py-3">
        <h2 className="text-xl">{props.name}</h2>
        <div className="flex gap-4 py-1 font-normal text-gray-300">
          {props.languages.map(lang => <p>{lang}</p>)}
        </div>
        <div className="flex gap-7">
          <a className="py-2 text-base tracking-wider text-center border-b-2 border-green-400 cursor-pointer" src="">VIEW PROJECTS</a>
          <a className="py-2 text-base tracking-wider text-center border-b-2 border-green-400 cursor-pointer" src="">VIEW CODE</a>
        </div>
      </div>
    </div>
  );
  }
  
