// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// // Time Complexity: O(n), Linear - traverse linked list only once
// // Space Complexity: O(1), Constant - we will only have 2 pointers regardless of size of input; prev and temp


 var reverseList = function(head) {
 let previous = null;
    let current = head;   
    
    while (current!==null) {               
        let next = current.next  // References the next Node of given linked list
       current.next = previous;  // head.next point to previous Node, instead of the next Node of ll
        previous = current;        
        current = next;        
    }
    
    return previous;
 };

// Recursive solution
// var reverseList = function(head, previous = null) {
//     if (head === null) return previous;
//     let next = head.next;
//     head.next = previous;
//     return reverseList(next, head);
// };