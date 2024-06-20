class Node {
  private children: Map<string, Node> = new Map();
  public isEndOfWord: boolean = false;
  constructor(public value: string) {}

  public getChild(ch: string) {
    return this.children.get(ch);
  }
  public addChild(ch: string, node: Node) {
    return this.children.set(ch, node);
  }
  public deleteChild(ch: string) {
    return this.children.delete(ch);
  }

  public hasChild() {
    return this.children.size !== 0;
  }
  public removeChild(ch: string) {
    return this.children.delete(ch);
  }
  public allChildren(): Node[] {
    return [...this.children.values()];
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
  public contains(input: string): boolean {
    if (input == null || undefined) throw new Error("wrong input");
    let current = this.root;
    for (let ch of input) {
      if (!current.getChild(ch)) return false;
      current = current.getChild(ch)!;
    }
    return current.isEndOfWord;
  }
  public remove(input: string, index = 0) {
    this.$remove(this.root, input, index);
  }

  public findWord(prefix: string) {
    const listOfWords: string[] = [];
    let lastNode = this.findLastNode(prefix);

    this.$findWord(lastNode!, prefix, listOfWords);
    return listOfWords;
  }

  private $findWord(root: Node, prefix: string, list: string[]) {
    if (root == null) return;

    if (root.isEndOfWord) list.push(prefix);

    for (let x of root.allChildren()) {
      this.$findWord(x, prefix + x.value, list);
    }
  }

  private findLastNode(prefix: string) {
    if (prefix == null) return;

    let current = this.root;
    for (let x of prefix) {
      let child = current.getChild(x);
      if (child == null) return null;
      current = child;
    }
    return current;
  }

  private $remove(root: Node, input: string, index: number) {
    if (index == input.length) {
      root.isEndOfWord = false;
      return;
    }

    const ch = input[index];
    const child = root.getChild(ch);
    if (child == null) return;

    this.$remove(child, input, index + 1);

    if (!child.hasChild() && !child.isEndOfWord) {
      root.removeChild(ch);
    }
  }
}

export default Tries;
