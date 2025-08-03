import Image from 'next/image';
import LinkCard from './components/LinkCard';

export default function Home() {

  const Links = [
    {href:"http://github.com/mandip-kamaliya" , title:"Github" },
    {href:"https://x.com/mandip_twtt/" , title:"Twitter"},
    {href:"https://www.linkedin.com/in/mandip-kamaliya-cte-gecbvn-ce-267929248/" , title:"linkedin"}
  ]
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
       {/* Profile Section */}
<div className="flex w-full flex-col items-center">
  <Image
    src="https://picsum.photos/200" // Placeholder image
    alt="Profile Picture"
    width={96} // in pixels
    height={96} // in pixels
    className="rounded-full"
  />
  <h1 className="mt-4 text-2xl font-bold">Mandip Kamaliya</h1>
  <p className="mt-2 text-center text-zinc-400">
   Smart contracts and Web Apps
  </p>
   {Links.map((link)=>(
        <LinkCard key={link.href} href={link.href} title={link.title}></LinkCard>
      ))}
</div>

     
      </div>
    </main>
  );
}