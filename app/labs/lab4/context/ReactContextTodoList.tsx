import { useState } from "react";
import { useTodosContext } from "./todosContext";

export default function ReactContextTodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodosContext();
  const [title, setTitle] = useState("");

  return (
    <section className="my-4 max-w-md">
      <h2 className="mb-2 text-xl font-semibold">React Context Todo List</h2>
      <form
        className="flex gap-2"
        onSubmit={(event) => {
          event.preventDefault();
          addTodo(title);
          setTitle("");
        }}
      >
        <input
          aria-label="New todo title"
          placeholder="New todo title"
          className="min-w-0 flex-1 rounded border px-2 py-1"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button
          type="submit"
          disabled={!title.trim()}
          className="rounded bg-blue-600 px-3 py-1 text-white disabled:opacity-50"
        >
          Add
        </button>
      </form>
      <ul className="mt-2 space-y-2">
        {todos.map((todo, index) => (
          <li key={todo.id} className="flex gap-2">
            <input
              aria-label={`Todo ${index + 1} title`}
              className="min-w-0 flex-1 rounded border px-2 py-1"
              value={todo.title}
              onChange={(event) => updateTodo(todo.id, event.target.value)}
            />
            <button
              type="button"
              className="rounded bg-red-600 px-3 py-1 text-white"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
