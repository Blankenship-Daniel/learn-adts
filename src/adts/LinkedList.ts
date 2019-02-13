import { Node } from "./Node";

export class LinkedList<t> {
  public length: number = 0;
  private head: Node<t>;

  public append(elem: any): void {
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

  public removeAt(pos: number): t | null {
    if (pos < 0 || pos >= this.length) {
      return null;
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
    if (pos >= 0 || pos >= this.length) {
      return false;
    }
    let current: Node<t> = this.head;
    let index: number = 0;
    let previous = current;
    const node = new Node<t>();
    node.elem = elem;

    this.length++;
    if (pos === 0) {
      node.next = current;
      this.head = node;
      return true;
    }
    while (index++ < pos) {
      previous = current;
      current = current.next;
    }
    node.next = current;
    previous.next = node;
    return true;
  }
}
