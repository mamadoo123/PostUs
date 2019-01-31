// Common Js Module Syntax
import { http } from './http';
import { ui } from './ui';

// get the posts upon page load
document.addEventListener('DOMContentLoaded', getPosts);

// Event Listener For Add Post
document.querySelector('.post-submit').addEventListener('click', addPost);

// Event Listener For Edit State
document.querySelector('#posts').addEventListener('click', setEditState) 

// API REST functions
function getPosts(){
     http.get('http://localhost:3000/posts')
           .then(data => ui.renderPosts(data))
           .catch(err => console.log(err))
}

function addPost(){
     const title = document.querySelector('#title').value;
     const body  = document.querySelector('#body').value;
     const data = {
         title:title,
         body: body
        };

     http.post('http://localhost:3000/posts',data)
            .then(data => {
                ui.showAlert('New Post Added', 'alert alert-success') 
                ui.clearAllFields()
                getPosts()
             })
            .catch(err => console.log(err))
 }

// Set Edit State
function setEditState(e){
    const target = e.target.parentElement;
    if(target.classList.contains('edit')){
        const id = target.dataset.id;
        const title = target.previousElementSibling.textContent;
        const body =  target.previousElementSibling.previousElementSibling.textContent;
        const data = {id, title, body};
        ui.fillForm(data);
    }
}
