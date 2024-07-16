interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}


const getDirections = (root: TreeNode | null, startValue: number, destValue: number): string =>{
  const mapSingleParent = {}
  const fillParent = (node: TreeNode, parent = null) => {
    if (!node) return
    mapSingleParent[node.val] = parent
    fillParent(node.left, node)
    fillParent(node.right, node)
  }
  fillParent(root)

  const findNode = (node: TreeNode, val: number): TreeNode | null => {
    let result = null
    if (!node) return null
    if (node.val === val) {
      result = node;
    }
    if (node.left && !result) {
      result = findNode(node.left, val)
    }
    if (node.right && !result) {
      result = findNode(node.right, val)
    }

    return result;
  }

  if (startValue === destValue)  return ''

  const startNode = findNode(root, startValue)
  const destNode = findNode(root, destValue)

  // start is child of dest
  if (findNode(destNode, startValue)) {
    let step = ''
    let currentNode = startNode
    while (currentNode.val !== destNode.val) {
      step += 'U'
      currentNode = mapSingleParent[currentNode.val]
    }

    return step
  }

  // Start is parent of dest
  if (findNode(startNode, destValue)) {
    let step = ''
    let currentNode = destNode
    while (currentNode.val !== startNode.val) {
      const parent = mapSingleParent[currentNode.val]
      const nextStep = parent?.left?.val === currentNode.val ? 'L' : 'R'
      step = nextStep + step

      currentNode = mapSingleParent[currentNode?.val]
    }

    return step
  }

  // Find the same parent
  const mapAllParent = {}
  const findAllParents = (node, relations = []) => {
    if(!node) return
    mapAllParent[node.val] = relations
    findAllParents(node.left, [...relations, node.val])
    findAllParents(node.right, [...relations, node.val])
  }
  findAllParents(root)

  const startParents = mapAllParent[startValue]
  const destParents = mapAllParent[destValue]
  const sharedParent = startParents.findLast(item => destParents.includes(item))

  let leftStep = ''
  let rightStep = ''
  let leftNode = startValue
  let rightNode = destValue

  const moveLeftNode = () => {
    if(leftNode === sharedParent) return
    leftStep += 'U'
    leftNode = mapSingleParent[leftNode]?.val || leftNode
  }

  const moveRightNode = () => {
    if(rightNode === sharedParent) return
    const parent = mapSingleParent[rightNode]
    const step = parent?.left?.val === rightNode ? 'L' : 'R'
    rightStep = step + rightStep
    rightNode = parent?.val || rightNode
  }

  while (leftNode !== sharedParent || rightNode !== sharedParent) {
    moveLeftNode()
    moveRightNode()
  }

  return leftStep + rightStep
};
