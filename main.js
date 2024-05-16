// //? camelCase
// //? snake_case
// //? PascalCase
// //? kebab=case
// //? SCREAMING_SNAKE_CASE;
// //? SCREAMING-KEBAB-CASE

// const input = document.getElementById("input");
// const button = document.getElementById("button");
// const ul = document.getElementById("ul");

// button.addEventListener("click", () => {
//   postUses();
// });
// function render(todo) {
//   console.log(todo);
//   todo.map((item) => {
//    const li = document.createElement("li");
//     li.innerText = item.userName;
//     ul.append(li);
//   });
// }
// const BASE_URL =
//   "https://todo-app-44d57-default-rtdb.firebaseio.com/todos.json";
// async function getUsers() {
//   try {
//     const response = await fetch(BASE_URL);
//     const data = await response.json();
//     render(Object.values(data));
//     console.log(data);
//   } catch (error) {
//     throw new Error("sdkjfhgjsfhxkc");
//   }
// }
// getUsers();

// async function postUsers() {
//   const user = {
//     userName: 'dfghjkihg',
//     id: Date.now().toString(),
//   };
//   try {
//     const response = await fetch(BASE_URL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(user),
//     });
//     if (response.status === 200) {
//       console.log("uspeshno");
//     }
//   } catch (error) {
//     throw new Error("sdkjfhgjsfhxkc");
//   }
// }
// postUsers()

const input = document.getElementById("input");
const input1 = document.getElementById("input1");
const form = document.querySelector("form");
const ul = document.getElementById("ul");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  postTodos();
});

const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

async function getTodos() {
  try {
    const response = await fetch(
      "https://todo-app-2a6ed-default-rtdb.firebaseio.com/todos.json"
    );
    const data = await response.json();
    renderTodo(Object.values(data));
  } catch (error) {
    console.log(error);
  }
}

async function postTodos() {
  const todo = {
    title: input.value,
    password: input1.value,
    id: Date.now().toString(),
  };
  try {
    const response = await fetch(
      "https://todo-app-2a6ed-default-rtdb.firebaseio.com/todos.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      }
    );
    getTodos();
  } catch (error) {
    console.log(error);
  }
}

function renderTodo(array) {
  ul.innerHTML = "";
  array.map((item) => {
    console.log(item);
    const li = document.createElement("li");
    const p = document.createElement("p");
    const p1 = document.createElement("p");
    p.innerText = item.title;
    p1.innerText = item.password;
    li.append(p, p1);
    ul.append(li);
  });
}

(() => getTodos())();
