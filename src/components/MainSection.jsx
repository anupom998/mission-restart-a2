import TicketContainer from "./TicketContainer";
import {tickets} from "../data/tickets"
import TaskStatusContainer from "./TaskStatusContainer";
import { useState } from "react";
import { useEffect } from "react";

export default function MainSection() {

    const ticketsArray = tickets;

    const [pendingTickets, setPendingTickets] = useState([]);
    const [resolvedTickets, setResolvedTickets] = useState([]);

    // adding ticket to in-progress in task status
    const handlePendingClick = (ticket) => {
        // console.log("clicked", ticket);
        setPendingTickets((prev) => [...prev, ticket])
    }
    
    // useEffect(() => {
    //     console.log(pendingTickets);
    // },[pendingTickets]);


    // adding resolved ticket to resolved in  task status
    const handleResolvedClick = (pendingTicket) => {
        console.log("clicked", pendingTicket);
        
        //remove from pending task
        setPendingTickets((prevTickets) => prevTickets.filter((prevTicket) => prevTicket.id !== pendingTicket.id)); 

        setResolvedTickets((prev) => [...prev, pendingTicket]);
    }

    // useEffect(() => {
    //     console.log(resolvedTickets);
    // },[resolvedTickets]);


    return(
        <section>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <TicketContainer tickets = {ticketsArray} handlePendingClick={handlePendingClick} />
                    <TaskStatusContainer pendingTickets={pendingTickets} resolvedTickets={resolvedTickets} handleResolvedClick={handleResolvedClick} />
                </div>
            </div>
        </section>
    )
}