import React, { useState } from "react";
import TodoTextfield from "./TodoTextfield";
import TodoButton from "./TodoButton";
import TodoList from "./TodoList";

interface TodoContainerProps {
  id: number;
  text: string;
}

const TodoContainer: React.FC<TodoContainerProps> = () => {
  const [todos, setTodos] = useState<TodoContainerProps[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = (text: string) => {
    if (text.trim()) {
      const newTodo = {
        id: Date.now(),
        text: text.trim(),
      };
      setTodos([...todos, newTodo]);
      setInputValue("")
    }
  };

  const handleClick = () => {
    handleAddTodo(inputValue);
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="bg-gray-200 max-w-max rounded-md p-4">
      <p className="font-bold">Todo List</p>
      <TodoTextfield placeholder="Add your task" onSubmit={handleAddTodo} />
      <TodoButton onClick={handleClick} name="Add" />
      {todos.map((todo) => (
        <TodoList onClick={() => handleDeleteTodo(todo.id)} key={todo.id} listName={todo.text} />
      ))}
    </div>
  );
};

export default TodoContainer;
