class Node {
	constructor(value) {
		this.value = value; // The value property can hold anything - String, number etc
		this.next = null; // The next propery is initially set to null
	}
}

class LinkedList {
  constructor() {
    this.head = null; // Points to the first node
    this.tail = null; // Points to the last node
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    // Check if exist exists or not
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  pop() {
    if (this.length === 0) return undefined;
    let current = this.head, previous = this.head;
    while(current.next) {
      previous = current;
      current = current.next;
    }
    this.tail = previous;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) this.head = this.tail = null;
    return current;
  }

  unshift(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  shift() {
    if (this.length === 0) return undefined;
    const currentHead = this.head;
    this.head = this.head.next;
    this.length--;
    return currentHead;
  }

  get(index) {
    if (index >= this.length || index < 0) return undefined;
    let currentHead = this.head;
    while(index > 0) {
      currentHead = currentHead.next
      index--;
    }
    return currentHead;
  }

  set(index, value) {
    const node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      this.push(value);
      return true;
    }
    if (index === 0) {
      this.unshift(value);
      return true;
    }
    const node = new Node(value);
    // Get the element BEFORE the specified index
    const previous = this.get(index - 1);
    const temp = previous.next;
    previous.next = node;
    node.next = temp;
    this.length++;
    return true;
  }

  remove(index, value) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length) return this.pop();
    if (index === 0) return this.shift();
    // Get the element BEFORE the specified index
    const previous = this.get(index - 1);
    const nodeToRemove = previous.next;
    previous.next = nodeToRemove.next;
    this.length--;
    return nodeToRemove;
  }
}

