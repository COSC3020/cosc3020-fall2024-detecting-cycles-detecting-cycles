// function hasCycle(graph) {
//     return false;
// }


function depthFirstSearch(graph, startNode, targetNode) { // note that graph will be an adjacency list
    let visited = [] 
    let path = []
    
    function depthFirstHelp(node){
        if (visited.includes(node)) return false;
        if (node === targetNode) {
          path.push(node);
          return true;
        }
        visited.push(node);
        path.push(node);
        for(let i = 0; i < graph[node].length; i++){
            if(depthFirstHelp(graph[node][i]))
              return true;
        }
        path.pop(); // pop it because the target wasn't found on it's path
        return false;
    }
    
    depthFirstHelp(startNode);
    return path;
}
