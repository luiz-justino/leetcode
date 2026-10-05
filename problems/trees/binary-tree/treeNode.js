class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(root, root.val);

const root2 = new TreeNode(3,
    new TreeNode(9),
    new TreeNode(20,
        new TreeNode(15),
        new TreeNode(7)
    )
)
console.log(root2, root2.val);

function maxDepth(root) {
    if (root === null) return 0;
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    return Math.max(left, right) + 1;
}

console.log(maxDepth(root))    // esperado: 2
console.log(maxDepth(root2)) // esperado: 3