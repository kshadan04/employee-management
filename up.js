const tbody = document.getElementById("tbody");

const employees = [];

function addEmployee(employee){
  for(var i=0; i<employees.length; i++){
    var e = employees[i];
    if(e.email === employee.email){
      alert("email exist already");
      return;
    }
    else if(e.empId == employee.empId){
      alert("empId already exist");
      return;
    }
  }
    const tr = document.createElement("tr");

    tr.innerHTML = `<td>${employee.name}</td>
                    <td>${employee.email}</td>
                    <td>${employee.empId}</td>
                    <td>${employee.company}</td>
                    <td>${employee.designation}</td>
                    <td>
                      <button onclick="deleteEmployee(this)" data-empid="${employee.empId}" >Delete </button>
                    </td>`;

    tbody.appendChild(tr);
    employees.push(employee);
    form.reset();
}

function deleteEmployee(btnReference){
  const empId = btnReference.getAttribute("data-empid");

  // delete the employee from the above Array
  for(let i=0; i<employees.length; i++){
    if(employees[i].empId === empId){
      employees.splice(i,1);
      break;
    }
  }

  // delete employee from DOM tree
  let parentTd = btnReference.parentNode;
  let parentTr = parentTd.parentNode;

  parentTr.remove();


}

form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    let employee = {
      name: event.target.name.value,
      email: event.target.email.value,
      empId: event.target.empId.value,
      company: event.target.company.value,
      designation: event.target.designation.value,
    };
  
    addEmployee(employee);
  });