import { LinkedList } from "./LinkedList";

describe("LinkedList", () => {
  describe("append(elem)", () => {
    it("should correctly append to list", () => {
      const linkedList = new LinkedList<number>();
      linkedList.append(1);
      linkedList.append(2);
      linkedList.append(3);
      linkedList.append(-1);
      expect(linkedList.toString()).toBe("1, 2, 3, -1");
    });
  });

  describe("insert(elem, pos)", () => {
    it("should correctly insert item in the list", () => {
      const linkedList = new LinkedList<number>();
      linkedList.append(1);
      linkedList.append(3);
      linkedList.insert(2, 1);
      expect(linkedList.toString()).toBe("1, 2, 3");
      linkedList.insert(0, 0);
      expect(linkedList.toString()).toBe("0, 1, 2, 3");
      linkedList.insert(4, 4);
      expect(linkedList.toString()).toBe("0, 1, 2, 3, 4");
    });

    it("should throw correct error when inserting elem out of range", () => {
      const linkedList = new LinkedList<number>();
      try {
        linkedList.insert(3, -1);
      } catch (e) {
        expect(e.message).toBe("Position -1 is out of range");
      }

      try {
        linkedList.insert(0, 0);
        linkedList.insert(1, 0);
        linkedList.insert(2, 0);
        linkedList.insert(3, 4);
      } catch (e) {
        expect(e.message).toBe("Position 4 is out of range");
      }
    });
  });

  describe("removeAt(pos)", () => {
    it("should remove node at a given pos", () => {
      const linkedList = new LinkedList<number>();
      linkedList.append(0);
      linkedList.append(1);
      linkedList.append(2);
      linkedList.append(3);
      linkedList.removeAt(3);
      expect(linkedList.toString()).toBe("0, 1, 2");
    });

    it("should throw correct error when removing node out of range", () => {
      const linkedList = new LinkedList<number>();
      try {
        linkedList.removeAt(0);
      } catch (e) {
        expect(e.message).toBe("Cannot remove from an empty list");
      }

      linkedList.append(1);
      try {
        linkedList.removeAt(-1);
      } catch (e) {
        expect(e.message).toBe("Position -1 is out of range");
      }

      try {
        linkedList.removeAt(1);
      } catch (e) {
        expect(e.message).toBe("Position 1 is out of range");
      }
    });
  });
});
