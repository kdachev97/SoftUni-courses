function solve() {
    const addButton = document.getElementById('add');
    addButton.addEventListener('click', add);
    const taskInput = document.getElementById('task');
    const descriptionInput = document.getElementById('description');
    const dueDateInput = document.getElementById('date');
    const openSection = document.getElementsByClassName('orange')[0];
    const openSectionSibiling = openSection.parentElement.nextElementSibling;
    const inProgressSection = document.getElementsByClassName('yellow')[0];
    const inProgressSbiling = inProgressSection.parentElement.nextElementSibling;
    const completeSection = document.getElementsByClassName('green')[0];
    const completeSectionSibiling = completeSection.parentElement.nextElementSibling;

    function add(e) {
        e.preventDefault();
        if (taskInput.value !== '' && descriptionInput.value !== '' && dueDateInput.value !== '') {
            const article = document.createElement('article');
            const h3 = document.createElement('h3');
            h3.textContent = taskInput.value;
            const pDescription = document.createElement('p');
            pDescription.textContent = `Description: ${descriptionInput.value}`;
            const pDueDate = document.createElement('p');
            pDueDate.textContent = `Due Date: ${dueDateInput.value}`;
            const buttonsDiv = document.createElement('div');
            buttonsDiv.setAttribute('class', 'flex');
            const startButton = document.createElement('button');
            startButton.setAttribute('class', 'green');
            startButton.textContent = 'Start';
            startButton.addEventListener('click', start);
            const deleteButton = document.createElement('button');
            deleteButton.setAttribute('class', 'red');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', deleteArticle);


            buttonsDiv.appendChild(startButton);
            buttonsDiv.appendChild(deleteButton);

            article.appendChild(h3);
            article.appendChild(pDescription);
            article.appendChild(pDueDate);
            article.appendChild(buttonsDiv);

            openSectionSibiling.appendChild(article);

            function start() {
                inProgressSbiling.appendChild(article);
                startButton.remove();
                const finishButton = document.createElement('button');
                finishButton.setAttribute('class', 'orange');
                finishButton.textContent = 'Finish';
                finishButton.addEventListener('click', finish);
                buttonsDiv.appendChild(finishButton);
            }

            function deleteArticle() {
                article.remove();
            }

            function finish() {
                completeSectionSibiling.appendChild(article);
                buttonsDiv.remove();
            }
        }
    }
}