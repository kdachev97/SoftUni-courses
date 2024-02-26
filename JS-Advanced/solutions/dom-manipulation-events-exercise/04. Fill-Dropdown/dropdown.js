function addItem() {
    const [itemText, itemValue] = Array.from(document.querySelectorAll('input'));
    const menu = document.getElementById('menu');
    const option = document.createElement('option');
    option.textContent = itemText.value;
    option.value = itemValue.value;
    menu.appendChild(option);
    itemText.value = '';
    itemValue.value = '';
}