 import { useState } from "react";
 import { motion, AnimatePresence } from "framer-motion";
 import { X, ChevronLeft, ChevronRight } from "lucide-react";
 
 import gallery1 from "@/assets/gallery-1.png";
 import gallery2 from "@/assets/gallery-2.png";
 import gallery3 from "@/assets/gallery-3.png";
 import gallery4 from "@/assets/gallery-4.png";
 import gallery5 from "@/assets/gallery-5.png";
 
 const galleryImages = [
   { src: gallery1, alt: "Rak produk camilan Madura" },
   { src: gallery2, alt: "Interior toko Basaraya" },
   { src: gallery3, alt: "Koleksi produk oleh-oleh" },
   { src: gallery4, alt: "Suasana toko dengan pengunjung" },
   { src: gallery5, alt: "Produk kemasan gift box Basaraya" },
 ];
 
 export const GallerySection = () => {
   const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
 
   const openLightbox = (index: number) => setSelectedIndex(index);
   const closeLightbox = () => setSelectedIndex(null);
 
   const goNext = () => {
     if (selectedIndex !== null) {
       setSelectedIndex((selectedIndex + 1) % galleryImages.length);
     }
   };
 
   const goPrev = () => {
     if (selectedIndex !== null) {
       setSelectedIndex(
         (selectedIndex - 1 + galleryImages.length) % galleryImages.length
       );
     }
   };
 
   return (
     <section id="galeri" className="section-padding bg-muted/30">
       <div className="container-narrow mx-auto">
         <div className="text-center mb-12">
           <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
             Galeri
           </span>
           <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
             Suasana Toko <span className="text-primary">Basaraya</span>
           </h2>
         </div>
 
         {/* Gallery Grid */}
         <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
           {galleryImages.map((image, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                 index === 0 ? "md:col-span-2 md:row-span-2" : ""
               }`}
               onClick={() => openLightbox(index)}
             >
               <img
                 src={image.src}
                 alt={image.alt}
                 className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                   index === 0 ? "h-64 md:h-full" : "h-48 md:h-56"
                 }`}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
             </motion.div>
           ))}
         </div>
 
         {/* Lightbox */}
         <AnimatePresence>
           {selectedIndex !== null && (
             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
               onClick={closeLightbox}
             >
               <button
                 onClick={closeLightbox}
                 className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
               >
                 <X className="w-8 h-8" />
               </button>
 
               <button
                 onClick={(e) => {
                   e.stopPropagation();
                   goPrev();
                 }}
                 className="absolute left-4 text-white hover:text-primary transition-colors"
               >
                 <ChevronLeft className="w-10 h-10" />
               </button>
 
               <motion.img
                 key={selectedIndex}
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.9 }}
                 src={galleryImages[selectedIndex].src}
                 alt={galleryImages[selectedIndex].alt}
                 className="max-w-full max-h-[85vh] object-contain rounded-lg"
                 onClick={(e) => e.stopPropagation()}
               />
 
               <button
                 onClick={(e) => {
                   e.stopPropagation();
                   goNext();
                 }}
                 className="absolute right-4 text-white hover:text-primary transition-colors"
               >
                 <ChevronRight className="w-10 h-10" />
               </button>
 
               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
                 {selectedIndex + 1} / {galleryImages.length}
               </div>
             </motion.div>
           )}
         </AnimatePresence>
       </div>
     </section>
   );
 };