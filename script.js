document.addEventListener("DOMContentLoaded", function () {
    const list = document.querySelector("#movie-list ul")
    const forms = document.forms

    // Add edit buttons to existing items
    const existingItems = list.querySelectorAll('li');
    existingItems.forEach(function(li) {
        // check if edit button already exists
        if (!li.querySelector('.edit')) {
            const editBtn = document.createElement('span');
            editBtn.textContent = 'Edit';
            editBtn.classList.add('edit');

            const buttonsDiv = li.querySelector('.buttons') || li.querySelector('div');
            const deleteBtn = buttonsDiv.querySelector('.delete');
            buttonsDiv.insertBefore(editBtn, deleteBtn);
        }
    });

    // delete and edit movie
    list.addEventListener("click", function (e) {
        if (e.target.className == 'delete') {
            const li = e.target.closest('li');
            li.parentNode.removeChild(li);
        } else if (e.target.className == 'edit') {
            // get li element
            const li = e.target.closest('li');
            const movieName = li.querySelector('.name');
            const currentMovieName = movieName.textContent;
            
            const newName = prompt("Edit movie name:", currentMovieName);
            if (newName && newName.trim() !== "") {
                movieName.textContent = newName.trim();
            }
        }
    })

    // add movie
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
        // Changed variable name for clarity
        const buttonsDiv = document.createElement('div');

        // add text content
        movieName.textContent = value;
        editBtn.textContent = 'Edit';
        deleteBtn.textContent = 'Delete';

        // add classes
        movieName.classList.add('name');
        editBtn.classList.add('edit');
        deleteBtn.classList.add('delete');
        buttonsDiv.classList.add('buttons');
        
        // append elements
        li.appendChild(movieName);
        buttonsDiv.appendChild(editBtn);
        buttonsDiv.appendChild(deleteBtn);
        li.appendChild(buttonsDiv);
        list.appendChild(li);
        
        // reset the form
        addMovieForm.reset();
    })

})