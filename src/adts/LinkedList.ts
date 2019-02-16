import { Node } from "./Node";

export class LinkedList<t> {
  public length: number = 0;
  private head: Node<t>;

  public append(elem: t): void {
    const node: Node<t> = new Node();
    node.elem = elem;
    let current: Node<t>;

    this.length++;
    if (!this.head) {
      this.head = node;
      return;
    }
    current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  public removeAt(pos: number): t {
    if (this.length === 0) {
      throw new Error("Cannot remove from an empty list");
    }
    if (pos < 0 || pos >= this.length) {
      throw new Error(`Position ${pos} is out of range`);
    }
    let current: Node<t> = this.head;
    let previous: Node<t> = current;
    let index: number = 0;

    if (pos === 0) {
      this.head = current.next;
      return current.elem;
    }
    while (index++ < pos) {
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
    this.length--;
    return current.elem;
  }

  public insert(elem: t, pos: number): boolean {
    if (pos < 0 || pos > this.length) {
      throw new Error(`Position ${pos} is out of range`);
    }
    let current: Node<t> = this.head;
    let index: number = 0;
    let previous = current;
    const insertNode = new Node<t>();
    insertNode.elem = elem;

    this.length++;
    if (pos === 0) {
      insertNode.next = current;
      this.head = insertNode;
      return true;
    }
    while (index++ < pos) {
      previous = current;
      current = current.next;
    }
    insertNode.next = current;
    previous.next = insertNode;
    return true;
  }

  public toString(): string {
    let current: Node<t> = this.head;
    let data: string = "";
    while (current) {
      data += current.next ? `${current.elem}, ` : current.elem;
      current = current.next;
    }
    return data;
  }
}
