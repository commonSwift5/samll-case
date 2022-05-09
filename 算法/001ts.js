//  树形算法
var list = [
	{ id: 1, pid: '' },
	{ id: 3, pid: 1 },
	{ id: 2, pid: 1 }
]

function tranListToTreeData(list, rootValue) {
	var arr = []
	list.forEach(item => {
		if (item.pid === rootValue) {
			const children = tranListToTreeData(list, item.id)
			// 先传入id :1 ,pid""
			if (children.length) {
				item.children = children
			}
			arr.push(item)
		}
	})

	return arr
}
const arr = tranListToTreeData(list, '')
console.log(arr)
