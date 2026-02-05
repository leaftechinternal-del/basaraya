 import { Leaf, ShieldCheck, HandHeart, Sparkles } from "lucide-react";
 
 const usps = [
   {
     icon: Leaf,
     title: "Bahan Lokal",
     description: "Dibuat dengan bahan-bahan lokal pilihan dari Madura",
   },
   {
     icon: ShieldCheck,
     title: "Tanpa Aditif",
     description: "Tanpa pengawet tambahan dan bahan kimia berbahaya",
   },
   {
     icon: HandHeart,
     title: "Buatan Tangan",
     description: "Diproduksi dengan keahlian tradisional turun-temurun",
   },
   {
     icon: Sparkles,
     title: "Bersertifikat",
     description: "Tersertifikasi P-IRT dan Halal MUI",
   },
 ];
 
 export const USPSection = () => {
   return (
     <section id="keunggulan" className="section-padding bg-gradient-hero text-primary-foreground">
       <div className="container-narrow mx-auto">
         <div className="text-center mb-16">
           <span className="inline-block px-4 py-1.5 bg-primary-foreground/20 text-primary-foreground text-sm font-medium rounded-full mb-4">
             Mengapa Basaraya
           </span>
           <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
             Keunggulan <span className="text-accent">Kami</span>
           </h2>
           <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
             Kami berkomitmen untuk memberikan produk terbaik dengan kualitas terjamin
           </p>
         </div>
 
         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
           {usps.map((usp, index) => (
             <div
               key={index}
               className="group text-center p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 transition-all duration-300"
             >
               <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-6 group-hover:scale-110 transition-transform">
                 <usp.icon className="w-8 h-8 text-accent-foreground" />
               </div>
               <h3 className="font-display text-xl font-bold mb-3">{usp.title}</h3>
               <p className="text-primary-foreground/80">{usp.description}</p>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 };