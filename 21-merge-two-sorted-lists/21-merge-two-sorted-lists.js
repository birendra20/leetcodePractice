/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    
    //iterative
    
    if(l1==null) return l2;
    if(l2==null) return l1
    
    if(l1.val>l2.val){
        let temp1=l1;
        l1=l2;
        l2=temp1;
        
    }
    let res =l1;
    while(l1!=null && l2!=null){
     let temp2=null; 
       while(l1!=null && l1.val<=l2.val){
           temp2=l1;
           l1=l1.next
       }
        
           temp2.next=l2
    
    //swap
      
    let temp3=l1;
        l1=l2;
        l2=temp3
    
    }

    return res
   
};