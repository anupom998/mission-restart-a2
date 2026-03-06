import { Calendar } from 'lucide-react'; 

const TicketCard = ({ticket}) => {

    const {id, title, description, customer, priority, status, createdAt} = ticket;

//   priority colors
  const priorityColors = {
    high: 'text-red-500',
    medium: 'text-yellow-500',
    low: 'text-green-500'
  };


  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="p-4 rounded-sm shadow-md">
      <div className="flex justify-between">
        <h3 className="sub-heading">{title}</h3>
        <div className={`flex justify-center items-center gap-2 font-bold py-1 px-3 rounded-full ${status === "Open" ? "text-green-500 bg-green-200" : "text-yellow-500 bg-yellow-100"}`}>
          <div className={`h-4 w-4 rounded-full ${status === "Open" ? "bg-green-500" : "bg-yellow-500"}`}></div>
          <p className="capitalize">{status}</p>
        </div>
      </div>
      
      <div>
        <p className="paragraph">{description}</p>
      </div>
      
      <div className='text-[#627382] flex justify-between items-center pt-2'>
        <div className='flex gap-4 items-center justify-center font-medium'>
          <p className='text-sm'>#{id}</p>
          <h4 className={`uppercase ${priorityColors[priority.toLowerCase()]}`}>
            {priority} Priority
          </h4>
        </div>
        
        <div className='flex justify-center items-center gap-4'>
          <p>{customer}</p>
          <div className='flex justify-center items-center gap-4'> 
            <Calendar size={16} />
            <p>{formatDate(createdAt)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;