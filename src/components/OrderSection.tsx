 import { Package, Truck, CreditCard, Clock } from "lucide-react";
 
 const orderInfo = [
   {
     icon: Package,
     title: "Dimensi Box",
     value: "35 x 25 x 25 cm",
   },
   {
     icon: Truck,
     title: "Incoterms",
     value: "EXW (Ex-Works)",
   },
   {
     icon: CreditCard,
     title: "Pembayaran",
     value: "Transfer Bank",
   },
   {
     icon: Clock,
     title: "Masa Simpan",
     value: "12 Bulan",
   },
 ];
 
 const pricingData = [
   {
     variant: "Kemasan Karton",
     perUnit: "Rp 25.000",
     perBox: "Rp 500.000",
     qty: "20 pcs/box",
     weight: "3.750 gr",
   },
   {
     variant: "Kemasan Pouch",
     perUnit: "Rp 17.500",
     perBox: "Rp 875.000",
     qty: "50 pcs/box",
     weight: "2.750 gr",
   },
 ];
 
 export const OrderSection = () => {
   return (
     <section id="pemesanan" className="section-padding bg-muted">
       <div className="container-narrow mx-auto">
         <div className="text-center mb-16">
           <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
             Informasi Pemesanan
           </span>
           <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
             Pesan <span className="text-primary">Sekarang</span>
           </h2>
           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
             Tidak ada minimum order! Hubungi kami untuk informasi lebih lanjut
           </p>
         </div>
 
         {/* Quick Info Cards */}
         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
           {orderInfo.map((info, index) => (
             <div
               key={index}
               className="bg-card rounded-xl p-6 text-center shadow-card"
             >
               <info.icon className="w-8 h-8 text-primary mx-auto mb-3" />
               <p className="text-sm text-muted-foreground mb-1">{info.title}</p>
               <p className="font-semibold text-foreground">{info.value}</p>
             </div>
           ))}
         </div>
 
         {/* Pricing Table */}
         <div className="bg-card rounded-2xl shadow-elevated overflow-hidden">
           <div className="p-6 bg-primary text-primary-foreground">
             <h3 className="font-display text-xl font-bold text-center">
               Daftar Harga Kacang Lorjuk
             </h3>
           </div>
           <div className="overflow-x-auto">
             <table className="w-full">
               <thead className="bg-muted">
                 <tr>
                   <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                     Varian
                   </th>
                   <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">
                     Harga Satuan
                   </th>
                   <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">
                     Jumlah/Box
                   </th>
                   <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">
                     Berat Box
                   </th>
                   <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">
                     Harga/Box
                   </th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-border">
                 {pricingData.map((item, index) => (
                   <tr key={index} className="hover:bg-muted/50 transition-colors">
                     <td className="px-6 py-4 font-medium text-foreground">
                       {item.variant}
                     </td>
                     <td className="px-6 py-4 text-center text-muted-foreground">
                       {item.perUnit}
                     </td>
                     <td className="px-6 py-4 text-center text-muted-foreground">
                       {item.qty}
                     </td>
                     <td className="px-6 py-4 text-center text-muted-foreground">
                       {item.weight}
                     </td>
                     <td className="px-6 py-4 text-center font-bold text-primary">
                       {item.perBox}
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
           <div className="p-6 bg-muted/50 border-t border-border">
             <p className="text-sm text-muted-foreground text-center">
               * Harga belum termasuk biaya pengiriman. Pembayaran lunas sebelum pengiriman.
             </p>
           </div>
         </div>
       </div>
     </section>
   );
 };