class WeightedGraphs {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        }
    }

    addEdge(vertex1, vertex2, weight) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push({node:vertex2, weight})
            this.adjacencyList[vertex2].push({node:vertex1, weight})
        } else {
            return undefined;
        }
    }
}

let wg = new WeightedGraphs();
wg.addVertex("A")
wg.addVertex("B")
wg.addVertex("C")

console.log(wg.adjacencyList)

wg.addEdge("A", "B", 9)
wg.addEdge("A", "C", 5)
wg.addEdge("B", "C", 7)

console.log(wg.adjacencyList)
