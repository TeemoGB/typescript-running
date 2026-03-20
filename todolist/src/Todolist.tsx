import React, { useState } from "react";
import { Button } from "react-bootstrap";
import TodoModal from "./TodoModal";

type Todo = {
  id: number;
  text: string;
  checked: boolean;
};

const Todolist: React.FC = () => {
  const title: string = "오늘 할 일";
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "잠자기", checked: false },
    { id: 2, text: "밥먹기", checked: false },
    { id: 3, text: "공부하기", checked: false },
  ]);
  const [newTodo, setNewTodo] = useState<string>("");

  const [showDetail, setShwoDetail] = useState<boolean>(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  const handleCheckedChange = (id: number) => {
    setTodos((prevTodos) => {
      return prevTodos.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      );
    });
  };

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: newTodo, checked: false }]);

      setNewTodo("");
    }
  };

  const removeTodo = (id: number) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      }),
    );
  };

  const handleTodoClick = (todo: Todo) => {
    setShwoDetail(true);
    setSelectedTodo(todo);
  };

  const handleCloseDetail = () => {
    setShwoDetail(false);
  }

  return (
    <div className="container">
      <div>
        <h1>{title}</h1>
        <div>
          <input
            type="text"
            placeholder="할일 입력"
            onChange={(e) => setNewTodo(e.target.value)}
            style={{ marginRight: "10px", writingMode: "horizontal-tb" }}
          />
          <Button onClick={() => addTodo()}>추가</Button>
        </div>
        <br />
      </div>

      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            <input
              type="checkbox"
              onChange={() => {
                handleCheckedChange(todo.id);
              }}
            />
            <span onClick={() => handleTodoClick(todo)}>
              {todo.checked ? <del>{todo.text}</del> : todo.text}
            </span>

            <button onClick={() => removeTodo(todo.id)} className="delButton">
              삭제
            </button>
          </li>
        ))}
      </ul>

      <TodoModal show={showDetail} todo={selectedTodo} handleClose={handleCloseDetail}></TodoModal>
    </div>
  );
};

export default Todolist;
