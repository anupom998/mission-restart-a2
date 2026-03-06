import ResolvedTask from "./ResolvedTask";

export default function TaskStatus() {
    return(
        <div>
            <h2 className="heading mb-4">Task Status</h2>
            <div className="space-y-4">
                {/* pending tasks */}
                <div className="h-full space-y-4 p-4 rounded-sm shadow-md">
                    <h3 className="sub-heading text-[#001931]">Login Issues - Can't Access Account</h3>
                    <button className="px-4 py-3 bg-green-500
                w-full rounded-sm cursor-pointer text-white font-semibold">Complete</button>
                </div>
                <div className="h-full space-y-4 p-4 rounded-sm shadow-md">
                    <h3 className="sub-heading text-[#001931]">Login Issues - Can't Access Account</h3>
                    <button className="px-4 py-3 bg-green-500
                w-full rounded-sm cursor-pointer text-white font-semibold">Complete</button>
                </div>
            </div>
        </div>
    )
}