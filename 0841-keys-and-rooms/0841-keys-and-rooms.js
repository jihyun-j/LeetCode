/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let visited = new Set([0])
    let willVisit = [0]

    while(willVisit.length > 0){
        let room = willVisit.shift()
        for (let key of rooms[room]){
            if(!visited.has(key)){
                visited.add(key)
                willVisit.push(key)
            }
        }
    }
    return visited.size === rooms.length
};