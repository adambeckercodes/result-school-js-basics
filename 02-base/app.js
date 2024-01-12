/*
Theory

Массив - коллекция каких-либо элементов
const array = [1, 2, 23, 24, 25, 28, 78, 555];
const arrayStrings = ["a", "b", "c", null, "12"];
const array = new Array(1, 2, 23, 24, 25, 28, 78);

console.log(array.length);
console.log(array[0]);
console.log(array[array.length - 1]);

array[array.length] = "bacon"; // Adding new element to an array
*/

const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

// const notes = ["write a blog post about js arrays", "explain array theory"];

// function render() {
//   // for (let i = 0; i < notes.length; i++) {
//   //   listElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[i]));
//   // }

//   for (let note of notes) {
//     listElement.insertAdjacentHTML("beforeend", getNoteTemplate(note));
//   }
// }

// render();

// createBtn.onclick = function () {
//   // listElement.innerHTML = ;
//   if (inputElement.value.length === 0) {
//     return;
//   }

//   listElement.insertAdjacentHTML(
//     "beforeend",
//     getNoteTemplate(inputElement.value)
//   );

//   inputElement.value = ``;
// };

// function getNoteTemplate(title) {
//   return `
//     <li class="list-group-item d-flex justify-content-between align-items-center">
//       <span>${title}</span>
//       <span>
//         <span class="btn btn-small btn-success">&check;</span>
//         <span class="btn btn-small btn-danger">&times;</span>
//       </span>
//     </li>`;
// }

/*
Objects Theory
const person = {
  firstName: "Dias",
  lastName: "Adambek",
  year: "1993",
  hasGirlfriend: true,
  languages: ["en", "de", "kz", "ru"],
  getFullName: function () {
    console.log(person.firstName + ' ' + person.lastName)
  },
};

person.getFullName();
*/

const notes = [
  {
    title: "write a blog post about js arrays",
    completed: false,
  },
  {
    title: "explain array theory",
    completed: true,
  },
];

function render() {
  for (let note of notes) {
    listElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[i], i));
  }
}
render();

createBtn.onclick = function () {
  // listElement.innerHTML = ;
  if (inputElement.value.length === 0) {
    return;
  }

  const newNote = {
    title: inputElement.value,
    completed: false,
  };
  listElement.insertAdjacentHTML("beforeend", getNoteTemplate(newNote));

  inputElement.value = ``;
};

function getNoteTemplate(note, index) {
  return `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span class="${note.completed ? "text-decoration-line-through" : ""}">${
    note.title
  }</span>
      <span>
        <span class="btn btn-small btn-${
          note.completed ? "warning" : "success"
        }" data-index=${index}>&check;</span>
        <span class="btn btn-small btn-danger">&times;</span>
      </span>
    </li>`;
}

