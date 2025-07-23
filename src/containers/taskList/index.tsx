import { useCallback, useMemo } from "react"
import type { Task } from "../../providers/state"
import { toggleTask } from "../../providers/actions"
import { useDispatch } from "../../hooks/useDispatch"
import { useAppState } from "../../hooks/useAppState"
import { TaskList as TaskListComponent } from "../../components/taskList"

export type TaskProps = {
  tasks: Task[]
}

export const TaskList = ({
  tasks,
}: TaskProps) => {
  const dispatch = useDispatch()
  const { taskCheckedById } = useAppState()
  
  const handleTaskClick = useCallback((taskId: string) => {
    dispatch(toggleTask(taskId))
  }, [dispatch])

  const taskData = useMemo(() => tasks.map(task => ({
    ...task,
    checked: taskCheckedById[task.id],
  })), [tasks, taskCheckedById]);

  return (
    <TaskListComponent 
      tasks={taskData} 
      handleTaskClick={handleTaskClick} 
    />
  )
}