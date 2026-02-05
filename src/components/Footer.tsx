 import logo from "@/assets/logo-basaraya.png";
 
 export const Footer = () => {
   const currentYear = new Date().getFullYear();
 
   return (
     <footer className="bg-foreground text-background py-12">
       <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="flex items-center gap-4">
             <img src={logo} alt="Basaraya" className="h-12 w-auto" />
             <div>
               <p className="font-display text-lg font-bold">Basaraya</p>
               <p className="text-sm text-background/60">Ikan & Camilan</p>
             </div>
           </div>
 
           <div className="text-center md:text-right">
             <p className="text-sm text-background/60">
               © {currentYear} Basaraya. Pusat Oleh-Oleh Madura.
             </p>
             <p className="text-sm text-background/60 mt-1">
               Pamekasan, Jawa Timur, Indonesia
             </p>
           </div>
         </div>
       </div>
     </footer>
   );
 };