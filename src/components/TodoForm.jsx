import React, { useState } from "react";
import { useTodo } from "../contexts/index";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  // adding new todo
  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex gap-3 text-lg">
      <input
        type="text"
        placeholder="Write Todo...."
        className="w-full border border-black/10 rounded-lg px-4 outline-none duration-150 bg-white py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-lg px-4 py-1.5 bg-primary text-white shrink-0"
      >
        + Add
      </button>
    </form>
  );
}

export default TodoForm;
