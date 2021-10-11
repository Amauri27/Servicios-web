/*fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json.title))*/

  const btnAdd = document.getElementById('btnCargar')
  btnAdd.addEventListener("click",()=>{

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        //console.log(json)
        let info = "";
        for (let i=0; i<json.length; i++)
        {
            //console.log('usuario', json[i])
            info+=`<option value = '${json[i].id}'> ${json[i].name}</option>`
        };
        const datos = document.getElementById("users");
        datos.innerHTML=info;
    })
  })

  const menuUsers = document.getElementById('users');
  menuUsers.addEventListener("change",()=>{
    const posts = document.getElementById('posts');
    let id = document.getElementById('users').value;
    fetch('https://jsonplaceholder.typicode.com/posts?userId='+id)
    .then((response) => response.json())
    .then((json) => {
      let datos = '';
      for (let i = 0; i<json.length; i++){
        datos +=`<div>
        <h3>${json[i].title}</h3>
        <p>${json[i].body}</p>
        <button id='btnVer'>Ver Comentarios</button>
        <div id='coments[i]'></div>
        </div>`
      };
      console.log(datos);
      posts.innerHTML=datos;
    });
  })

