class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(root, root.val);

function invertTree(root) {
    if (root === null) return null;
    const left = invertTree(root.left);
    const right = invertTree(root.right);
    root.left = right;
    root.right = left;
    return root;
}

invertTree(root);

console.log(root.left.val);  // esperado: 3
console.log(root.right.val); // esperado: 2
console.log(root.val);  // esperado: 1

function maxDeth(root) {
    if (root === null) return 0;
    const left = maxDeth(root.left);
    const right = maxDeth(root.right);
    return Math.max(left, right) + 1;
}

console.log('Max depth:', maxDeth(root));  // esperado: 2