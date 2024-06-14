class Node {
  private children: Map<string, Node> = new Map();
  public isEndOfWord: boolean = false;
  constructor(private value: string) {}

  public getChild(ch: string) {
    return this.children.get(ch);
  }
  public addChild(ch: string, node: Node) {
    return this.children.set(ch, node);
  }
}

class Tries {
  private root: Node = new Node(" ");

  insert(input: string) {
    let current = this.root;
    for (let ch of input) {
      if (!current.getChild(ch)) current.addChild(ch, new Node(ch));
      current = current.getChild(ch)!;
    }
    current.isEndOfWord = true;
  }
}

export default Tries;
