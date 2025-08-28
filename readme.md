1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer:
getElementById returns a single element by its unique id, getElementsByClassName returns a collection of elements that share a specific class name, 
and querySelector/querySelectorAll return the first or all elements that match a CSS selector.

2.How do you create and insert a new element into the DOM?
Answer:
To create a new element,we use document.createElement('tagname'). 
To insert it into the  (DOM):
parentElement.appendChild(newElement): Inserts the new element as the last child.
parentElement.insertBefore(newElement, referenceElement): Inserts the new element before a specified reference element.

3.What is Event Bubbling and how does it work?
Anser:
Event bubbling is a process where an event, like a click, first triggers on the innermost element and then "bubbles up" through its parent elements in the hierarchy, one by one, until it reaches the top of webpage.

4.What is Event Delegation in JavaScript? Why is it useful?
Answer:
When a button is clicked, the event bubbles up to the container, and the container's listener handles it for all the buttons.
It's useful because it's faster and uses less memory.

5.What is the difference between preventDefault() and stopPropagation() methods?
Answer:
preventDefault(): Stops the browser's default behavior for an event.
stopPropagation(): Stops the event from "bubbling up" the DOM tree to parent elements.
