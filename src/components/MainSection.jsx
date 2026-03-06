import TicketContainer from "./TicketContainer";
import {tickets} from "../data/tickets"
import TaskStatusContainer from "./TaskStatusContainer";
export default function MainSection() {
    return(
        <section>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <TicketContainer tickets = {tickets} />
                    <TaskStatusContainer />
                </div>
                
            </div>
        </section>
    )
}