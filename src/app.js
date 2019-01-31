// Common Js Module Syntax
import { http } from './http';
import { ui } from './ui';

// get the prosts upon page load
document.addEventListener('DOMContentLoaded', getPosts);

// Event Listener to Add Post
document.querySelector('.post-submit').addEventListener('click', addPost);

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



