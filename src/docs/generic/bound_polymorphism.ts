// d

// LeafNode, InnerNode는 TreeNode의 서브타입이고 상한한계다.
type TreeNode = { value: string }
type LeafNode = TreeNode & { isLeaf: true }
type InnerNode = TreeNode & { children: [TreeNode] | [TreeNode, TreeNode] }

// 아래와 같이 만들면 T 타입에 대한 상한경계가 없으므로 node.value를 읽는 행위가 안전하지 않아서 에러가 발생
// function mapNode<T>(node: T, f: (value: string) => string): T {
//   return {
//     ...node,
//     value: f(node.value),
//   };
// }

// 다음처럼 제네릭을 사용하지 않고 만들면 LeafNode나 InnerNode와 같은 TreeNode의 서브타입이 날라가버린다.
// function mapNode(node: TreeNode, f: (value: string) => string): TreeNode {
//   return {
//     ...node,
//     value: f(node.value),
//   };
// }

function mapNode<T extends TreeNode>(node: T, f: (value: string) => string): T {
  return {
    ...node,
    value: f(node.value),
  };
}

let tree: TreeNode = { value: 'tree' };
let leaf: LeafNode = { value: 'leaf', isLeaf: true };
let inner: InnerNode = { value: 'inner', children: [leaf] };

let tree1 = mapNode(tree, value => value.toUpperCase());
let leaf1 = mapNode(leaf, value => value.toUpperCase());
let inner1 = mapNode(inner, value => value.toUpperCase());
