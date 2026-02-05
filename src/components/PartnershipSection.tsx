 import { Users, MapPin, Truck, Building2 } from "lucide-react";
 
 const partnerships = [
   {
     icon: Users,
     title: "Kemitraan Produk UMKM",
     highlight: "200+",
     highlightLabel: "UMKM",
     items: ["Membina UMKM lokal", "2500+ Item Produk", "Pemberdayaan ekonomi lokal"],
     color: "primary",
   },
   {
     icon: MapPin,
     title: "Kerjasama B2G",
     highlight: "Destinasi",
     highlightLabel: "Pariwisata",
     items: ["Wisata Mangrove Lembung", "Kab. Pamekasan", "Promosi wisata Madura"],
     color: "accent",
   },
   {
     icon: Building2,
     title: "Kerjasama B2B Swasta",
     highlight: "Mitra",
     highlightLabel: "Bisnis",
     items: [
       "PT. Marinal Indoprima",
       "PT. GITA Snack",
       "INDOMARET",
       "Mandala Travel & Transport",
     ],
     color: "secondary",
   },
 ];
 
 export const PartnershipSection = () => {
   return (
    <section id="kemitraan" className="section-padding bg-background">
       <div className="container-narrow mx-auto">
         <div className="text-center mb-16">
           <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
             Kemitraan Strategis
           </span>
           <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
             Jaringan <span className="text-primary">Kemitraan</span>
           </h2>
           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
             Bekerjasama dengan berbagai pihak untuk memajukan UMKM dan produk khas Madura
           </p>
         </div>
 
         <div className="grid md:grid-cols-3 gap-8">
           {partnerships.map((partner, index) => (
             <div
               key={index}
               className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 text-center"
             >
               <div
                 className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                   partner.color === "primary"
                     ? "bg-primary/10"
                     : partner.color === "secondary"
                     ? "bg-secondary/10"
                     : "bg-accent/10"
                 }`}
               >
                 <partner.icon
                   className={`w-8 h-8 ${
                     partner.color === "primary"
                       ? "text-primary"
                       : partner.color === "secondary"
                       ? "text-secondary"
                       : "text-accent"
                   }`}
                 />
               </div>
               <h3 className="font-display text-xl font-bold text-foreground mb-2">
                 {partner.title}
               </h3>
               <div className="mb-4">
                 <span
                   className={`text-3xl font-bold ${
                     partner.color === "primary"
                       ? "text-primary"
                       : partner.color === "secondary"
                       ? "text-secondary"
                       : "text-accent"
                   }`}
                 >
                   {partner.highlight}
                 </span>
                 <span className="text-muted-foreground ml-2">{partner.highlightLabel}</span>
               </div>
               <ul className="space-y-2 text-sm text-muted-foreground">
                 {partner.items.map((item, i) => (
                   <li key={i}>• {item}</li>
                 ))}
               </ul>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 };