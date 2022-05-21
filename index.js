document.getElementById('add-btn').addEventListener('click', newTask);

function newTask(){
    const addTask = document.getElementById('addTask').value;

    var li = document.createElement('li');
    var task = document.createTextNode(addTask);
    li.appendChild(task);
    document.getElementById('task-table').appendChild(li);
    document.getElementById('addTask').value='';

    // var button1 = document.createElement('button');
    // var button2 = document.createElement('button');
    // button1.innerText = 'X';
    // button2.innerText = 'Done';
    // li.appendChild(button1);
    // li.appendChild(button2);

    const myBtn1 = document.createElement('span');
    const myBtn2 = document.createElement('span');

    myBtn1.classList.add("a");
    myBtn2.classList.add("b");
    myBtn1.innerHTML = 'x';
    myBtn2.innerHTML = 'Done';
    
    li.appendChild(myBtn1);
    li.appendChild(myBtn2);
    


    myBtn1.addEventListener('click', function(){
        li.style.display = "none";
    })
    myBtn2.addEventListener('click', function(){
        li.style.textDecoration = "line-through";
    })


}

function clearField()
{
    document.getElementById('task-table').innerHTML='';
    document.getElementById('addTask').value='';
}