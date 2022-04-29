let nameValue = "";
let mailValue = "";
let personList = [
  {
    name: "Omer",
    mail: "omer@gmail.com",
  },
];

function render(pTag, pValue) {
  document.querySelector(`#${pTag}`).innerHTML = pValue;
}

let table = () => {
  let template = personList
    .map((person, index) => {
      return `
          <tr>
           <th scope="row">${index + 1}</th>
           <td>${person.name}</td>
           <td>${person.mail}</td>
           <td><i class="fas fa-trash text-danger" onclick="handleClickDelete(${index})"></i></td>

          </tr>
          `;
    })
    .join("");

  return template;
};

render("table-row", table());

function handleClickAdd() {
  nameValue = document.getElementById("name");
  mailValue = document.getElementById("mail");

  let newPerson = {
    name: nameValue.value,
    mail: mailValue.value,
  };

  personList.push(newPerson);
  render("table-row", table());
  emptyInput()
}

const handleClickDelete = (pIndex) => {
  personList.splice(pIndex, 1);
  render("table-row", table());
};

const emptyInput = () => {
  nameValue.value = "";
  mailValue.value = "";
};
