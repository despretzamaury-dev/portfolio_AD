import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black font-sans">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.jpg"
          alt="Amaury Despretz Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-2 text-center text-white">
        <h1 className="text-5xl font-bold tracking-widest uppercase md:text-7xl drop-shadow-xl sm:text-6xl">
          AMAURY DESPRETZ
        </h1>
        <p className="text-xl font-light tracking-[0.3em] md:text-3xl drop-shadow-lg text-gray-200">
          Portfolio
        </p>
      </div>
    </div>
  );
}
