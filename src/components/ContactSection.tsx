import { MapPin, Phone, Mail, Instagram, Facebook, Globe, Video } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 export const ContactSection = () => {
   return (
     <section id="kontak" className="section-padding bg-background">
       <div className="container-narrow mx-auto">
         <div className="text-center mb-16">
           <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
             Hubungi Kami
           </span>
           <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
             Informasi <span className="text-primary">Kontak</span>
           </h2>
           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
             Siap melayani pertanyaan dan pemesanan Anda
           </p>
         </div>
 
         <div className="grid lg:grid-cols-2 gap-12">
           {/* Contact Info */}
           <div className="space-y-8">
             {/* Address */}
             <div className="flex gap-4">
               <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                 <MapPin className="w-6 h-6 text-primary" />
               </div>
               <div>
                 <h3 className="font-semibold text-foreground mb-1">Alamat</h3>
                 <p className="text-muted-foreground">
                   Jalan Basar 41, RT 003/RW 004,<br />
                   Kelurahan Bugih, Kec. Pamekasan,<br />
                   Kab. Pamekasan, Jawa Timur, 69316
                 </p>
               </div>
             </div>
 
             {/* Phone */}
             <div className="flex gap-4">
               <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                 <Phone className="w-6 h-6 text-secondary" />
               </div>
               <div>
                 <h3 className="font-semibold text-foreground mb-1">Telepon & WhatsApp</h3>
                 <p className="text-muted-foreground">Sjarifah Dewi</p>
                 <a 
                  href="https://wa.me/628121704640" 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-primary hover:underline font-medium"
                 >
                  0812-1704-640
                 </a>
               </div>
             </div>
 
             {/* Email */}
             <div className="flex gap-4">
               <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                 <Mail className="w-6 h-6 text-accent" />
               </div>
               <div>
                 <h3 className="font-semibold text-foreground mb-1">Email</h3>
                 <a 
                   href="mailto:basarayagroup@gmail.com" 
                   className="text-primary hover:underline"
                 >
                   basarayagroup@gmail.com
                 </a>
               </div>
             </div>
 
             {/* Website */}
             <div className="flex gap-4">
               <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                 <Globe className="w-6 h-6 text-primary" />
               </div>
               <div>
                 <h3 className="font-semibold text-foreground mb-1">Website</h3>
                 <a 
                   href="https://www.basaraya.com" 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-primary hover:underline"
                 >
                   www.basaraya.com
                 </a>
               </div>
             </div>
 
             {/* Social Media */}
             <div className="pt-4">
               <h3 className="font-semibold text-foreground mb-4">Ikuti Kami</h3>
               <div className="flex gap-4">
                 <a
                   href="https://instagram.com/basarayagroup"
                   target="_blank"
                   rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
                  title="@basarayagroup"
                 >
                   <Instagram className="w-6 h-6" />
                 </a>
                <a
                  href="https://instagram.com/katalog.basaraya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
                  title="@katalog.basaraya"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                 <a
                   href="https://facebook.com/basarayagroup"
                   target="_blank"
                   rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[hsl(221,44%,41%)] flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
                  title="Basaraya Ikan & Camilan"
                 >
                   <Facebook className="w-6 h-6" />
                 </a>
                <a
                  href="https://tiktok.com/@tokobasaraya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center text-background hover:scale-110 transition-transform"
                  title="@tokobasaraya"
                >
                  <Video className="w-6 h-6" />
                </a>
               </div>
             </div>
           </div>
 
           {/* CTA Card */}
           <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12 text-primary-foreground">
             <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4">
               Tertarik Dengan Produk Kami?
             </h3>
             <p className="text-primary-foreground/80 text-lg mb-8">
               Hubungi kami sekarang untuk pemesanan atau pertanyaan lebih lanjut. 
               Tim kami siap membantu Anda!
             </p>
             <div className="space-y-4">
               <Button
                 size="lg"
                 className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full text-lg py-6"
                 asChild
               >
                 <a 
                  href="https://wa.me/628121704640?text=Halo, saya tertarik dengan produk Kacang Lorjuk Basaraya" 
                   target="_blank"
                   rel="noopener noreferrer"
                 >
                   <Phone className="w-5 h-5 mr-2" />
                   Hubungi via WhatsApp
                 </a>
               </Button>
               <Button
                 size="lg"
                   className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full text-lg py-6"
                 asChild
               >
                 <a href="mailto:basarayagroup@gmail.com">
                   <Mail className="w-5 h-5 mr-2" />
                   Kirim Email
                 </a>
               </Button>
             </div>
           </div>
         </div>
       </div>
     </section>
   );
 };