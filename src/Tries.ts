class Node {
  public children: Map<string, Node> = new Map();
  public isEndOfWord: boolean = false;
  constructor(public value: string) {}
}

class Tries {
  private root: Node = new Node(" ");

  insert(input: string) {
    let current = this.root;
    for (let ch of input) {
      if (!current.children.get(ch)) current.children.set(ch, new Node(ch));
      current = current.children.get(ch)!;
    }
    current.isEndOfWord = true;
  }
}

export default Tries;
