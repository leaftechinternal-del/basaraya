 import { useState, useEffect } from "react";
 import { Menu, X } from "lucide-react";
 import logo from "@/assets/logo-basaraya.png";
 
 const navLinks = [
   { href: "#tentang", label: "Tentang Kami" },
   { href: "#produk", label: "Produk" },
   { href: "#keunggulan", label: "Keunggulan" },
   { href: "#sertifikasi", label: "Sertifikasi" },
  { href: "#kemitraan", label: "Kemitraan" },
   { href: "#pemesanan", label: "Pemesanan" },
   { href: "#kontak", label: "Kontak" },
 ];
 
 export const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);
 
   useEffect(() => {
     const handleScroll = () => {
       setScrolled(window.scrollY > 50);
     };
     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);
 
   return (
     <nav
       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
         scrolled
             ? "bg-background shadow-md py-2"
           : "bg-transparent py-4"
       }`}
     >
       <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex items-center justify-between">
           <a href="#" className="flex items-center gap-2">
             <img src={logo} alt="Basaraya" className="h-12 w-auto" />
           </a>
 
           {/* Desktop Navigation */}
           <div className="hidden lg:flex items-center gap-8">
             {navLinks.map((link) => (
               <a
                 key={link.href}
                 href={link.href}
                   className={`text-sm font-medium transition-colors ${
                     scrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
                 }`}
               >
                 {link.label}
               </a>
             ))}
           </div>
 
           {/* Mobile Menu Button */}
           <button
             onClick={() => setIsOpen(!isOpen)}
               className={`lg:hidden p-2 rounded-lg transition-colors ${
                 scrolled ? "hover:bg-muted text-foreground" : "text-white hover:bg-white/10"
               }`}
             aria-label="Toggle menu"
           >
             {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
           </button>
         </div>
 
         {/* Mobile Navigation */}
         {isOpen && (
           <div className="lg:hidden mt-4 pb-4 border-t border-border/50 animate-fade-in">
             <div className="flex flex-col gap-2 pt-4">
               {navLinks.map((link) => (
                 <a
                   key={link.href}
                   href={link.href}
                   onClick={() => setIsOpen(false)}
                   className="px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                 >
                   {link.label}
                 </a>
               ))}
             </div>
           </div>
         )}
       </div>
     </nav>
   );
 };