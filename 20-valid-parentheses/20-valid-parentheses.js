var isValid = function(s) {
    if(s.length%2!==0) return false;
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(")");
        } else if (s[i] === "[") {
            stack.push("]");
        } else if (s[i] === "{") {
            stack.push("}");   
        } else { // encountered a closing bracket
            
            if (s[i] !== stack.pop()) {
                return false;
            }
        }
    }
    return stack.length === 0;
    // T.C: O(N)
    // S.C: O(N)
}