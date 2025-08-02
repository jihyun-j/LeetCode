/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    // 문장을 공백 기준으로 나누어 단어 배열로 만든다
    const arr1 = s1.split(' ')
    const arr2 = s2.split(' ')

    // 각 단어의 등장 횟수를 저장할 Map 생성
    const count = new Map()

    // 두 문장의 모든 단어를 순회하며 등장 횟수를 센다
    for(let word of [...arr1, ...arr2]){
        count.set(word, (count.get(word) || 0) + 1)  
    }

    // 등장 횟수가 1인 단어만 결과 배열에 추가한다 (한 문장에만 나타난 단어)
    const result = []
    for(const [word, freq] of count.entries()){
        if(freq === 1){
            result.push(word)
        }
    }
    return result
};