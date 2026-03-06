import ResolvedTask from "./ResolvedTask";
import TaskStatus from "./TaskStatus";

export default function TaskStatusContainer() {
    return(
        <aside className="col-span-1 text-[#34485A] space-y-10">
            <TaskStatus />
            <ResolvedTask />
        </aside>
    )
}