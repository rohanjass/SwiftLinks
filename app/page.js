"use client"
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white">
      <section className="grid grid-cols-2 h-[90vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="text-3xl font-bold text-black">
            SwiftLinks- the fastest and securest link shortener
          </p>
          <p className="px-16 text-black">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, rem
            delectus. Officia fugiat itaque ipsam ullam molestias repudiandae,
            eveniet eius temporibus natus doloribus ex impedit et sint rem,
            exercitationem quaerat dignissimos consectetur? Porro similique
            molestias iste doloremque pariatur deserunt quisquam adipisci ad
            nemo, excepturi voluptatibus sunt ab, aut et sit assumenda est dolor
            in dicta rerum.
          </p>

          <div className="flex gap-4">
            <Link href="/shorten">
              <button className="bg-red-950 text-white rounded-lg shadow-lg px-3 py-1 font-bold">
                Try Now
              </button>
            </Link>
            <Link href="/github">
              <button className="bg-emerald-700 text-white rounded-lg shadow-lg px-3 py-1 font-bold">
                GitHub
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-start relative">
          <Image
            className="mix-blend-darken"
            alt="image not found"
            src={"/vector.png"}
            fill={true}
          ></Image>
        </div>
      </section>
    </main>
  );
}
