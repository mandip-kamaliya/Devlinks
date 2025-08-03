import Image from 'next/image';

export default function Home() {
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
</div>
      </div>
    </main>
  );
}