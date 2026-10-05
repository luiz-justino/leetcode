function sum(root) {
  if (root === null) return 0          // 1. caso base
  const l = sum(root.left)             // 2. confia que funciona
  const r = sum(root.right)
  return root.val + l + r              // 3. combina
}

const root = {
  val: 1,
  left: { val: 2, left: null, right: null },
  right: { val: 3, left: null, right: null },
};

console.log(sum(root)); // esperado: 6