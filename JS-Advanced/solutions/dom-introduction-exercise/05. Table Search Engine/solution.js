function tableSearch() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
 
   function onClick() {
      let searchElement = document.getElementById('searchField');
      let rowElements = Array.from(document.querySelectorAll('tbody tr'));
 
      let searchText = searchElement.value;
 
      rowElements.forEach(el => {
         el.className = '';
      })
 
      rowElements.filter(el => {
         let values = Array.from(el.children);
         if (values.some(x => x.textContent.includes(searchText))) {
            el.className = 'select';
         }
      })
      searchElement.value = '';
   }
 }