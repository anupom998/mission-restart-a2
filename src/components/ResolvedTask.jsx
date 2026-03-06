export default function ResolvedTask({resolvedTickets}) {
    return(
        <div className="space-y-4">
            <h2 className="heading mb-4">Resolved Task</h2>
            {resolvedTickets.length === 0 ? "No resolved tasks yet." : resolvedTickets.map((resolvedTicket) => <div key={resolvedTicket.id} className="px-5 py-4 bg-blue-100 shadow-md rounded-sm">
              <h3 className="sub-heading text-[#001931]">{resolvedTicket.title}</h3>
            </div>)}
        </div>
    )
}