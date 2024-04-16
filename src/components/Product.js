import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import { motion } from "framer-motion";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { id, image, category, title, price } = product;

  // Framer Motion animations
  const cardVariants = {
    hover: {
      translateY: "-0.5rem",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="border border-[#e4e4e4] mb-4 relative overflow-hidden group transition h-full flex flex-col"
      whileHover="hover"
      variants={cardVariants}
    >
      <div className="w-full h-[300px] flex justify-center items-center">
        <div className="w-[200px] mx-auto flex justify-center items-center">
          <img
            className="max-h-[160px] group-hover:scale-110 transition duration-300"
            src={image}
            alt=""
          />
        </div>
      </div>

      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <div className="tex-sm capitalize text-gray-500 mb-1">{category}</div>
          <Link to={`/product/${id}`}>
            <motion.h2
              className="font-semibold mb-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {title}
            </motion.h2>
          </Link>
          <h2 className="font-semibbold">$ {price}</h2>
        </div>

        <div className="mt-4 flex justify-between items-center" variants={buttonVariants}>
          <button
            onClick={() => addToCart(product, id)}
            className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition-colors duration-300 flex-grow mr-2"
          >
            Add to Cart
          </button>
          <Link
            to={`/product/${id}`}
            className="text-primary hover:text-primary-focus hover:bg-gray-300 hover:rounded-3xl transition-colors items-center duration-300 flex-grow flex justify-center"
          >
            <BsEyeFill className="text-2xl" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Product;