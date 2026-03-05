import TicketCard from './TicketCard';
import {tickets} from "../data/tickets"

export default function TicketContainer() {
    return(
        <div className="container mx-auto px-4">
            <h1 className="heading my-8">Customer Tickets</h1>

            {/* Grid layout for tickets */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {tickets.map((ticket) => (
                    <TicketCard key={ticket.id} ticket={ticket} />
                ))}
            </div>
        </div>
    )
}