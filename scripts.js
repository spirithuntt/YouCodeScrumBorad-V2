/*********************************************/
let title = document.getElementById("task-title");
let bug = document.getElementById("task-type-bug");
let feature = document.getElementById("task-type-feature");
let priority = document.getElementById("task-priority");
let status = document.getElementById("task-status");
let date = document.getElementById("task-date");
let description = document.getElementById("task-description");

document.getElementById("addBtn").addEventListener("click", btnswitch);
function btnswitch() {
  //SWITCH BUTTONS
  document.getElementById("task-save-btn").style.display = "block";
  document.getElementById("task-update-btn").style.display = "none";
  document.getElementById("task-delete-btn").style.display = "none";
  document.getElementById("task-save-btn").setAttribute("type", "submit");
  document.getElementById("task-save-btn").setAttribute("name", "save");
}
//display data in modal
function editTask(id) {
  document.getElementById("task-id").setAttribute("value", id);
  document.getElementById("task-save-btn").removeAttribute("type")
  document.getElementById("task-save-btn").removeAttribute("name")
  document.getElementById("task-delete-btn").style.display = "block";
  document.getElementById("task-update-btn").style.display = "block";
  document.getElementById("task-save-btn").style.display = "none";
  document.getElementById("task-update-btn").setAttribute("type", "submit");
  document.getElementById("task-update-btn").setAttribute("name", "update");
  document
    .getElementById("task-delete-btn")
    .addEventListener("click", setAttributedelete);
  //input
  let test = document.getElementById(id);
  title.value = test.children[1].children[0].innerHTML;

  if (test.children[1].children[2].children[2].innerHTML == "1") {
    feature.checked = true;
  } else {
    bug.checked = true;
  }
  description.value = test.children[1].children[1].children[1].innerHTML;
  priority.value = test.children[1].children[2].children[1].innerHTML;
  date.value = test.children[1].children[1].children[0].innerHTML.slice(-10);
  console.log(test.children[0]);
  console.log(id);
  if (test.parentElement.id == "to-do-tasks") {
    status.value = 1;
  } else if (test.parentElement.id == "in-progress-tasks") {
    status.value = 2;
  } else if (test.parentElement.id == "done-tasks") {
    status.value = 3;
  }
}
function setAttributedelete() {
  document.getElementById("task-delete-btn").setAttribute("type", "submit");
  document.getElementById("task-delete-btn").setAttribute("name", "save");
}
function setAttributeupdate() {

}
