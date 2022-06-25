document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    todoItem(e.target.new_task_description.value);
    form.reset();
  })

  
});
function todoItem(item){
  let p = document.createElement('p');
  let button = document.createElement('button');
  button.addEventListener('click', deleteItem)
  button.textContent = 'x';
  p.textContent = `${item}`;
  p.appendChild(button)
  
  document.getElementById('list').appendChild(p);
}
function deleteItem(e){
  e.target.parentNode.remove();
}