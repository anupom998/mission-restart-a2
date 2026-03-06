import TicketContainer from "./TicketContainer";
import TaskStatusContainer from "./TaskStatusContainer";


export default function MainSection({tickets, handlePendingClick, handleResolvedClick, pendingTickets, resolvedTickets}) {

     
    // console.log(ticketsArray, handlePendingClick, handleResolvedClick, pendingTickets, resolvedTickets);

    return(
        <section>
            <div className="container px-4 lg:px-0 lg:mx-auto my-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <TicketContainer tickets = {tickets} handlePendingClick={handlePendingClick} />
                    <TaskStatusContainer pendingTickets={pendingTickets} resolvedTickets={resolvedTickets} handleResolvedClick={handleResolvedClick} />
                </div>
            </div>
        </section>
    )
}