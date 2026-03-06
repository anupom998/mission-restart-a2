import { Linkedin, Mail, X, Facebook } from 'lucide-react';
// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white">
//       <div className="container mx-auto px-4 flex flex-col gap-8">
//         {/* content block*/}
//         <div className="flex flex-col lg:flex-row justify-between items-center text-center mt-12 ">
//           <div className="w-full lg:w-1/5 flex flex-col gap-4 mb-6 lg:mb-0 lg:text-start">
//             <h4 className="heading">CS - Ticket System</h4>
//             <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vel id, tempore odit molestiae omnis itaque dolor! Vero nemo animi, vel autem delectus similique? Repudiandae fugiat eveniet voluptates fugit ullam.</p>
//           </div>
//           <div className="w-full lg:w-1/5 flex flex-col gap-4 mb-6 lg:mb-0">
//             <h4 className="text-xl font-medium">Company</h4>
//             <ul>
//               <li className="mb-2">
//                 <a href="/" className="hover:underline">
//                   About Us
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a href="/about" className="hover:underline">
//                   Our Mission
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a href="/blog" className="hover:underline">
//                   Contact Saled
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="w-full lg:w-1/5 flex flex-col gap-4 mb-6 lg:mb-0">
//             <h4 className="text-lg font-semibold mb-4">Company</h4>
//             <ul>
//               <li className="mb-2">
//                 <a href="/" className="hover:underline">
//                   About Us
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a href="/about" className="hover:underline">
//                   Our Mission
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a href="/blog" className="hover:underline">
//                   Contact Saled
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="w-full lg:w-1/5 flex flex-col gap-4 mb-6 lg:mb-0">
//             <h4 className="text-lg font-semibold mb-4">Services</h4>
//             <ul>
//               <li className="mb-2">
//                 <a href="/" className="hover:underline">
//                   Products & Services
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a href="/about" className="hover:underline">
//                   Customer Stories
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a href="/blog" className="hover:underline">
//                   Download Apps
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="w-full lg:w-1/5 flex flex-col gap-4 mb-6 md:mb-0">
//             <h4 className="text-lg font-semibold mb-4">Social Links</h4>
//             <div className="flex flex-col space-x-4 justify-center items-center">
//               <a
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-blue-500"
//               >
//                 <X className='rounded-full bg-white text-black h-6 w-6'/> @CS - Ticket System
//               </a>
//               <a
//                 href="https://twitter.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-blue-400"
//               >
//                 <Linkedin />
//               </a>
//               <a
//                 href="https://instagram.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-pink-500"
//               >
//                 <Facebook />
//               </a>
//               <a
//                 href="https://linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-blue-700"
//               >
//                 <Mail />
//               </a>
//             </div>
//           </div>
//         </div>
//         {/* copyright */}
//         <div className=" text-center border-t py-8">
//           <p>
//             &copy; {new Date().getFullYear()} CS - Ticket System. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

const Footer = () => {
    return(
        <footer className='bg-black text-[#A1A1AA]'>
          <div className='container px-4 lg:px-0 lg:mx-auto pt-12'> 
            <div>
                {/* text content block*/}
                <div className='grid grid-cols-1 lg:grid-cols-5 gap-8 px-12 lg:px-0 text-center lg:text-start'>
                    <div className='justify-self-center lg:justify-self-start'>
                        <h2 className='heading text-white mb-4'>CS - Ticket System</h2>
                        <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa ratione voluptates provident delectus aperiam nam dolorum! Maiores ullam, nulla sed aliquam pariatur cumque laudantium doloribus. Neque quisquam nemo quae maiores?</p>
                    </div>
                    <div className='justify-self-center'>
                        <h3 className='font-medium text-xl leading-7 text-white mb-4'>Company</h3>
                        <ul className='flex flex-col gap-4'>
                            <li>
                                <a href="#" className='link hover:underline'>About Us</a>
                            </li>
                            <li>
                                <a href="#" className='link hover:underline'>Our Mission</a>
                            </li>
                            <li>
                                <a href="#" className='link hover:underline'>Contact Saled</a>
                            </li>
                        </ul>
                    </div>
                    <div className='justify-self-center'>
                        <h3 className='font-medium text-xl leading-7 text-white mb-4'>Services</h3>
                        <ul className='flex flex-col gap-4'>
                            <li>
                                <a href="#" className='link hover:underline'>Products & Services</a>
                            </li>
                            <li>
                                <a href="#" className='link hover:underline'>Customer Stories</a>
                            </li>
                            <li>
                                <a href="#" className='link hover:underline'>Downlaod Apps</a>
                            </li>
                        </ul>
                    </div>
                    <div className='justify-self-center'>
                        <h3 className='font-medium text-xl leading-7 text-white mb-4'>Information</h3>
                        <ul className='flex flex-col gap-4'>
                            <li>
                                <a href="#" className='link hover:underline'>Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className='link hover:underline'>Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="#" className='link hover:underline'>Join Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className='justify-self-center lg:justify-self-end'>
                        <h3 className='font-medium text-xl leading-7 text-white mb-4'>Social Links</h3>
                        <ul className='flex flex-col gap-4'>
                            <li>
                                <a href="#" className='link hover:underline flex gap-2'>
                                    <X className='bg-white rounded-full font-bold text-black h-6 w-6 p-1'/>
                                    @CS - Ticket System
                                </a>
                            </li>
                            <li>
                                <a href="#" className='link hover:underline flex gap-2'>
                                    <Linkedin className='bg-white rounded-full font-bold text-black h-6 w-6 p-1'/>
                                    @CS - Ticket System
                                </a>
                            </li>
                            <li>
                                <a href="#" className='link hover:underline flex gap-2'>
                                    <Facebook className='bg-white rounded-full font-bold text-black h-6 w-6 p-1'/>
                                    @CS - Ticket System
                                </a>
                            </li>
                            <li>
                                <a href="#" className='link hover:underline flex gap-2'>
                                    <Mail className='bg-white rounded-full font-bold text-black h-6 w-6 p-1'/>
                                    @CS - Ticket System
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* copyright */}
                <div className='py-4 border-t mt-6'>
                    <p className='text-lg leading-6 text-center'>
                        &copy; {new Date().getFullYear()} CS - Ticket System. All rights reserved.
                    </p>
                </div>
            </div>
          </div>  
        </footer>
    )
}

export default Footer;