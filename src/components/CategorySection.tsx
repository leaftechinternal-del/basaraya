 import { motion } from "framer-motion";
 
 import categoryMakananRingan from "@/assets/category-makanan-ringan.png";
 import categoryBahanPokok from "@/assets/category-bahan-pokok.png";
 import categoryMakananInstan from "@/assets/category-makanan-instan.png";
 import categoryMinuman from "@/assets/category-minuman.png";
 import categoryMenuSarapan from "@/assets/category-menu-sarapan.png";
 import categoryMakananSegarBeku from "@/assets/category-makanan-segar-beku.png";
 import categoryMakananKaleng from "@/assets/category-makanan-kaleng.png";
 import categoryPembungkusKado from "@/assets/category-pembungkus-kado.png";
 import categoryRotiKue from "@/assets/category-roti-kue.png";
 
 const categories = [
   { name: "Makanan Ringan", image: categoryMakananRingan },
   { name: "Bahan Pokok", image: categoryBahanPokok },
   { name: "Makanan Instan", image: categoryMakananInstan },
   { name: "Minuman", image: categoryMinuman },
   { name: "Menu Sarapan", image: categoryMenuSarapan },
   { name: "Makanan Segar & Beku", image: categoryMakananSegarBeku },
   { name: "Makanan Kaleng", image: categoryMakananKaleng },
   { name: "Pembungkus Kado & Kemasan", image: categoryPembungkusKado },
   { name: "Roti & Kue", image: categoryRotiKue },
 ];
 
 export const CategorySection = () => {
   return (
     <section className="section-padding bg-muted/30">
       <div className="container-narrow mx-auto">
         <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
           Kategori
         </span>
         <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-10">
           Jelajahi Produk Kami
         </h2>
         
         <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-4 md:gap-6">
           {categories.map((category, index) => (
             <motion.div
               key={category.name}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.05 }}
               className="flex flex-col items-center text-center group cursor-pointer"
             >
               <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-background shadow-md overflow-hidden mb-3 group-hover:shadow-lg transition-shadow">
                 <img
                   src={category.image}
                   alt={category.name}
                   className="w-full h-full object-cover"
                 />
               </div>
               <span className="text-xs sm:text-sm font-medium text-foreground leading-tight">
                 {category.name}
               </span>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };