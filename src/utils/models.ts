export interface Task {
  id: string;
  description: string;
  completed: boolean;
}

export function createTask(value: string): Task {
  return {
    id: Date.now().toString(),
    description: value,
    completed: false,
  };
}
