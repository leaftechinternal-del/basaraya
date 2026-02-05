 import { Award, Shield, BadgeCheck } from "lucide-react";
 import sertifikatPirt from "@/assets/sertifikat-pirt.png";
 import sertifikatHalal from "@/assets/sertifikat-halal.png";
 
 const certifications = [
   {
     icon: Shield,
     title: "P-IRT",
     number: "8113528040285-30",
     description:
       "Produk kami mematuhi standar keamanan pangan, kebersihan, dan kualitas yang ditetapkan untuk didistribusikan di pasar Indonesia.",
     image: sertifikatPirt,
   },
   {
     icon: Award,
     title: "Halal MUI",
     number: "ID35410025453320825",
     description:
       "Produk kami telah bersertifikat Halal dan cocok untuk konsumen Muslim, memenuhi aturan dan etika yang ketat.",
     image: sertifikatHalal,
   },
   {
     icon: BadgeCheck,
     title: "Trademark (HKI)",
     number: "IDM001042076",
     description:
       "Merek Basaraya telah terdaftar resmi di Direktorat Jenderal Kekayaan Intelektual (DJKI) Indonesia.",
     image: null,
   },
 ];
 
 export const CertificationSection = () => {
   return (
     <section id="sertifikasi" className="section-padding bg-background">
       <div className="container-narrow mx-auto">
         <div className="text-center mb-16">
           <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
             Legalitas & Sertifikasi
           </span>
           <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
             Produk <span className="text-primary">Tersertifikasi</span>
           </h2>
           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
             Kami memastikan semua produk memenuhi standar keamanan dan kualitas tertinggi
           </p>
         </div>
 
         <div className="grid md:grid-cols-3 gap-8">
           {certifications.map((cert, index) => (
             <div
               key={index}
               className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 text-center"
             >
               <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                 <cert.icon className="w-8 h-8 text-primary" />
               </div>
               <h3 className="font-display text-xl font-bold text-foreground mb-2">
                 {cert.title}
               </h3>
               <p className="text-sm text-primary font-mono mb-4">{cert.number}</p>
               <p className="text-muted-foreground text-sm">{cert.description}</p>
               {cert.image && (
                 <div className="mt-6">
                   <img
                     src={cert.image}
                     alt={cert.title}
                     className="h-16 w-auto mx-auto opacity-80"
                   />
                 </div>
               )}
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 };