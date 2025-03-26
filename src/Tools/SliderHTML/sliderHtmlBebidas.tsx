import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://i.ibb.co/nqLKdN2w/morsngo2.webp",
  "https://i.ibb.co/mF1m8MpH/graviola2.webp",
  "https://i.ibb.co/1tTLR4tt/coco2.webp",
  "https://i.ibb.co/rRt7vg0h/ameixa2.webp",
];

export default function SliderHtmlBebidas() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      style={{ height: "45rem", width: "25rem" }}
      className="flex items-center justify-center 
     m-auto max-md:w-48 max-md:h-48 overflow-hidden relative "
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={images[currentIndex]}
          src={images[currentIndex]}
          alt="Bebida"
          className="absolute w-full h-full object-contain"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>
    </div>
  );
}
