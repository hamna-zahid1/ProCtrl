import { FaArrowRight } from "react-icons/fa6"; // or 'fa' if using older version
// import controllerImage from "/public/controller.png"; // adjust if it's in a different path
import controllerImage from "@/assets/images/Prod.png";
import { NavLink } from "react-router-dom";



const ProductHighlightSection = () => {
  return (
    <section className="mx-auto my-10 px-4">
      <div className="flex flex-col-reverse lg:flex-row items-center bg-dark-body rounded-[30px] p-8 lg:p-14 gap-8">
        {/* Left: Text */}
        <div className="flex-1 text-white">
          <h3 className="text-3xl md:text-2xl lg:text-3xl font-orbitron font-bold leading-snug mb-4">
            Quantum Vanguard<br />Gaming Controller
          </h3>
          <p className="text-gray-400 mb-6 max-w-lg">
            Quantum – Suggests advanced, cutting-edge technology powering the controller.
            It conveys a sense of innovation and high-performance.
          </p>
          <div className="flex items-center gap-4">
            <p className="md:text-3xl sm:text-xl text-pink-500 font-bold">$85.99</p>
            <NavLink to="/products">
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 md:px-6 md:py-2  rounded-full font-semibold flex items-center gap-2 shadow-md hover:scale-105 transition ">
              Buy Now <FaArrowRight className="text-sm" />
            </button>
            </NavLink>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={controllerImage}
            alt="Gaming Controller"
            className="w-[700px] img-responsive h-auto rounded-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductHighlightSection;
