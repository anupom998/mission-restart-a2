export default function TaskStatus({pendingTickets, handleResolvedClick}) {
    return(
        <div>
            <h2 className="heading mb-4">Task Status</h2>
            <div className="space-y-4">
                {/* pending tasks */}
                {pendingTickets.length === 0 ? "Select a ticket to add to Task Status" : pendingTickets.map((pendingTicket) => <div key={pendingTicket.id} className="h-full space-y-4 p-4 rounded-sm shadow-md">
                    <h3 className="sub-heading text-[#001931]">{pendingTicket.title}</h3>
                    <button onClick={()=> handleResolvedClick(pendingTicket)} className="px-4 py-3 bg-green-500
                w-full rounded-sm cursor-pointer text-white font-semibold">Complete</button>
                </div>) }
            </div>
        </div>
    )
}