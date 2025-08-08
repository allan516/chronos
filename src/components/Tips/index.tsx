import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

export function Tips() {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const tipsForWhenActiveTask = {
    workTime: (
      <span>
        <b>Foque por {state.config.workTime}min 🎯</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        <b>Descanse por {state.config.shortBreakTime}min ✌️</b>
      </span>
    ),
    longBreakTime: (
      <span>
        <b>Descanse em paz ✅</b>
      </span>
    ),
  };

  const tipsForNoActiveTask = {
    workTime: (
      <span>
        <b>Próximo ciclo é de {state.config.workTime}min ⏰</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        <b>Próximo descanso é de {state.config.shortBreakTime}min</b> 🍃
      </span>
    ),
    longBreakTime: (
      <span>
        <b>Próximo descanso será longo</b> 😎
      </span>
    ),
  };
  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  );
}
