/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [] // 결과값 넣는 배열

    function backTracking(curr, open, close) { 
        if(curr.length === 2 * n){  // 현재까지 만들어진 괄호 개수가 (여는괄호 + 닫는괄호) * 2 같으면
            result.push(curr) // 만들어진 괄호는 모든 result에 push 함
            return
        }

        if(open < n) { // 여는 괄호가 n개보다 적으면
            // backTracking 함수를 실행하는데, n개보다 적으면
            // 여는 괄호를 n개까지 계속 호출 함
            backTracking(curr + "(", open + 1, close) 
            
        }

        if(close < open) { // 만약 닫는괄호가 여는괄호보다 적으면
            // 닫는 괄호를 여는 괄호와 같은 개수가 될 때까지 호출함
            backTracking(curr + ")", open, close + 1)
        }
        
    }


    backTracking("", 0, 0) // 백트랙킹 함수 초기 파라미터 (현재까지 만들어진 괄호, 여는 괄호 개수, 닫는 괄호 개수)
    return result
};