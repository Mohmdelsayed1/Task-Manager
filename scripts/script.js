//explored more about some methods using https://www.w3schools.com/

//adding events to the main buttons
const AddTaskbtn = document.getElementById("add-task");
const Backbtn_1 = document.getElementById("back1");
const Backbtn_2 = document.getElementById("back2");
const Addbtn = document.getElementById("add");
const ListTasks = document.getElementById("list-task");
const priorityHigh= document.getElementById("high");
const priorityNormal=document.getElementById("normal");
let AddTaskWin = document.getElementById("add-task-window");
let FeatureWin = document.getElementById("feature");
let Tasks = document.getElementById("list");
let left_side = document.getElementById("left");
let right_side = document.getElementById("right");
AddTaskbtn.addEventListener("click", AddTask);
Backbtn_1.addEventListener("click", Back);
Backbtn_2.addEventListener("click", Back);
Addbtn.addEventListener("click", AddT);
ListTasks.addEventListener("click", List_task);
//Priority toggle
priorityHigh.addEventListener("change",function(){
  if( priorityNormal.checked==true)
  {
  priorityNormal.checked=false;
  }
  else{
    priorityNormal.checked=true;
  }
})
priorityNormal.addEventListener("change",function(){
  if(  priorityHigh.checked==true)
  {
  priorityHigh.checked=false;
  }
  else{
    priorityHigh.checked=true;
  }
})





function List_task() {
  FeatureWin.style.display = "none";
  AddTaskWin.style.display = "flex";
  left_side.style.display = "none";
  Backbtn_2.style.display = "inline-flex";
}

function AddTask() {
  FeatureWin.style.display = "none";
  AddTaskWin.style.display = "flex";
  Backbtn_2.style.display = "none";
  left_side.style.display = "flex";
}


function Back() {
  AddTaskWin.style.display = "none";
  FeatureWin.style.display = "flex";
}

let f_name = document.getElementsByName("f-name")[0];
let st_date = document.getElementsByName("start-date")[0];
let end_date = document.getElementsByName("end-date")[0];
let counter = 0;
//adding/editing/deleting a task
function AddT() {
  if(f_name.value.trim()=="" ) {
    alert("Fill missing data");
  }
  else{
  counter++;
  let edit = document.createElement("button");
  let del = document.createElement("button");
  let new_task = document.createElement("li");
  new_task.classList.add("li-style");
  new_task.id = `task${counter}`;
  edit.classList.add("small-button");
  edit.id = `edit${counter}`;
  //edit a task name
  edit.addEventListener("click", function () {
    let edit_input = document.createElement("input");
    edit_input.type = "text";
    edit_input.name = "edited-text";
    edit_input.placeholder = "edit name";
    edit_input.id = `edit${counter}`;
    new_task.appendChild(edit_input);
    let save = document.createElement("button");
    save.innerText = "save";
    save.id = `save${counter}`;
    save.classList.add("save");
    new_task.appendChild(save);
    save.addEventListener("click", function (e) {
      console.log(e.target.id);
      console.log(counter);
      new_task.childNodes[0].innerText = `${edit_input.value}`;
      new_task.removeChild(edit_input);
      new_task.removeChild(save);
    });
  });
  del.classList.add("small-button-del");
  del.id = `del${counter}`;
  //delete a task
  del.addEventListener("click", function () {
    Tasks.removeChild(new_task);
    counter--;
  });
  let completed = document.createElement("input");
  completed.type = "checkbox";
  completed.id = `completed${counter}`;
  completed.name = "completed-task";
  completed.value = "complete";
  completed.classList.add("checkbox");
  let active = document.createElement("input");
  active.type = "checkbox";
  active.id = `active${counter}`;
  active.name = "active-task";
  active.checked=true;
  active.classList.add("checkbox");
  new_task.innerHTML = `<p class="task-name">${f_name.value}</p><p class="st-date">${st_date.value}</p><p class="end-date">${end_date.value}</p>`;
  edit.innerHTML = `<img src="./assets/icons/edit-solid.svg" alt="ed">`;
  del.innerHTML = `<img src="./assets/icons/trash-can-solid.svg" alt="tr">`;
  new_task.appendChild(completed);
  new_task.appendChild(active);
  //check priority
  if(document.getElementById("high").checked==true){
    let prior=document.createElement("p");
    prior.innerText="high";
    prior.classList.add("prior");
    new_task.appendChild(prior);
  } else{
    let prior=document.createElement("p");
    prior.innerText="normal";
    prior.classList.add("prior");
    new_task.appendChild(prior);
  }
  new_task.appendChild(edit);
  new_task.appendChild(del);
  Tasks.appendChild(new_task);
  f_name.value = "";
  st_date.value = "";
  end_date.value = "";
  //task status toggle
  let complete_task=document.getElementById(`completed${counter}`);
  let active_task=document.getElementById(`active${counter}`);
  complete_task.addEventListener("change",function(){
    if(active_task.checked==true){
    active_task.checked=false;
    }else{
      active_task.checked=true;
    }
  })
  active_task.addEventListener("change",function(){
    if(complete_task.checked==true){
    complete_task.checked=false;
    } else{
      complete_task.checked=true;
    }
  })
   }
}



