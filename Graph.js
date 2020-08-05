class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        }
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2)
            this.adjacencyList[vertex2].push(vertex1)
        } else {
            console.log("Vertex is Undefined")
        }
    }

    removeEdge(vertex1, vertex2) {
        // if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
        //
        //     let v2IndxInV1 = this.adjacencyList[vertex1].indexOf(vertex2)
        //     this.adjacencyList[vertex1].splice(v2IndxInV1, 1)
        //
        //     let v1IndxInV2 = this.adjacencyList[vertex2].indexOf(vertex1)
        //     this.adjacencyList[vertex2].splice(v1IndxInV2, 1)
        //
        // } else {
        //     console.log("Vertex is Undefined")
        // }

        //Alternate implementation
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );

        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );

        console.log(this.adjacencyList)
    }

    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
        console.log(this.adjacencyList)
    }

    depthFirstTraversalRecursive(vertex) {
        const endResult = [];
        const visitedVertices = {};
        const adjacencyList = this.adjacencyList;
        // function dfs(vertex) {
        //     if (!vertex) {
        //         return null;
        //     }
        //
        //     if (!visitedVertices[vertex]) {
        //         visitedVertices[vertex] = [];
        //         endResult.push(vertex);
        //         while (adjacencyList[vertex].length) {
        //             const adjacentVertex = adjacencyList[vertex].pop();
        //             dfs(adjacentVertex);
        //         }
        //     }
        // }
        // dfs(vertex);
        // return endResult;

        // //Alternate solution for the above
        (function dfs(vertex) {
            if (!vertex) return null;
            visitedVertices[vertex] = true;
            endResult.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if (!visitedVertices[neighbor]) {
                    return dfs(neighbor)
                }
            });
        })(vertex);
        return endResult;
    }

    depthFirstTraversalIterative(vertex) {
        const trackStack = [];
        const endResult = [];
        const visited = {};
        trackStack.push(vertex);
        visited[vertex] = true;
        let nextVertex;
        while (trackStack.length) {
            nextVertex = trackStack.pop();
            endResult.push(nextVertex);
            this.adjacencyList[nextVertex].forEach(neighbour => {
                if (!visited[neighbour]) {
                    visited[neighbour] = true;
                    trackStack.push(neighbour)
                }
            });
        }
        return endResult;
    }

    breathFirstSearch(vertex) {
        // const vertexQueue = [];
        // const visitedNodes = [];
        // const visited = {};
        // vertexQueue.push(vertex);
        // visited[vertex] = true;
        // let nextVertex;
        // while (vertexQueue.length) {
        //     nextVertex = vertexQueue.shift();
        //     visitedNodes.push(nextVertex);
        //     this.adjacencyList[nextVertex].slice().reverse().forEach(neighbor => {
        //         if (!visited[neighbor]) {
        //             visited[neighbor] = true;
        //             vertexQueue.push(neighbor)
        //         }
        //     })
        // }
        // return visitedNodes;

        const Queue = [];
        const result = [];
        const visited = {};
        Queue.push(vertex);
        visited[vertex] = true;
        let currentVertex;

        while (Queue.length) {
            currentVertex = Queue.shift();
            result.push(currentVertex)
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    Queue.push(neighbor)
                }
            })
        }
        return result;
    }
}


let g = new Graph();

// g.addVertex("Tokyo");
// g.addVertex("London");
// g.addVertex("Boston");
// g.addVertex("Nagpur");
//
// g.addEdge("Nagpur", "Boston")
// g.addEdge("Nagpur", "Tokyo")
//
// g.removeVertex("Nagpur")


// g.addEdge("nagpur", "Boston")
//

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")

// console.log(g.depthFirstTraversalRecursive('A'))
console.log("DFS => ",g.depthFirstTraversalIterative('A'))
console.log("BFS => ",g.breathFirstSearch('A'))

