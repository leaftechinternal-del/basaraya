 import { ChevronDown } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import heroBg from "@/assets/hero-bg.jpg";
 
 export const HeroSection = () => {
   return (
     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
       {/* Background Image */}
       <div
         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
         style={{ backgroundImage: `url(${heroBg})` }}
       >
         <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
       </div>
 
       {/* Content */}
       <div className="relative z-10 container-narrow mx-auto px-4 sm:px-6 lg:px-8 text-center">
         <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
             <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm text-white text-lg sm:text-xl font-medium rounded-full mb-6 border border-white/30">
               Pusat Oleh-Oleh Madura
             </span>
         </div>
 
         <h1
             className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 opacity-0 animate-fade-in drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
           style={{ animationDelay: "0.4s" }}
         >
             Basaraya,
             <span className="block text-amber-400 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">Ikan & Camilan</span>
         </h1>
 
         <p
             className="text-lg sm:text-xl md:text-2xl text-white max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in drop-shadow-[0_1px_5px_rgba(0,0,0,0.5)]"
           style={{ animationDelay: "0.6s" }}
         >
           Camilan khas Madura yang lezat, sehat, dan berkualitas sejak 2017
         </p>
 
         <div
             className="flex justify-center items-center opacity-0 animate-fade-in"
           style={{ animationDelay: "0.8s" }}
         >
           <Button
             size="lg"
             className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-elevated transition-all hover:scale-105"
             asChild
           >
             <a href="#produk">Lihat Produk</a>
           </Button>
         </div>
       </div>
 
       {/* Scroll Indicator */}
       <a
         href="#tentang"
         className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/70 hover:text-primary-foreground transition-colors animate-bounce"
       >
         <ChevronDown className="h-8 w-8" />
       </a>
     </section>
   );
 };