import { createContext, createElement, useContext, useState, type ReactNode } from "react";

type Todo = { id: string; title: string };

const TodosContext = createContext<{
  todos: Todo[];
  addTodo: (title: string) => void;
  updateTodo: (id: string, title: string) => void;
  deleteTodo: (id: string) => void;
} | null>(null);

export function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(title: string) {
    const todo = { id: crypto.randomUUID(), title: title.trim() };
    if (!todo.title) return;
    setTodos((current) => [...current, todo]);
  }

  function updateTodo(id: string, title: string) {
    setTodos((current) =>
      current.map((todo) => (todo.id === id ? { ...todo, title } : todo)),
    );
  }

  function deleteTodo(id: string) {
    setTodos((current) => current.filter((todo) => todo.id !== id));
  }

  return createElement(
    TodosContext.Provider,
    { value: { todos, addTodo, updateTodo, deleteTodo } },
    children,
  );
}

export function useTodosContext() {
  const value = useContext(TodosContext);
  if (!value) throw new Error("useTodosContext must be used inside TodosProvider");
  return value;
}
