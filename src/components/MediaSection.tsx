 import { Newspaper, ExternalLink } from "lucide-react";
 import mediaImage from "@/assets/media-jawapos.png";
 
 export const MediaSection = () => {
   return (
     <section className="section-padding bg-muted">
       <div className="container-narrow mx-auto">
         <div className="text-center mb-16">
           <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
             Liputan Media
           </span>
           <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
             Basaraya di <span className="text-secondary">Media</span>
           </h2>
           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
             Kisah sukses Basaraya dalam memberdayakan UMKM Madura
           </p>
         </div>
 
         <div className="grid lg:grid-cols-2 gap-12 items-center">
           {/* Media Image */}
           <div className="relative">
             <div className="absolute -inset-4 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl blur-2xl opacity-50" />
             <img
               src={mediaImage}
               alt="Liputan Jawa Pos - Basaraya"
               className="relative rounded-2xl shadow-elevated w-full"
             />
           </div>
 
           {/* Content */}
           <div>
             <div className="flex items-center gap-3 mb-4">
               <Newspaper className="w-6 h-6 text-secondary" />
               <span className="text-sm font-medium text-muted-foreground">
                 Jawa Pos / Radar Madura
               </span>
             </div>
             <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
               Berhasil Berdayakan Pelaku UMKM
             </h3>
             <p className="text-muted-foreground mb-6">
               Owner Basaraya, <strong className="text-foreground">Sjarifah Dewi</strong>, 
               berhasil memberdayakan pelaku usaha mikro, kecil, dan menengah (UMKM) 
               dengan omzet ratusan juta rupiah. Berawal dari usaha bahan pokok, 
               kini telah meluncurkan tiga produk unggulan: Bandeng Presto, 
               Kacang Lorjuk, dan Lorjuk Goreng.
             </p>
 
             <div className="bg-card rounded-xl p-6 shadow-card mb-6">
               <div className="grid grid-cols-2 gap-4 text-center">
                 <div>
                   <div className="text-2xl font-bold text-primary">150+</div>
                   <div className="text-sm text-muted-foreground">UMKM Bergabung</div>
                 </div>
                 <div>
                   <div className="text-2xl font-bold text-secondary">2000+</div>
                   <div className="text-sm text-muted-foreground">Total Produk</div>
                 </div>
               </div>
             </div>
 
             <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
               "Saat ini, di Toko Basaraya alhamdulillah ada 150 lebih UMKM yang bergabung. 
               Sehingga, bisa menjadi pusat oleh-oleh di Pamekasan."
               <footer className="mt-2 text-sm font-medium text-foreground not-italic">
                 — Sjarifah Dewi, Owner Basaraya
               </footer>
             </blockquote>
           </div>
         </div>
       </div>
     </section>
   );
 };