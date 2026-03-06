import { useState } from "react";
import vectorImg from "../assets/vector1.png"; 

export default function Banner({numberOfPendingTickets, numberOfResolvedTickets}) {

    return (
        <section>
            <div className="container mx-auto my-12">
                <div className="flex flex-col lg:flex-row gap-6 justify-between items-center text-white text-center">

                    {/* Card 1 */}
                    <div className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] rounded-lg p-12 w-full relative overflow-hidden">
                        {/* Left Background Vector */}
                        <img 
                            src={vectorImg} 
                            alt="" 
                            className="absolute left-0 top-0 h-full object-cover pointer-events-none" 
                        />
                        {/* Right Background Vector (Reversed) */}
                        <img 
                            src={vectorImg} 
                            alt="" 
                            className="absolute right-0 top-0 h-full object-cover pointer-events-none -scale-x-100" 
                        />
                        
                        <h2 className="text-2xl leading-6 mb-4 relative z-10">In-Progress</h2>
                        <p className="text-6xl font-semibold relative z-10">{numberOfPendingTickets}</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-linear-to-br from-[#54CF68] to-[#00827A] rounded-lg p-12 w-full relative overflow-hidden">
                        {/* Left Background Vector */}
                        <img 
                            src={vectorImg} 
                            alt="" 
                            className="absolute left-0 top-0 h-full object-cover pointer-events-none" 
                        />
                        {/* Right Background Vector (Reversed) */}
                        <img 
                            src={vectorImg} 
                            alt="" 
                            className="absolute right-0 top-0 h-full object-cover pointer-events-none -scale-x-100" 
                        />

                        <h2 className="text-2xl leading-6 mb-4 relative z-10">Resolved</h2>
                        <p className="text-6xl font-semibold relative z-10">{numberOfResolvedTickets}</p>
                    </div>

                </div>
            </div>
        </section>
    );
}