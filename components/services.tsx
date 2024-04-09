import Image from 'next/image'
import Service01 from '@/public/images/topics/500x300_1082725-english.webp'
import Service02 from '@/public/images/topics/Cover--Inspiring-Web-Design-Concepts-with-3D-Graphics-1.webp'
import Service03 from '@/public/images/topics/Music-Theory-Basics-for-Beginners-1024x576.jpg.webp'
import Service04 from '@/public/images/topics/ai.webp'
import Service05 from '@/public/images/topics/be-projects-for-civil-engineering.webp'
import Service06 from '@/public/images/topics/blockchain.webp'
import Service07 from '@/public/images/topics/cooking-therapy-hero.jpeg.webp'
import Service08 from '@/public/images/topics/data-science.webp'
import Service09 from '@/public/images/topics/marketing.webp'
import Service10 from '@/public/images/topics/math.webp'
import Service11 from '@/public/images/topics/maxresdefault.jpg'
import Service12 from '@/public/images/topics/ux-vs-ui.webp'
import Service13 from '@/public/images/topics/web design.jpeg'
import Service14 from '@/public/images/topics/web3.webp'
import Service15 from '@/public/images/topics/write.webp'

export default function Services() {
  return (
    <section className="bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="relative">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h2 className="h2 font-cabinet-grotesk text-gray-100">Decentralized Autonomous Universities with the mission of teaching anyone with curiosity</h2>
            </div>

            {/* Grid */}
            <div className="max-w-2xl mx-auto grid gap-4 sm:gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 lg:max-w-none items-start">
              {/* Item #1 */}
              <div className="h-full flex flex-col">
                {/* Image */}
                <div className="mb-4">
                  <a className="block group overflow-hidden" href="#0">
                    <Image
                      className="w-full aspect-[101/64] object-cover group-hover:scale-105 transition duration-700 ease-out"
                      src={Service01}
                      width="202"
                      height="128"
                      alt="Item 01"
                    />
                  </a>
                </div>
                <div className="grow text-center">
                  <a className="font-cabinet-grotesk font-bold text-gray-100 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                    English
                  </a>
                </div>
              </div>
              {/* Item #2 */}
              <div className="h-full flex flex-col">
                {/* Image */}
                <div className="mb-4">
                  <a className="block group overflow-hidden" href="#0">
                    <Image
                      className="w-full aspect-[101/64] object-cover group-hover:scale-105 transition duration-700 ease-out"
                      src={Service02}
                      width="202"
                      height="128"
                      alt="Item 02"
                    />
                  </a>
                </div>
                <div className="grow text-center">
                  <a className="font-cabinet-grotesk font-bold text-gray-100 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                    Graphic Design
                  </a>
                </div>
              </div>
              {/* Item #3 */}
              <div className="h-full flex flex-col">
                {/* Image */}
                <div className="mb-4">
                  <a className="block group overflow-hidden" href="#0">
                    <Image
                      className="w-full aspect-[101/64] object-cover group-hover:scale-105 transition duration-700 ease-out"
                      src={Service03}
                      width="202"
                      height="128"
                      alt="Item 03"
                    />
                  </a>
                </div>
                <div className="grow text-center">
                  <a className="font-cabinet-grotesk font-bold text-gray-100 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                    Music Theory
                  </a>
                </div>
              </div>
              {/* Item #4 */}
              <div className="h-full flex flex-col">
                {/* Image */}
                <div className="mb-4">
                  <a className="block group overflow-hidden" href="#0">
                    <Image
                      className="w-full aspect-[101/64] object-cover group-hover:scale-105 transition duration-700 ease-out"
                      src={Service04}
                      width="202"
                      height="128"
                      alt="Item 04"
                    />
                  </a>
                </div>
                <div className="grow text-center">
                  <a className="font-cabinet-grotesk font-bold text-gray-100 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                    AI
                  </a>
                </div>
              </div>
              {/* Item #5 */}
              <div className="h-full flex flex-col">
                {/* Image */}
                <div className="mb-4">
                  <a className="block group overflow-hidden" href="#0">
                    <Image
                      className="w-full aspect-[101/64] object-cover group-hover:scale-105 transition duration-700 ease-out"
                      src={Service05}
                      width="202"
                      height="128"
                      alt="Item 05"
                    />
                  </a>
                </div>
                <div className="grow text-center">
                  <a className="font-cabinet-grotesk font-bold text-gray-100 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                    Civil Engineering
                  </a>
                </div>
              </div>
              {/* Item #6 */}
              <div className="h-full flex flex-col">
                {/* Image */}
                <div className="mb-4">
                  <a className="block group overflow-hidden" href="#0">
                    <Image
                      className="w-full aspect-[101/64] object-cover group-hover:scale-105 transition duration-700 ease-out"
                      src={Service06}
                      width="202"
                      height="128"
                      alt="Item 06"
                    />
                  </a>
                </div>
                <div className="grow text-center">
                  <a className="font-cabinet-grotesk font-bold text-gray-100 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                    Blockchain
                  </a>
                </div>
              </div>
              {/* Item #7 */}
              <div className="h-full flex flex-col">
                {/* Image */}
                <div className="mb-4">
                  <a className="block group overflow-hidden" href="#0">
                    <Image
                      className="w-full aspect-[101/64] object-cover group-hover:scale-105 transition duration-700 ease-out"
                      src={Service07}
                      width="202"
                      height="128"
                      alt="Item 07"
                    />
                  </a>
                </div>
                <div className="grow text-center">
                  <a className="font-cabinet-grotesk font-bold text-gray-100 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                    Cooking
                  </a>
                </div>
              </div>
              {/* Item #8 */}
              <div className="h-full flex flex-col">
                {/* Image */}
                <div className="mb-4">
                  <a className="block group overflow-hidden" href="#0">
                    <Image
                      className="w-full aspect-[101/64] object-cover group-hover:scale-105 transition duration-700 ease-out"
                      src={Service08}
                      width="202"
                      height="128"
                      alt="Item 08"
                    />
                  </a>
                </div>
                <div className="grow text-center">
                  <a className="font-cabinet-grotesk font-bold text-gray-100 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                    Data Science
                  </a>
                </div>
              </div>
              {/* Item #9 */}
              <div className="h-full flex flex-col">
                {/* Image */}
                <div className="mb-4">
                  <a className="block group overflow-hidden" href="#0">
                    <Image
                      className="w-full aspect-[101/64] object-cover group-hover:scale-105 transition duration-700 ease-out"
                      src={Service09}
                      width="202"
                      height="128"
                      alt="Item 09"
                    />
                  </a>
                </div>
                <div className="grow text-center">
                  <a className="font-cabinet-grotesk font-bold text-gray-100 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                    Marketing
                  </a>
                </div>
              </div>
              {/* Item #10 */}
              <div className="h-full flex flex-col">
                {/* Image */}
                <div className="mb-4">
                  <a className="block group overflow-hidden" href="#0">
                    <Image
                      className="w-full aspect-[101/64] object-cover group-hover:scale-105 transition duration-700 ease-out"
                      src={Service10}
                      width="202"
                      height="128"
                      alt="Item 10"
                    />
                  </a>
                </div>
                <div className="grow text-center">
                  <a className="font-cabinet-grotesk font-bold text-gray-100 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                    Math
                  </a>
                </div>
              </div>
              {/* Item #11 */}
              <div className="h-full flex flex-col">
                {/* Image */}
                <div className="mb-4">
                  <a className="block group overflow-hidden" href="#0">
                    <Image
                      className="w-full aspect-[101/64] object-cover group-hover:scale-105 transition duration-700 ease-out"
                      src={Service11}
                      width="202"
                      height="128"
                      alt="Item 11"
                    />
                  </a>
                </div>
                <div className="grow text-center">
                  <a className="font-cabinet-grotesk font-bold text-gray-100 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                    Drawing
                  </a>
                </div>
              </div>
              {/* Item #12 */}
              <div className="h-full flex flex-col">
                {/* Image */}
                <div className="mb-4">
                  <a className="block group overflow-hidden" href="#0">
                    <Image
                      className="w-full aspect-[101/64] object-cover group-hover:scale-105 transition duration-700 ease-out"
                      src={Service12}
                      width="202"
                      height="128"
                      alt="Item 12"
                    />
                  </a>
                </div>
                <div className="grow text-center">
                  <a className="font-cabinet-grotesk font-bold text-gray-100 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                    UX UI
                  </a>
                </div>
              </div>
              {/* Item #13 */}
              <div className="h-full flex flex-col">
                {/* Image */}
                <div className="mb-4">
                  <a className="block group overflow-hidden" href="#0">
                    <Image
                      className="w-full aspect-[101/64] object-cover group-hover:scale-105 transition duration-700 ease-out"
                      src={Service13}
                      width="202"
                      height="128"
                      alt="Item 13"
                    />
                  </a>
                </div>
                <div className="grow text-center">
                  <a className="font-cabinet-grotesk font-bold text-gray-100 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                    Web Design
                  </a>
                </div>
              </div>
              {/* Item #14 */}
              <div className="h-full flex flex-col">
                {/* Image */}
                <div className="mb-4">
                  <a className="block group overflow-hidden" href="#0">
                    <Image
                      className="w-full aspect-[101/64] object-cover group-hover:scale-105 transition duration-700 ease-out"
                      src={Service14}
                      width="202"
                      height="128"
                      alt="Item 14"
                    />
                  </a>
                </div>
                <div className="grow text-center">
                  <a className="font-cabinet-grotesk font-bold text-gray-100 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                    Web 3.0
                  </a>
                </div>
              </div>
              {/* Item #15 */}
              <div className="h-full flex flex-col">
                {/* Image */}
                <div className="mb-4">
                  <a className="block group overflow-hidden" href="#0">
                    <Image
                      className="w-full aspect-[101/64] object-cover group-hover:scale-105 transition duration-700 ease-out"
                      src={Service15}
                      width="202"
                      height="128"
                      alt="Item 15"
                    />
                  </a>
                </div>
                <div className="grow text-center">
                  <a className="font-cabinet-grotesk font-bold text-gray-100 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">
                    Writing
                  </a>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  )
}