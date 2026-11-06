"use client";

import { CounterProvider } from "./CounterContext";
import ContextCounterRead from "./ContextCounterRead";
import ContextCounterWrite from "./ContextCounterWrite";
import ReactContextTodoList from "./ReactContextTodoList";
import { TodosProvider } from "./todosContext";
import ContextProfileForm from "./ContextProfileForm";

export default function ContextExamples() {
  return (
    <div id="wd-context-examples">
      <h2>React Context</h2>
      <p>
        Two siblings share one counter without the parent passing props
        through the middle.
      </p>
      <CounterProvider>
        <ContextCounterRead />
        <ContextCounterWrite />
      </CounterProvider>
      <hr />
      <TodosProvider>
        <ReactContextTodoList />
      </TodosProvider>
      <hr />
      <ContextProfileForm />
    </div>
  );
}
