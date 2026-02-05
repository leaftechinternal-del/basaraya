 import { Target, Compass } from "lucide-react";
 
 const visions = [
   "Menjadi kebanggaan Madura dan diridhoi oleh Allah SWT",
   "Mampu menjadi destinasi wisata yang membanggakan Madura dengan menyajikan produk khas Madura yang memberi kesan dan pengalaman bagi siapa saja yang berkunjung ke Madura",
 ];
 
 const missions = [
   "Menyediakan produk produk terbaik Madura",
   "Membina UMKM yang bergabung agar naik kelas",
   "Mengedepankan riset dan mengembangkan pelayanan",
   "Mengikuti perkembangan teknologi untuk lebih meningkatkan kepercayaan konsumen",
 ];
 
 export const VisionMissionSection = () => {
   return (
     <section className="section-padding bg-muted">
       <div className="container-narrow mx-auto">
         <div className="text-center mb-16">
           <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
             Visi & Misi
           </span>
           <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
             Komitmen <span className="text-secondary">Kami</span>
           </h2>
         </div>
 
         <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
           {/* Visi */}
           <div className="bg-card rounded-2xl p-8 shadow-card">
             <div className="flex items-center gap-4 mb-6">
               <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                 <Target className="w-7 h-7 text-primary-foreground" />
               </div>
               <h3 className="font-display text-2xl font-bold text-secondary">Visi</h3>
             </div>
             <ul className="space-y-4">
               {visions.map((vision, index) => (
                 <li key={index} className="flex gap-3">
                   <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/10 text-secondary text-sm font-bold flex items-center justify-center mt-0.5">
                     {index + 1}
                   </span>
                   <p className="text-muted-foreground">{vision}</p>
                 </li>
               ))}
             </ul>
           </div>
 
           {/* Misi */}
           <div className="bg-card rounded-2xl p-8 shadow-card">
             <div className="flex items-center gap-4 mb-6">
               <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
                 <Compass className="w-7 h-7 text-secondary-foreground" />
               </div>
               <h3 className="font-display text-2xl font-bold text-secondary">Misi</h3>
             </div>
             <ul className="space-y-4">
               {missions.map((mission, index) => (
                 <li key={index} className="flex gap-3">
                   <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center mt-0.5">
                     {index + 1}
                   </span>
                   <p className="text-muted-foreground">{mission}</p>
                 </li>
               ))}
             </ul>
           </div>
         </div>
       </div>
     </section>
   );
 };