 import storeFront from "@/assets/store-front.png";
 
 export const AboutSection = () => {
   return (
     <section id="tentang" className="section-padding bg-background">
       <div className="container-narrow mx-auto">
         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
           {/* Image */}
           <div className="order-2 lg:order-1">
             <div className="relative">
               <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
               <img
                 src={storeFront}
                 alt="Toko Basaraya"
                 className="relative rounded-2xl shadow-elevated w-full object-cover"
               />
             </div>
           </div>
 
           {/* Content */}
           <div className="order-1 lg:order-2">
             <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
               Tentang Kami
             </span>
             <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
               Cita Rasa Autentik
               <span className="text-primary"> Madura</span>
             </h2>
             <div className="space-y-4 text-muted-foreground text-lg">
               <p>
                 Berdiri sejak tahun <strong className="text-foreground">2017</strong>, Basaraya 
                 dibangun dari semangat untuk menyediakan camilan khas Madura 
                 yang lezat, sehat, serta berkualitas.
               </p>
               <p>
                 Kami percaya bahwa dengan menyajikan produk yang memberi kesan 
                 dan kepuasan bagi siapa saja yang berkunjung ke Madura, Basaraya 
                 bisa menjadi <strong className="text-foreground">destinasi kuliner kebanggaan Madura</strong>.
               </p>
             </div>
 
             {/* Stats */}
             <div className="grid grid-cols-3 gap-6 mt-10">
               <div className="text-center">
                 <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">2017</div>
                 <div className="text-sm text-muted-foreground">Berdiri</div>
               </div>
               <div className="text-center">
                 <div className="text-3xl sm:text-4xl font-bold text-secondary mb-1">100%</div>
                 <div className="text-sm text-muted-foreground">Lokal</div>
               </div>
               <div className="text-center">
                 <div className="text-3xl sm:text-4xl font-bold text-accent mb-1">Halal</div>
                 <div className="text-sm text-muted-foreground">Tersertifikasi</div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
   );
 };