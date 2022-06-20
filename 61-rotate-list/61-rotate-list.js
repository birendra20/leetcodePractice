/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    
    
    //edge cases
    
    if(head==null || head.next ==null || k==0){
        return head;
    }
    
    //compute the length
    
    let cur =head;
    let len=1;
    while(cur.next!=null){
        len++;
        cur=cur.next
    }
    
    //go till that node
    
    cur.next=head;
    k=k%len;
    k=len-k;
    
    while(k-->0){
        cur =cur.next;
       
    }
     //make the node head and break connection
        head =cur.next;
        cur.next=null
        return head
    
};