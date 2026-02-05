 import { Award, Shield, BadgeCheck } from "lucide-react";
 
const mainCerts = [
   {
     icon: Shield,
    title: "BPOM & PIRT",
    number: "Ijin Edar Resmi",
    description: "Produk telah terdaftar BPOM RI MD dan memiliki SPPIRT sesuai standar keamanan pangan.",
   },
   {
     icon: Award,
    title: "Sertifikat Halal",
    number: "MUI Certified",
    description: "Produk telah bersertifikat Halal MUI, aman dikonsumsi untuk umat Muslim.",
   },
   {
     icon: BadgeCheck,
     title: "SNI & Legalitas",
     number: "NIB, SKP, IP CPPOB",
    description: "Tersertifikasi SNI, memiliki NIB, SKP, IP CPPOB, dan Trademark HKI terdaftar.",
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
 
         <div className="grid md:grid-cols-3 gap-6">
          {mainCerts.map((cert, index) => (
             <div
               key={index}
               className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 text-center"
             >
               <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                 <cert.icon className="w-7 h-7 text-primary" />
               </div>
               <h3 className="font-display text-lg font-bold text-foreground mb-1">
                 {cert.title}
               </h3>
               <p className="text-xs text-primary font-medium mb-3">{cert.number}</p>
               <p className="text-muted-foreground text-sm leading-relaxed">{cert.description}</p>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 };