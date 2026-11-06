import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, updateTodo, type ReduxTodo } from "./todosReducer";
import type { RootState } from "./store";

function ReduxTodoForm({
  title,
  setTitle,
  editingId,
  onFinish,
}: {
  title: string;
  setTitle: (title: string) => void;
  editingId: string | null;
  onFinish: () => void;
}) {
  const dispatch = useDispatch();
  return (
    <div className="mb-2 flex flex-wrap gap-2">
      <input
        id="wd-redux-todo-title"
        aria-label="Redux todo title"
        className="rounded border border-neutral-300 px-2 py-1"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        type="button"
        id="wd-redux-add-todo"
        className="rounded bg-green-600 px-3 py-1.5 text-sm text-white"
        onClick={() => {
          if (editingId) {
            dispatch(updateTodo({ id: editingId, title }));
            onFinish();
          } else {
            dispatch(addTodo(title));
          }
          setTitle("Learn Mongo");
        }}
      >
        {editingId ? "Update" : "Add"}
      </button>
    </div>
  );
}

function ReduxTodoItem({
  todo,
  onEdit,
}: {
  todo: ReduxTodo;
  onEdit: (todo: ReduxTodo) => void;
}) {
  const dispatch = useDispatch();
  return (
    <li

      className="mb-1 flex items-center justify-between rounded border border-neutral-200 px-3 py-1"
    >
      <span>{todo.title}</span>
      <span className="flex gap-2">
        <button
          type="button"
          className="rounded bg-yellow-400 px-2 py-0.5 text-sm"
          onClick={() => onEdit(todo)}
        >
          Edit
        </button>
        <button
          type="button"
          className="rounded bg-red-600 px-2 py-0.5 text-sm text-white"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          Delete
        </button>
      </span>
    </li>
  );
}

export default function ReduxTodos() {
  const { todos } = useSelector((state: RootState) => state.todosReducer);
  const [title, setTitle] = useState("Learn Mongo");
  const [editingId, setEditingId] = useState<string | null>(null);

  return (
    <div id="wd-redux-todos">
      <h3>Redux Todo List</h3>
      <ReduxTodoForm
        title={title}
        setTitle={setTitle}
        editingId={editingId}
        onFinish={() => setEditingId(null)}
      />
      <ul className="m-0 max-w-lg list-none p-0">
        {todos.map((todo) => (
          <ReduxTodoItem
            key={todo.id}
            todo={todo}
            onEdit={(item) => {
              setTitle(item.title);
              setEditingId(item.id);
            }}
          />
        ))}
      </ul>
    </div>
  );
}
