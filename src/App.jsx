import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import MainSection from './components/MainSection'
import Navbar from './components/Navbar'
import {tickets} from "./data/tickets"


function App() {

   const [ticketsArray, setTicketsArray] = useState(tickets);
   
    
    

    const [pendingTickets, setPendingTickets] = useState([]);
    const [resolvedTickets, setResolvedTickets] = useState([]);

    const numberOfPendingTickets = pendingTickets.length;
    const numberOfResolvedTickets = resolvedTickets.length;
    

    // adding ticket to in-progress in task status
    const handlePendingClick = (ticket) => {
        // console.log("clicked", ticket);
        setPendingTickets((prev) => [...prev, ticket])
    }
    
    


    // adding resolved ticket to resolved in  task status
    const handleResolvedClick = (pendingTicket) => {
        
        
        //remove from in progress task
        setPendingTickets((prevTickets) => prevTickets.filter((prevTicket) => prevTicket.id !== pendingTicket.id)); 

        // add to resolve task
        setResolvedTickets((prev) => [...prev, pendingTicket]);

        // remove from ticket list
        setTicketsArray((prev) => prev.filter((prevTicket) => prevTicket.id !== pendingTicket.id));
    }
 
  return (
    <>
     <Navbar />
     <Banner numberOfPendingTickets={numberOfPendingTickets} numberOfResolvedTickets={numberOfResolvedTickets} />
     <MainSection tickets={ticketsArray} handlePendingClick={handlePendingClick} handleResolvedClick={handleResolvedClick} pendingTickets={pendingTickets} resolvedTickets={resolvedTickets} />
      <Footer />
    </>
  )
}

export default App
