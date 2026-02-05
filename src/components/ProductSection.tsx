 import productMain from "@/assets/product-kacang-lorjuk.png";
 import productPouch1 from "@/assets/product-pouch-1.jpg";
 import productPouch2 from "@/assets/product-pouch-2.jpg";
 
 const products = [
   {
     id: 1,
     name: "Kacang Lorjuk Kemasan Karton",
     description: "Kemasan premium dengan plastik vakum di dalam dus karton",
     weight: "100 gram",
     price: "Rp 25.000",
     image: productPouch1,
   },
   {
     id: 2,
     name: "Kacang Lorjuk Kemasan Pouch",
     description: "Kemasan praktis resealable pouch untuk konsumsi sehari-hari",
     weight: "60 gram",
     price: "Rp 17.500",
     image: productPouch2,
   },
 ];
 
 export const ProductSection = () => {
   return (
     <section id="produk" className="section-padding bg-muted">
       <div className="container-narrow mx-auto">
         {/* Header */}
         <div className="text-center mb-16">
           <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
             Produk Unggulan
           </span>
           <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
             Kacang <span className="text-secondary">Lorjuk</span>
           </h2>
           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
             Kacang Goreng dengan Kerang Bambu Asli Pamekasan
           </p>
         </div>
 
         {/* Main Product Feature */}
         <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
           <div className="relative">
             <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-secondary/20 rounded-3xl blur-3xl opacity-50" />
             <img
               src={productMain}
               alt="Kacang Lorjuk Basaraya"
               className="relative rounded-2xl shadow-elevated w-full"
             />
           </div>
           <div>
             <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
               Perpaduan Sempurna
             </h3>
             <p className="text-muted-foreground text-lg mb-6">
               Kacang Lorjuk Basaraya merupakan salah satu produk unggulan kami, 
               perpaduan kacang tanah pilihan dan kerang bambu asli Pamekasan (Lorjuk), 
               yang ukurannya lebih kecil, tinggi protein, dan memiliki rasa lebih gurih.
             </p>
             <div className="bg-card rounded-xl p-6 shadow-card">
               <h4 className="font-semibold text-foreground mb-3">Komposisi:</h4>
               <p className="text-muted-foreground">
                 Kacang Tanah, Kerang Bambu, Bawang Putih, Garam
               </p>
               <div className="mt-4 pt-4 border-t border-border">
                 <p className="text-sm text-muted-foreground">
                   <strong className="text-secondary">Alergen:</strong> Mengandung kacang dan kerang
                 </p>
               </div>
             </div>
           </div>
         </div>
 
         {/* Product Cards */}
         <div className="grid md:grid-cols-2 gap-8">
           {products.map((product) => (
             <div
               key={product.id}
               className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300"
             >
               <div className="aspect-square overflow-hidden">
                 <img
                   src={product.image}
                   alt={product.name}
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                 />
               </div>
               <div className="p-6">
                 <h3 className="font-display text-xl font-bold text-foreground mb-2">
                   {product.name}
                 </h3>
                 <p className="text-muted-foreground mb-4">{product.description}</p>
                 <div className="flex items-center justify-between">
                   <span className="text-sm text-muted-foreground">Berat: {product.weight}</span>
                   <span className="text-lg font-bold text-primary">{product.price}</span>
                 </div>
               </div>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 };