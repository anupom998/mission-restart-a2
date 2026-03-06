import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import MainSection from './components/MainSection'
import Navbar from './components/Navbar'
import {  tickets } from "./data/tickets"

function App() {

   const ticketsArray = tickets;
   

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
        console.log("clicked", pendingTicket);
        
        //remove from pending task
        setPendingTickets((prevTickets) => prevTickets.filter((prevTicket) => prevTicket.id !== pendingTicket.id)); 

        setResolvedTickets((prev) => [...prev, pendingTicket]);
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
