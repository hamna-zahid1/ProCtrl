import useTitle from "@/hooks/useTitle.js";
import { FaPaintBrush, FaCartPlus, FaGamepad } from "react-icons/fa";
import Image1 from '@/assets/images/imgi_11_IMG1.jpg';
import Image2 from '@/assets/images/imgi_12_IMG2.jpg';
import Image3 from '@/assets/images/imgi_21_IMG3.jpg';
import Image4 from '@/assets/images/imgi_22_IMG4.jpg';
import VideoThumb1 from '@/assets/images/imgi_14_VID5.jpg';
import VideoThumb2 from '@/assets/images/imgi_15_VID1.jpg';
import VideoThumb3 from '@/assets/images/imgi_17_VID3.jpg';
import Team1 from '@/assets/images/imgi_69_Testi1.jpg';
import Team2 from '@/assets/images/imgi_78_Testi4.jpg';
import Team3 from '@/assets/images/imgi_81_Testi5.jpg';
import Team4 from '@/assets/images/imgi_24_Testi2-.jpg';
import Store1 from '@/assets/images/imgi_28_Store1.jpg';
import Store2 from '@/assets/images/imgi_29_Store2.jpg';
import Store3 from '@/assets/images/imgi_30_Store3.jpg';

export default function About() {
  useTitle("ProCtrl | About Us");
  return (
    <div className="font-poppins text-gray-900 dark:text-white bg-white dark:bg-dark-primary">
      {/* Hero Section */}
      <section
        className="w-full h-[400px] bg-cover bg-center flex items-center justify-center relative dark:bg-dark-body position-absolute"
        
      >
        <div className="  px-6 py-3 rounded">
          <h1 className="text-4xl font-bold text-center font-orbitron">About Us</h1>
          <p className="text-center text-sm mt-2">Home / About Us</p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="max-w-custom mx-auto py-20 px-4">
        <h2 className="text-center text-xl text-primary uppercase tracking-widest mb-4">Learn more about us</h2>
        <h3 className="text-center text-3xl md:text-4xl font-semibold leading-snug mb-12 font-orbitron">
          Our Mission? We Bring Performance And Precision Into Every Gamer’s Setup
        </h3>
        <div className="flex flex-col md:flex-row gap-4">
          <div
            className="group relative rounded-xl overflow-hidden w-full md:w-[65%] h-[400px]"
          >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundImage: `url(${Image1})` }}
           />
          </div>
          <div
            className="group relative rounded-xl overflow-hidden  w-full md:w-[35%] h-[400px]"
          >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundImage: `url(${Image2})` }}
          />
        </div>
      </div>
   
        <p className="mt-8 text-center text-gray-700 dark:text-gray-300 max-w-4xl mx-auto text-lg">
          We’re passionate about providing cutting-edge gaming gear that enhances your performance, style, and comfort. From pro-grade peripherals to immersive lighting setups, we believe every gamer deserves gear that gives them the winning edge.
        </p>
      </section>

      {/* Video Gallery */}
      <section className="bg-light dark:bg-dark-secondary py-20">
        <h2 className="text-center text-3xl font-semibold mb-12 font-orbitron">Videos From Our Clients</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-custom mx-auto px-4">
          {[VideoThumb1, VideoThumb2, VideoThumb3].map((video, i) => (
            <div key={i} className="relative group overflow-hidden rounded-lg h-[350px]">
              <img src={video} alt={`Client video ${i}`} className="object-cover w-full h-full" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
                <button className="bg-white text-black px-4 py-2 rounded">Play Video</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 max-w-custom mx-auto px-4 text-center mt-16">
        <div className="w-full md:w-[70%] mx-auto">
        <h2 className="text-3xl font-semibold mb-4 font-orbitron">We Give You The Power To Create Spaces That Are Just Right For You</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {[
            {
              title: "Choose A Theme",
              icon: <FaPaintBrush className="text-primary text-3xl hover:scale-110 transform transition duration-300" />,
              description: "Customize your layout and showcase what you love with ease."
            },
            {
              title: "Add Products",
              icon: <FaCartPlus className="text-primary text-3xl hover:scale-110 transform transition duration-300" />,
              description: "From mechanical keyboards to ultra-fast mice, shop from our wide selection."
            },
            {
              title: "Start Gaming",
              icon: <FaGamepad className="text-primary text-3xl hover:scale-110 transform transition duration-300" />,
              description: "Unbox, plug in, and dominate. Your new gaming gear is ready to level up your play."
            }
          ].map(({ title, icon, description }, i) => (
            <div key={i} className="p-6 bg-white dark:bg-dark-secondary rounded-xl shadow text-center">
              <div className="mb-3 flex justify-center">{icon}</div>
              <h3 className="font-semibold text-xl mb-4">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-custom mx-auto py-20 px-4">
          {/* First row - Why Choose Us full width */}
          <div className="w-full mb-12">
            <h3 className="text-2xl font-semibold mb-4 font-orbitron">Why Choose Us?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              We know gamers, because we are gamers. That's why we only stock gear that we've tried, tested, and trusted in real play. Our commitment to quality and community is what sets us apart. With fast shipping, 24/7 customer support, and regular product drops, we're always here to gear you up.
            </p>
          </div>
          
          {/* Second row - 50/50 split */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Left column - Image + Text */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <img src={Image3} alt="Why Us" className="rounded-lg object-cover h-[300px] w-full" />
              <div>
                <h3 className="text-2xl font-semibold mb-4 font-orbitron">Quality Gaming Gear</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We test every product to ensure it meets our high standards for performance and durability.
                </p>
              </div>
            </div>
            
            {/* Right column - Text + Image */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <div>
                <h3 className="text-2xl font-semibold mb-4 font-orbitron">Trusted Online Shopping</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Our store is fully secure and optimized for a smooth shopping experience. Gear up with confidence knowing your data and purchases are always protected.
                </p>
              </div>
              <img src={Image4} alt="Trusted Shopping" className="rounded-lg object-cover h-[300px] w-full" />
            </div>
          </div>
      </section>

      {/* Team Section */}
      <section className="bg-light dark:bg-dark-secondary py-20 px-4">
        <h2 className="text-center text-3xl font-bold mb-12 font-orbitron">The Passionate Team Bringing Our Designs To Life</h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-custom mx-auto">
          {[Team1, Team2, Team3, Team4].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Team member ${i + 1}`}
              className="rounded-full w-[120px] h-[120px] object-cover shadow-lg"
            />
          ))}
        </div>
      </section>

      {/* Store Locations */}
      <section className="py-20 px-4 max-w-custom mx-auto">
        <h2 className="text-center text-2xl font-semibold mb-12 font-orbitron">Our Locations - Store System</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Los Angeles", address: "5728 Camino Del Rey, LA 90211", img: Store1 },
            { name: "New York", address: "903 Lexington Ave, Manhattan, NY", img: Store2 },
            { name: "California", address: "3123 Harper's Blvd, Fresno, CA", img: Store3 }
          ].map(({ name, address, img }, i) => (
            <div key={i} className="bg-white dark:bg-dark-primary rounded shadow overflow-hidden">
              <div className="relative group w-full h-50 overflow-hidden rounded-md">
                  <img src={img} alt={name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  </div>
              </div>

              <div className="p-4 text-center">
                <h4 className="font-semibold text-lg">{name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{address}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
