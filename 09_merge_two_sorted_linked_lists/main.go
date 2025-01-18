package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func main() {
	linkedList1 := generateLinkedListFromArray([]int{1, 2, 4})
	linkedList2 := generateLinkedListFromArray([]int{1, 3, 4})
	merged := mergeTwoLists(linkedList1, linkedList2)
	print("ola", &merged)
	linkedList1 = generateLinkedListFromArray([]int{1, 1, 4})
	print("123", &merged)
}

func generateLinkedListFromArray(numbers []int) *ListNode {
	// Dummy head for convenience
	linkedList := &ListNode{Val: -1}
	pointer := linkedList
	for _, num := range numbers {
		temp := &ListNode{Val: num}
		pointer.Next = temp
		pointer = pointer.Next
	}
	return linkedList.Next
}
func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
	dummy := &ListNode{}
	node := dummy

	for list1 != nil && list2 != nil {
		if list1.Val < list2.Val {
			node.Next = list1
			list1 = list1.Next
		} else {
			node.Next = list2
			list2 = list2.Next
		}
		node = node.Next
	}

	node.Next = list1
	if list1 == nil {
		node.Next = list2
	}

	return dummy.Next
}
