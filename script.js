//This task is about implementing an infinite scroll feature, which is a popular feature in modern web applications. Here’s the general idea on how to approach this:
//
// First, you need to create a list with 10 items. This can be done using a simple for loop in JavaScript to append list items to your HTML list.
//
// To detect when the user has scrolled to the end of the list, you can use the scroll event. You can add an event listener to the window object that fires whenever the user scrolls.
//
// In the scroll event handler, you need to check if the user has reached the end of the list. This can be done by comparing the scroll height and client height of the list container with the scroll position.
//
// If the user has reached the end of the list, you can then append 2 more items to the list. Again, this can be done using a for loop to create and append list items.
//
// Remember, the key here is to break down the problem into smaller tasks and tackle them one by one. Start with creating and displaying the list, then move on to detecting the scroll position, and finally appending more items when the end of the list is reached.


let list = document.getElementById('infi-list');

for(let i = 1; i <= 10; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = 'Item ' + i;
    list.appendChild(listItem);
}