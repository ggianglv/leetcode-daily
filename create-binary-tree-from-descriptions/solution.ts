interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}

const createBinaryTree = (descriptions: number[][]): TreeNode | null => {
  const countParent = {}
  const mapChild = {}
  descriptions.forEach(item => {
    const child = item[1]
    if (!countParent[child]) {
      countParent[child] = 0
    }
    countParent[child]++

    const parent = item[0]
    if (!mapChild[parent]) {
      mapChild[parent] = {}
    }
    const isLeft = Boolean(item[2])
    if (isLeft) {
      mapChild[parent].left = item[1]
    } else {
      mapChild[parent].right = item[1]
    }
  })
  // Find the root node
  // @ts-ignore
  const rootNode = descriptions.find(item => !countParent[item[0]])[0]

  const getNode = (value) => {
    if(!mapChild[value]) return {
      val: value,
      left: null,
      right: null
    }

    return {
      val: value,
      left: mapChild[value].left ? getNode(mapChild[value].left) : null,
      right: mapChild[value].right ? getNode(mapChild[value].right) : null
    }
  }


  return getNode(rootNode)
};
