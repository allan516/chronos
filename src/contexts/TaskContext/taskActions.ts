// use Reducer <- hook do React que recebe um reducer e um estado inicial
// reducer <- funão que receve o estado atual e uma ação, e retorna o novo estado
// state <- o estado atual
// action <- a ação disparada, geralmente é um objeto com type e (opcionalmente) payload
// type <- o tipo da ação, geralmente uma string (pode ser enum, constante, etc)
// payload <- os dados extras enviados junto com a action, se necessário para atualizar o estado

import type { TaskModel } from "../../models/TaskModel";

export enum TaskAcionTypes {
  START_TASK = "START_TASK",
  INTERRUPT_TASK = "INTERRUPT_TASK",
  RESET_STATE = "RESET_STATE",
  COUNT_DOWN = "COUNT_DOWN",
  COMPLETE_TASK = "COMPLETE_TASK",
}

export type TaskActionsWithPayload =
  | {
      type: TaskAcionTypes.START_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskAcionTypes.COUNT_DOWN;
      payload: { secondsRemaining: number };
    };

export type TaskActionsWithoutPayLoad =
  | {
      type: TaskAcionTypes.RESET_STATE;
    }
  | {
      type: TaskAcionTypes.INTERRUPT_TASK;
    }
  | {
      type: TaskAcionTypes.COMPLETE_TASK;
    };

export type TaskActionModel =
  | TaskActionsWithPayload
  | TaskActionsWithoutPayLoad;
