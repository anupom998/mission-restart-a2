import TicketContainer from "./TicketContainer";
import TaskStatusContainer from "./TaskStatusContainer";


export default function MainSection({tickets, handlePendingClick, handleResolvedClick, pendingTickets, resolvedTickets}) {

     
    // console.log(ticketsArray, handlePendingClick, handleResolvedClick, pendingTickets, resolvedTickets);

    return(
        <section>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <TicketContainer tickets = {tickets} handlePendingClick={handlePendingClick} />
                    <TaskStatusContainer pendingTickets={pendingTickets} resolvedTickets={resolvedTickets} handleResolvedClick={handleResolvedClick} />
                </div>
            </div>
        </section>
    )
}