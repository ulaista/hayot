// // components/PortfolioSection.tsx
// 'use client';

// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import Image from 'next/image';
// import { works } from '~/works';
// import { ScrollArea, ScrollBar } from '~/components/ui/scroll-area';

// export default function PortfolioSection() {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <motion.section
//       ref={ref}
//       id="portfolio"
//       className="min-h-screen w-full bg-black bg-cover bg-center bg-no-repeat"
//       initial={{ opacity: 0, y: 50 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.7 }}
//     >
//       <main className="flex min-h-screen flex-col items-center justify-center text-white ">
//         <div className="mt-36 flex flex-col items-center p-4 md:w-1/2">
//           <div className="w-full xl:w-8/12">
//             <h1 className="text-3xl antialiased">Portfolio</h1>
//             <h2 className="mt-7 text-lg antialiased">
//               In my portfolio you will find a variety of projects <br />
//               and achievements that reflect my professional growth <br />
//               and interests.
//               <br />
//               <br />
//               Discover the world of possibilities that we create together.
//             </h2>
//           </div>
//         </div>
//         <div className="flex items-center justify-center rounded-xl p-1 md:w-1/2">
//           <ScrollArea className="w-[40rem] whitespace-nowrap rounded-md border">
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={inView ? { opacity: 1 } : {}}
//               transition={{ delay: 0.2, duration: 0.7 }}
//               className="flex w-max space-x-4 p-4"
//             >
//               {works.map((artwork) => (
//                 <figure key={artwork.artist} className="shrink-0">
//                   <div className="overflow-hidden rounded-md">
//                     <Image
//                       src={artwork.art}
//                       alt={`Photo by ${artwork.artist}`}
//                       className="aspect-[3/4] h-fit w-fit object-cover"
//                       width={320}
//                       height={400}
//                     />
//                   </div>
//                 </figure>
//               ))}
//             </motion.div>
//             <ScrollBar orientation="horizontal" />
//           </ScrollArea>
//         </div>
//       </main>
//     </motion.section>
//   );
// }
