const myForm = document.querySelector('#my-form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

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
            arr = JSON.parse(oldData);
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
        dlt.addEventListener('click', () => {
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




// let name = "john"
// undefined
// let email = "john@gmail.com"
// undefined
// let arr = [];
// undefined
// let obj = {};
// undefined
// obj.name = name;
// 'john'
// obj.email = email;
// 'john@gmail.com'
// arr.push(obj);
// 1
// arr;
// [{…}]0: {name: 'john', email: 'john@gmail.com'}length: 1ab_sa_ef: (...)adSlots: (...)args: (...)enable_isk_gating: (...)playerAds: (...)videoSkipJob_: (...)web_playlist_queue_multiple_skips_ks: (...)[[Prototype]]: Array(0)
// localStorage.setItem("data", JSON.stringify(arr));
// undefined
// localStorage.getItem("data");
// '[{"name":"john","email":"john@gmail.com"}]'
// let newData = localStorage.getItem("data");
// undefined
// newData[0];
// '['
// arr[0];
// {name: 'john', email: 'john@gmail.com'}
// newData = JSON.parse(newData);
// [{…}]
// newData[0;
// VM1526:1 Uncaught SyntaxError: Unexpected token ';'
// newData[0];
// {name: 'john', email: 'john@gmail.com'}