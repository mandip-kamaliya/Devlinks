
interface LinkCardprops{
    href:string;
    title:string;
}

const LinkCard  = ({href,title}:LinkCardprops)=>{
    return (       
                 <a href={href} target="_blank"
      rel="noopener noreferrer"
      className="mb-4 flex w-full max-w-xl items-center justify-center rounded-md border border-zinc-700 bg-zinc-800 p-4 transition-transform hover:scale-105">
                 <h2 title={title} className="text-lg font-semibold">{title}</h2>
                 </a> 
    )
}

export default LinkCard;