/*********************************************/
let taskid = document.getElementById("task-id")
let title = document.getElementById("task-title");
let bug = document.getElementById("task-type-bug");
let feature = document.getElementById("task-type-feature");
let priority = document.getElementById("task-priority");
let status = document.getElementById("task-status");
let date = document.getElementById("task-date");
let description = document.getElementById("task-description");
let savebtn = document.getElementById("task-save-btn");
let updatebn = document.getElementById("task-update-btn");
let deletebnt = document.getElementById("task-delete-btn");

document.getElementById("addBtn").addEventListener("click", btnswitch); //save button

function btnswitch() {
  //SWITCH BUTTONS
  document.getElementById("task-save-btn").style.display = "block";
  document.getElementById("task-update-btn").style.display = "none";
  document.getElementById("task-delete-btn").style.display = "none";
}
//display data in modal
function editTask(id) {
  document.getElementById("task-delete-btn").style.display = "block";
  document.getElementById("task-update-btn").style.display = "block";
  document.getElementById("task-save-btn").style.display = "none";
  //input
  let test = document.getElementById(id);
  title.value = test.children[1].children[0].innerHTML;
  if (test.children[1].children[2].children[2].innerHTML == "feature") {
    feature.checked = true;
  } else {
    bug.checked = true;
  }
  taskid.value = id;
  description.value = test.children[1].children[1].children[1].innerHTML;
  priority.value = test.children[1].children[2].children[1].getAttribute('dataPriority');
  date.value = test.children[1].children[1].children[0].innerHTML.slice(-10);
  if (test.parentElement.id == "to-do-tasks") {
    status.value = 1;
  } else if (test.parentElement.id == "in-progress-tasks") {
    status.value = 2;
  } else if (test.parentElement.id == "done-tasks") {
    status.value = 3;
  }
}