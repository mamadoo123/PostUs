class UI{
    constructor(){
        this.posts = document.querySelector('#posts')
        this.inputTitle = document.querySelector('#title');
        this.bodyInput = document.querySelector('#body');
        this.idInput = document.querySelector('#id');
        this.postSubmit = document.querySelector('.post-submit');
        this.forState = 'add';
    }

    renderPosts(posts){
        let output = '';
        posts.forEach(post => {
            output += `<div class = "card mb-3" >
                <div class="card-body">
                    <h4 class="card-title">${post.title}</h4>
                    <p class="card-text">${post.body}</p>
                    <a href="#" class="edit card-link" data-id=${post.id} >
                        <i class="fa fa-pencil"></i>
                    </a>
                    <a href="#" class="delete card-link" data-id=${post.id} >
                        <i class="fa fa-remove"></i>
                    </a>
                </div>
            </div>`
        })
        this.posts.innerHTML = output;
    }

    showAlert(msg, classList){
        this.clearAllFields();
        // create the div
        const div = document.createElement('div');
        // assign the div classes
        div.className = classList;
        // add the text node
        div.appendChild(document.createTextNode(msg));
        // Select the parent and its child Element 
        const container = document.querySelector('.postContainer');
        const posts = document.querySelector('#posts');
        // Insert the New Div after parent and before the child
        container.insertBefore(div, posts);

        // time out for the alert to disappear again
        setTimeout(()=>{
            this.clearAlert()
        }, 3000)
    }

    clearAlert(){
        if(document.querySelector('.alert')){
            document.querySelector('.alert').remove();
        }
    }

    clearAllFields(){
        this.inputTitle.value = '';
        this.bodyInput.value = '';
    }
}

export const ui = new UI();