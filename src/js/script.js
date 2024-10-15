let aTasksList = [];

function addTask(aTask) {
  aTasksList.push(aTask);
}

function removeTask(aTask) {
  const index = aTasksList.indexOf(aTask);
  if (index == -1) throw new Error("Error: No Task");
  else aTasksList.splice(index);
}
