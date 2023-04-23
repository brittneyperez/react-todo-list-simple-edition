# CORE Assignment #10: **Todo List** (Simple Edition)

### **ABOUT**
Create a small React application to store and modify a list of tasks. Each task will have a text string as well as a completed property, which will be set to false initially. As you check off items, they should appear slashed out on the page. Using what you know about state and iterating through lists, render a list of items, and give the user the option to remove each item and add new ones. There are different ways to implement the remove function. One way to do it is using the built-in filter method. Filter returns a new array when invoked and is a great way to stay true to the functional nature of React.

---
For simplicity, the todo list can be built single handedly in the `App.js` without the need of components. However, when there are more complex features implemented, then components are strongly recommened.

---

## **In `App.js`** : Elaboration on Some Segments of Code

### **(1) Figure out what needs to be in state.**
Two things will change in state:
- the text input to add an item to the list, and
- the todo list item added that can be **read**, **updated**, and **deleted**.

    const [ newTodo, setNewTodo ] = useState("");
    const [ todoList, setTodoList ] = useState([]);

The state to manage the List will have defaulted to []. This is because if we were to use `.map()` to display an empty array, the array won't break our code. An empty array is essentially `null` without labeling as such since this is a state and changes to be possible.

Instead of mutating the state of the Todo List directly (`todoList.push(newTodo)`), we will add the newly created item (a primitive value) to an object (a nonprimitve value) to maintain the incoming data. And we can do this by creating an array by keeping what already exists (i.e., `...todoList`) and the new item (`newTodo`)—aka using a **spread function**.

To ensure that the input resets itself after submission, we add the `value={}` in the `<input>` tag so not only the state is refreshed, but also the front-end input box.

### **Displaying the List**
In order to display a list, we need to convert the items in the `newTodo` value into an array of `jsx` (html written in js) so it can be rendered. We can use `.map()` to do this.

    ["todo1", "todo2"]
    {[<div>todo1</div>, <div>todo2</div>]}

In the code above the strings stored in this array can be mapped into the divs to render a list in the html. 

In a the `.map()` function, a callback function—the first argument—executes with the first given string item is will iterate. Then in the second argument, the item iterated over will be given an **index**. The `return` statement can then render a div with the contents. Each div functions a child of a list to which it was rendered.

#### State
Each todo item manages their own state inside the object.