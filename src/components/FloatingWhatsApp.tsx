 import { MessageCircle } from "lucide-react";
 
 export const FloatingWhatsApp = () => {
   return (
     <a
       href="https://wa.me/628121704640?text=Halo, saya tertarik dengan produk Basaraya"
       target="_blank"
       rel="noopener noreferrer"
       className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
       aria-label="Chat via WhatsApp"
     >
       <div className="flex items-center justify-center w-14 h-14">
         <MessageCircle className="w-7 h-7" />
       </div>
       <span className="pr-5 font-medium text-sm hidden sm:group-hover:inline-block whitespace-nowrap">
         Chat WhatsApp
       </span>
     </a>
   );
 };