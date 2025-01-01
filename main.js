const myForm = document.querySelector('#my-form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
let arr;
let obj;
oldUser();

myForm.addEventListener('submit', onSubmit);

function onSubmit(e)
{
    e.preventDefault();
    if (name.value === '' || email.value === '')
    {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all field';
        setTimeout(() => msg.remove (),3000);
    }
    else
    {
        let obj = {};
        let arr;
        if (localStorage.getItem("data") === null){
            arr = [];
        }
        else 
        {
            arr = JSON.parse(localStorage.getItem('data'));
        }
        obj.id = +UIDG();
        obj.name = name.value;
        obj.email = email.value;
        arr.push(obj);
        localStorage.setItem("data",JSON.stringify(arr));
        newUser(obj);
    }
}
function newUser(obj)
{
    
    const list = document.createElement('li');
    const dlt = document.createElement('img');
    dlt.src = 'delete-icon.png';
    dlt.id = obj.id;
    dlt.alt = 'User  Image';
    dlt.style.marginLeft = '5px';
    dlt.style.width = '25px'; 
    dlt.style.height = '25px';
    dlt.style.backgroundColor = 'white'; 
    dlt.addEventListener('mouseover' , () => {
        dlt.style.background = 'lightGrey';
    });
    dlt.addEventListener('mouseout' , () => {
        dlt.style.background = 'white';
    });
    dlt.addEventListener('click', () => {
        deleteObj(list,dlt.id);
    });
    const edit = document.createElement('img');
    edit.src = 'circum-edit-icon.png'; 
    edit.alt = 'User  Image';
    edit.style.marginTop = 'px5';
    edit.id = obj.id;
    edit.style.width = '25px';
    edit.style.height = '25px';
    edit.style.backgroundColor = 'white';
    edit.addEventListener('mouseover' , () => {
    edit.style.background = 'lightGrey';});
    edit.addEventListener('mouseout' , () => {
        edit.style.background = 'white';});
    edit.addEventListener('click', () => {
        name.value = list.childNodes[2].textContent.split(' : ')[0].trim(); 
        email.value = list.childNodes[2].textContent.split(' : ')[1].trim(); 
        deleteObj(list,edit.id);
    });
    list.id = obj.id;
    list.appendChild(edit);
    list.appendChild(dlt);
    list.appendChild(document.createTextNode(` ${obj.name} : ${obj.email} `));
    userList.appendChild(list);
    name.value = '';
    email.value = '';
}

function deleteObj(list, id){
    let dataFromLocal = JSON.parse(localStorage.getItem("data"));
        for (let i = 0; i < dataFromLocal.length; i++){
            if(id == dataFromLocal[i].id){
        dataFromLocal.splice(i,1);
        localStorage.clear();
        userList.removeChild(list);
        localStorage.setItem("data",JSON.stringify(dataFromLocal));
            }
        }
}

function oldUser()
{
    let oldUsers = JSON.parse(localStorage.getItem("data"));
    localStorage.clear();
    for(let i = 0; i < oldUsers.length; i++){
        obj = oldUsers[i];
        if (localStorage.getItem("data") === null){
            arr = [];
        }
        else 
        {
            arr = JSON.parse(localStorage.getItem('data'));
        }
       
        oldDisplay(obj);
    }
}
function oldDisplay(obj){
    arr.push(obj);
    localStorage.setItem("data",JSON.stringify(arr));
    const list = document.createElement('li');
    const dlt = document.createElement('img');
    dlt.src = 'delete-icon.png';
    dlt.id = obj.id;
    dlt.alt = 'User  Image';
    dlt.style.marginLeft = '5px';
    dlt.style.width = '25px'; 
    dlt.style.height = '25px';
    dlt.style.backgroundColor = 'white'; 
    dlt.addEventListener('mouseover' , () => {
        dlt.style.background = 'lightGrey';
    });
    dlt.addEventListener('mouseout' , () => {
        dlt.style.background = 'white';
    });
    dlt.addEventListener('click', () => {
        deleteObj(list,dlt.id);
    });
    const edit = document.createElement('img');
    edit.src = 'circum-edit-icon.png'; 
    edit.alt = 'User  Image';
    edit.style.marginTop = 'px5';
    edit.id = obj.id;
    edit.style.width = '25px';
    edit.style.height = '25px';
    edit.style.backgroundColor = 'white';
    edit.addEventListener('mouseover' , () => {
    edit.style.background = 'lightGrey';});
    edit.addEventListener('mouseout' , () => {
        edit.style.background = 'white';});
    edit.addEventListener('click', () => {
        name.value = list.childNodes[2].textContent.split(' : ')[0].trim(); 
        email.value = list.childNodes[2].textContent.split(' : ')[1].trim(); 
        deleteObj(list,edit.id);
    });
    list.id = obj.id;
    list.appendChild(edit);
    list.appendChild(dlt);
    list.appendChild(document.createTextNode(` ${obj.name} : ${obj.email} `));
    userList.appendChild(list);
    name.value = '';
    email.value = '';
}

function UIDG() {
    const existingID = JSON.parse(localStorage.getItem("data"));
    if(existingID == null)
    {
        return idGenerator();
    }
    let id = idGenerator();
    for (let i = 0; i < existingID.length; i++)
    {
        if (id == existingID[i].id)
        {
            id = idGenerator();
        }
    }
    return id;
}

function idGenerator()
{
    let uniqueNumber = Math.floor(Math.random() * 10000);
    return uniqueNumber.toString().padStart(4, '0');
}
