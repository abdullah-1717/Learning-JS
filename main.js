const myForm = document.querySelector('#my-form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
init();
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
        obj.name = name.value;
       
        obj.email = email.value;
        
        console.log(arr);
        arr.push(obj);
        localStorage.setItem("data",JSON.stringify(arr));
        const list = document.createElement('li');
        const dlt = document.createElement('img');
        dlt.src = 'delete-icon.png'; 
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
        dlt.addEventListener('click', (e) => {
            console.log({e});
            userList.removeChild(list); 
        });
        const edit = document.createElement('img');
        edit.src = 'circum-edit-icon.png'; 
        edit.alt = 'User  Image';
        edit.style.marginTop = 'px5';
        edit.style.width = '25px';
        edit.style.height = '25px';
        edit.style.backgroundColor = 'white';
        edit.addEventListener('mouseover' , () => {
            edit.style.background = 'lightGrey';
        });
        edit.addEventListener('mouseout' , () => {
            edit.style.background = 'white';
        });
        edit.addEventListener('click', () => {
            name.value = list.childNodes[2].textContent.split(' : ')[0].trim(); 
            email.value = list.childNodes[2].textContent.split(' : ')[1].trim(); 
            userList.removeChild(list);
        });
        list.appendChild(edit);
        list.appendChild(dlt);
        list.appendChild(document.createTextNode(` ${name.value} : ${email.value} `));
        userList.appendChild(list);
        name.value = '';
        email.value = '';
    }
}

function init()
{
    let oldData = JSON.parse(localStorage.getItem("data"));
    console.log(oldData);
    for (let i = 0; i <oldData.length ; i++){
    const list = document.createElement('li');
    const dlt = document.createElement('img');
    dlt.src = 'delete-icon.png'; 
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
    dlt.addEventListener('click', (e) => {
        console.log({e});
        userList.removeChild(list); 
    });
    const edit = document.createElement('img');
    edit.src = 'circum-edit-icon.png'; 
    edit.alt = 'User  Image';
    edit.style.marginTop = 'px5';
    edit.style.width = '25px';
    edit.style.height = '25px';
    edit.style.backgroundColor = 'white';
    edit.addEventListener('mouseover' , () => {
        edit.style.background = 'lightGrey';
    });
    edit.addEventListener('mouseout' , () => {
        edit.style.background = 'white';
    });
    edit.addEventListener('click', () => {
        name.value = list.childNodes[2].textContent.split(' : ')[0].trim(); 
        email.value = list.childNodes[2].textContent.split(' : ')[1].trim(); 
        userList.removeChild(list);
    });
    list.appendChild(edit);
    list.appendChild(dlt);
    
    list.appendChild(document.createTextNode(` ${oldData[i].name} : ${oldData[i].email} `));
    userList.appendChild(list);
    
    }
   
}