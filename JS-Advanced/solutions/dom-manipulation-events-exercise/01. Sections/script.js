// Delegation
function create(words) {
  const content = document.getElementById('content');
  content.addEventListener('click', reveal);

  for (let word of words) {
    const div = document.createElement('div');
    const paragraph = document.createElement('p');
    paragraph.textContent = word;
    paragraph.style.display = 'none';

    div.appendChild(paragraph);
    content.appendChild(div);
  }

  function reveal(event) {
    if (event.target.tagName === 'DIV' && event.target !== content) {
      event.target.children[0].style.display = '';
    }
  }
}

// Normal
// function create(words) {
//    const content = document.getElementById('content');

//    for (let word of words) {
//       const div = document.createElement('div');
//       const paragraph = document.createElement('p');
//       paragraph.textContent = word;
//       paragraph.style.display = 'none';

//       div.appendChild(paragraph);
//       div.addEventListener('click', reveal);
//       content.appendChild(div);

//       function reveal(event) {
//          event.currentTarget.children[0].style.display = '';
//       }
//    }
// }

// Closure
// function create(words) {
//   const content = document.getElementById('content');

//   for (let word of words) {
//     const div = document.createElement('div');
//     const paragraph = document.createElement('p');
//     paragraph.textContent = word;
//     paragraph.style.display = 'none';

//     div.appendChild(paragraph);
//     div.addEventListener('click', reveal);
//     content.appendChild(div);

//     function reveal() {
//       paragraph.style.display = '';
//     }
//   }
// }

// Closure2
// function create(words) {
//   const content = document.getElementById('content');

//   for (let word of words) {
//     const div = document.createElement('div');
//     const paragraph = document.createElement('p');
//     paragraph.textContent = word;
//     paragraph.style.display = 'none';

//     div.appendChild(paragraph);
//     div.addEventListener('click', reveal.bind(null, paragraph));
//     content.appendChild(div);
//   }

//   function reveal(paragraph) {
//     paragraph.style.display = '';
//   }
// }