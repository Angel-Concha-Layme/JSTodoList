document.addEventListener('DOMContentLoaded', function () {
  const title = document.getElementById('title');
  const description = document.getElementById('description');
  const btn_add = document.getElementById('add');
  const table = document.getElementById('table');
  const alert = document.getElementById('alert');

  function addTodo() {
    if (title.value === '' || description.value === '') {
      alert.classList.remove('d-none');
      alert.innerText = 'Title and Description are required';
      return;
    }
    alert.classList.add('d-none');

    const row = table.insertRow(); 
    row.innerHTML = ` 
      <td>${title.value}</td> 
      <td>${description.value}</td>
      <td class="text-center">
        <input type="checkbox">
      </td>
      <td class="text-right">
        <button class="btn btn-primary mb-1">
          <i class="fa fa-pencil"></i>
        </button>
      `; 

      const remove_btn = document.createElement('button');
      remove_btn.classList.add('btn', 'btn-danger', 'mb-1');
      remove_btn.innerHTML = '<i class="fa fa-trash"></i>';
      row.children[3].appendChild(remove_btn);

      remove_btn.onclick = function(){
        console.log('delete')
      }


  }

  btn_add.onclick = addTodo;

});


