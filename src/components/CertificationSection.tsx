 import { Award, Shield, BadgeCheck, Building2, FileCheck, Factory, Barcode, FileText } from "lucide-react";
 
const mainCerts = [
   {
     icon: Shield,
    title: "Ijin Edar",
    number: "BPOM RI MD, SPPIRT",
    description: "Produk kami mematuhi standar keamanan pangan dan kualitas BPOM.",
   },
   {
     icon: Award,
    title: "Sertifikat Halal",
    number: "MUI Certified",
    description: "Produk telah bersertifikat Halal dan cocok untuk konsumen Muslim.",
   },
   {
     icon: BadgeCheck,
     title: "Trademark (HKI)",
     number: "IDM001042076",
    description: "Merek Basaraya terdaftar resmi di DJKI Indonesia.",
   },
 ];
 
const additionalCerts = [
   { label: "MEREK", value: "BASARAYA", icon: BadgeCheck },
   { label: "NIB", value: "8120019070095", icon: Building2 },
   { label: "SNI, SKP, IP CPPOB", value: "Tersertifikasi", icon: Factory },
   { label: "BARCODE", value: "INDOMARET, BPOM", icon: Barcode },
   { label: "Informasi Nilai Gizi", value: "Tersedia", icon: FileText },
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
          {mainCerts.map((cert, index) => (
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
             </div>
           ))}
         </div>

        {/* Additional Certifications */}
        <div className="mt-12 bg-card rounded-2xl p-8 shadow-card">
          <h3 className="font-display text-xl font-bold text-foreground text-center mb-6">
            Legalitas Lengkap
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {additionalCerts.map((cert, index) => (
              <div key={index} className="flex items-start gap-2 p-3 bg-muted rounded-lg">
                 <cert.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground">{cert.label}</p>
                  <p className="text-sm font-medium text-foreground">{cert.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
       </div>
     </section>
   );
 };