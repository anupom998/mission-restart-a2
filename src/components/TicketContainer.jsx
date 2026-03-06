import TicketCard from './TicketCard';


export default function TicketContainer({tickets}) {
    return(
        <div className='col-span-3 '>
            <h1 className="heading mb-4">Customer Tickets</h1>

            {/* Grid layout for tickets */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {tickets.map((ticket) => (
                    <TicketCard key={ticket.id} ticket={ticket} />
                ))}
            </div>
        </div>
    )
}