/*********************************************/
let id = document.getElementById("task-id").value
let title = document.getElementById("task-title");
let bug = document.getElementById("task-type-feature");
let feature = document.getElementById("task-type-bug");
let priority = document.getElementById("task-priority");
let status= document.getElementById("task-status");
let date= document.getElementById("task-date");
let description= document.getElementById("task-description");









document.getElementById("addBtn").addEventListener("click", btnswitch);
function btnswitch()//SWITCH BUTTONS
 {
    document.getElementById("task-save-btn").style.display='block';
    document.getElementById("task-update-btn").style.display='none';
    document.getElementById("task-delete-btn").style.display='none';
    document.getElementById("task-save-btn").setAttribute("type", "submit");
    document.getElementById("task-save-btn").setAttribute("name", "save");
}
function editTask(id)
{
  document.getElementById("task-delete-btn").style.display='block';
  document.getElementById("task-update-btn").style.display='block';
  document.getElementById("task-save-btn").style.display='none';
  document.getElementById("task-update-btn").addEventListener("click", setAttributeupdate);
  document.getElementById("task-delete-btn").addEventListener("click", setAttributedelete);
  //input
  let test = document.getElementById(id);
  title.value = test.children[1].children[0].innerHTML;
   if(test.children[1].children[2].children[2].innerHTMLt=="1") {feature.checked=true} else {bug.checked=true}
  description.value = test.children[1].children[1].children[1].innerHTML;

  priority.value = test.children[1].children[2].children[1].innerHTML;

  console.log();
 
  date.value = test.children[1].children[1].children[0].innerHTML.slice(-10);

  if (test.parentElement.id == "to-do-tasks") {
    status.value = 1;
  } else if (test.parentElement.id == "in-progress-tasks") {
    status.value = 2;
  } else if (test.parentElement.id == "done-tasks") {
    status.value = 3;
  }



}
function setAttributedelete(){
  document.getElementById("task-delete-btn").setAttribute("type", "submit");
  document.getElementById("task-delete-btn").setAttribute("name", "save");
}
function setAttributeupdate(){
  document.getElementById("task-update-btn").setAttribute("type", "submit");
  document.getElementById("task-update-btn").setAttribute("name", "save");
}

