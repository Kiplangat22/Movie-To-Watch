document.addEventListener("DOMContentLoaded", function () {
    const list = document.querySelector("#movie-list ul")
    const forms = document.forms

    // delete and edit movies
    list.addEventListener("click", function (e) {
        if (e.target.className == 'delete') {
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        } else if (e.target.className == 'edit') {
            const li = e.target.parentElement;
            const movieName = li.querySelector('.name');
            const currentMovieName = movieName.textContent;
            
        const newName = prompt("Edit movie name:", currentMovieName);
            if (newName && newName.trim() !== "") {
                movieName.textContent = newName.trim();
            }
        }
    })

    //add movie
    const addMovieForm = forms['add-movie']
    addMovieForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // create elements
        const value = addMovieForm.querySelector('input[type="text"]').value;

        // check if the input is empty
        if (!value) {
            alert("Please enter a movie name!");
            return;
        }


        const li = document.createElement('li');
        const movieName = document.createElement('span')
        const editBtn = document.createElement('span')
        const deleteBtn = document.createElement('span')

        // adding content
        movieName.textContent = value;
        editBtn.textContent = 'Edit';
        deleteBtn.textContent = 'Delete';

        // adding classes
        movieName.classList.add('name');
        editBtn.classList.add('edit');
        deleteBtn.classList.add('delete');

        // append to DOM
        li.appendChild(movieName);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        list.appendChild(li);
        // reset the form
        addMovieForm.reset();
    })

})