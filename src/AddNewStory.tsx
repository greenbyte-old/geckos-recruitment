import React, { useCallback } from "react";

const AddNewStory = () => {
  const [todos, setTodos] = React.useState<string[]>([]);
  const [numberOfTodos, setNumberOfTodos] = React.useState(0);

  //   useEffect(() => {
  //     setNumberOfTodos(todos.length);
  //   });

  const addTodo = useCallback(() => {
    setNumberOfTodos(todos.length);
    setTodos([...todos, `Story  ${numberOfTodos + 1}`]);
  }, [todos]);

  return (
    <div>
      <h2>{numberOfTodos} stories</h2>{" "}
      {todos.map((todo) => (
        <div>{todo}</div>
      ))}
      <button onClick={addTodo}>Add story</button>
    </div>
  );
};

export default AddNewStory;
