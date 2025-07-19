/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
    folder.sort()

    let idx = 1

    for(let i=1; i<folder.length; i++){
        const prevFolder = folder[idx - 1] 
        const currFolder = folder[i]

        if(!currFolder.startsWith(prevFolder + "/")){
            folder[idx] = folder[i]
            idx++
        }
    }

    return folder.slice(0, idx)
   
};