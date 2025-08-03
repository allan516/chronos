import type { TaskStateModel } from "../../models/TaskStateModel";

export const initialTaskState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: "04:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shotBreakTime: 5,
    longBreakTime: 15,
  },
};
