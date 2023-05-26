const initialState = {
  todo: [
    {
      id: 1,
      email: "phanhoanghieu@gmail.com",
      password: "123321123",
      address: "Ngo Quyen",
      gender: "Male",
    },
    {
      id: 2,
      email: "markdommm@gmail.com",
      password: "123321123",
      address: "Ngo Quyen",
      gender: "Female",
    },
    {
      id: 3,
      email: "lkhinge@gmail.com",
      password: "123321123",
      address: "Ngo Quyen",
      gender: "male",
    },                  
  ],
};

export const totoReducer = (state = initialState, action) => {

  switch (action.type) {
    case "Add":
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    case "Delete":
      const updateTodos = state.todo.filter(
        (todo) => todo.id !== action.payload
      );
      return {
        ...state,
        todo: updateTodos,
      };
    case "Update":
      const updateTodoList = state.todo.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            title: action.type.title,
            complete: action.payload.complete,
          };
        } else {
          return todo;
        }
      });
      return {  
        ...state,
        todo: updateTodoList,
      };

    default:
      return state;
  }
};
