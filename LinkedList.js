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
      this.length++;
    }
  }

}
