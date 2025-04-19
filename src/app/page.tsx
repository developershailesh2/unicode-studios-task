import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#262626" }}>
      <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#1f1f1f] to-[#2b2633] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div
            className="text-2xl font-bold "
            style={{
              fontFamily: "Orbitron",
              fontSize: "27px",
              fontWeight: "400",
            }}
          >
            tnp
          </div>

          {/* Nav Links */}
          <nav className="flex space-x-10 text-lg font-bold ">
            <a
              href="#"
              className=" text-white px-6 py-2 rounded-full hover:bg-purple-400 transition-all"
              style={{ fontSize: "20px" }}
            >
              HOME
            </a>
            <a
              href="#"
              className="hover:bg-purple-400 text-white px-6 py-2  rounded-full transition-all"
              style={{ fontSize: "20px" }}
            >
              ABOUT US
            </a>
            <a
              href="#"
              className="hover:bg-purple-400 text-white px-6 py-2  rounded-full transition-all"
              style={{ fontSize: "20px" }}
            >
              OUR WORK
            </a>
            <a
              href="#"
              className="hover:bg-purple-400 text-white px-6 py-2  rounded-full transition-all"
              style={{ fontSize: "20px" }}
            >
              CONTACT US
            </a>
          </nav>
        </div>
      </header>

      {/* image section */}
      <div className="pt-22 w-full mb-10">
        <Image
          className="w-full p-4 object-cover"
          src="/images/first.png"
          width={1390}
          height={514}
          alt="First Image"
        ></Image>
      </div>

      {/* ABOUT US Section */}
      {/* ABOUT US Section */}
      <section className="w-full text-white px-30  flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left: Heading + Button */}
        <div className="flex flex-col items-start gap-12">
          <h2
            className="text-5xl lg:text-6xl font-extrabold tracking-wide"
            style={{ fontSize: "64px", fontFamily: "Orbitron, sans-serif" }}
          >
            ABOUT US
          </h2>
          <button className="bg-purple-400 hover:bg-purple-600 text-white font-bold text-sm px-6 py-3 rounded-full shadow-md flex items-center transition duration-300">
            READ MORE
            <span className="ml-2 text-lg">↗</span>
          </button>
        </div>

        {/* Right: Description */}
        <div
          className="max-w-2xl mb-10 text-justify md:text-base font-semibold uppercase"
          style={{ fontSize: "25px" }}
        >
          <p className="py-10">
            We are team of{" "}
            <span className="font-bold">passionate storytellers</span> and{" "}
            <span className="font-bold">skilled creators</span> dedicated to
            producing exceptional commercial content. With a shared commitment
            to quality and innovation, we specialize in crafting compelling
            visuals that connect brands with their audiences.
          </p>
        </div>
      </section>

      {/* Brand Logos Strip */}
      <div className="bg-white py-6 px-6 mt-8 mb-8 shadow-md w-full flex justify-evenly items-center flex-wrap gap-6">
        <Image src="/images/espn.png" alt="ESPN" width={100} height={50} />
        <Image src="/images/nike.png" alt="Nike" width={100} height={50} />
        <Image src="/images/adidas.png" alt="Adidas" width={100} height={50} />
        <Image src="/images/nfl.png" alt="NFL" width={100} height={50} />
        <Image src="/images/tiger.png" alt="Tiger" width={100} height={50} />
        <Image src="/images/nfl1.png" alt="NFL1" width={100} height={50} />
      </div>

      <section className="px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {" "}
          {/* Set to 2 columns on larger screens */}
          <div className="relative overflow-hidden rounded-md shadow-md aspect-w-16 aspect-h-9">
            <Image
              src="/images/gym1.png"
              width={720}
              height={481}
              alt="Grid Image 1"
            />
          </div>
          <div className="relative overflow-hidden rounded-md shadow-md aspect-w-16 aspect-h-9">
            <Image
              src="/images/gym2.png"
              alt="Grid Image 2"
              width={720}
              height={481}
            />
          </div>
          <div className="relative overflow-hidden rounded-md shadow-md aspect-w-16 aspect-h-9">
            <Image
              src="/images/gym3.png"
              alt="Grid Image 3"
              width={720}
              height={481}
            />
          </div>
          <div className="relative overflow-hidden rounded-md shadow-md aspect-w-16 aspect-h-9">
            <Image
              src="/images/gym4.png"
              alt="Grid Image 4"
              width={720}
              height={481}
            />
          </div>
          <div className="relative overflow-hidden rounded-md shadow-md aspect-w-16 aspect-h-9">
            <Image
              src="/images/gym5.png"
              alt="Grid Image 5"
              width={720}
              height={481}
            />
          </div>
          <div className="relative overflow-hidden rounded-md shadow-md aspect-w-16 aspect-h-9">
            <Image
              src="/images/gym6.png"
              alt="Grid Image 6"
              width={720}
              height={481}
            />
          </div>
        </div>
      </section>

      <section className=" text-white py-16 px-10 lg:px-30">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Text Content */}
          <div className="text-left">
            <h2
              className=" font-extrabold"
              style={{ fontFamily: "Bebas Neue", fontSize: "80px" }}
            >
              OUR VISION
            </h2>
            <p className="text-justify text-2xl font-semibold">
              PARTNER WITH BRANDS SEEKING TO TRANSFORM IDEAS INTO POWERFUL
              VISUAL STORIES. WE STRIVE TO PUSH THE BOUNDARIES OF CREATIVITY,
              BLENDING ARTISTRY WITH INNOVATION TO CRAFT VIDEOS THAT CAPTIVATE,
              CONNECT, AND INSPIRE ACTION. BY DELIVERING EXCEPTIONAL QUALITY AND
              MEASURABLE IMPACT, WE AIM TO ELEVATE OUR CLIENTS BRANDS, FOSTERING
              MEANINGFUL CONNECTIONS WITH THEIR AUDIENCES AND SETTING NEW
              STANDARDS IN COMMERCIAL VIDEO PRODUCTION.
            </p>
          </div>

          {/* Image */}
          <div className="relative overflow-hidden rounded-md shadow-md aspect-w-16 aspect-h-9">
            <Image
              src="/images/vision.png"
              alt="Gym Interior"
              width={595}
              height={708}
            />
          </div>
        </div>
      </section>

      <section className="relative bg-gray-900 text-white py-24 px-10 lg:px-30 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/vision2.png" // Replace with the actual image path
            alt="Basketball Court with Person"
            layout="fill"
            objectFit="cover"
            className="opacity-60" // Adjust opacity for better text readability
          />
          <div className="absolute inset-0  opacity-40"></div>{" "}
          {/* Dark overlay for text contrast */}
        </div>
        <div className="relative max-w-4xl mx-auto text-left">
          <h2 className="text-5xl font-bold mb-8">
            LET US BRING YOUR <br />{" "}
            <span className="text-purple-400">VISION </span> TO LIFE
          </h2>
          <p className="text-lg leading-relaxed mb-8 text-justify">
            WHETHER YOURE LAUNCHING A BRAND, TELLING A POWERFUL STORY, <br /> OR
            BUILDING AWARENESS—OUR CREW IS READY TO MAKE IT UNFORGETTABLE.
            <br /> FROM CONCEPT TO CUT, WERE YOUR CREATIVE PARTNER EVERY STEP OF
            THE WAY.
          </p>
          <button
            className="bg-purple-400 hover:bg-purple-600 text-white font-bold text-lg py-4 px-8 rounded-full 
          shadow-md transition flex items-start duration-300 "
          >
            LETS TALK
            <span className="ml-2 text-xl">→</span>
          </button>
        </div>
      </section>
    </div>
  );
}
