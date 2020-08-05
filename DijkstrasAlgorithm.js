class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({val, priority})
        this.sort()
    }

    dequeue() {
        return this.values.shift()
    }

    sort() {
        this.values.sort((a,b) => a.priority - b.priority)
    }
}

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

    Dijkstra(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let smallest;
        let path = []; // to return at the end
        //build up initial state
        for (let vertex in this.adjacencyList) {
            if(vertex === start) {
                distances[vertex] = 0
                nodes.enqueue(vertex, 0)
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity)
            }

            previous[vertex] = null
        }
        //console.log(distances) Print initial distances. Start(vertex) will be 0 and rest is Infinity.

        //As long as there is something to visit
        while (nodes.values.length) {
            smallest = nodes.dequeue().val;
            if (smallest === finish) {
                // We ARE DONE BUILD UP PATH TO RETURN AT END
                while (previous[smallest]) {
                    path.push(smallest)
                    smallest = previous[smallest];
                }
                break;
            }
            if (smallest || distances[smallest] !== Infinity) {
                for ( let neighbor in this.adjacencyList[smallest]) {
                    //find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    // console.log(nextNode)
                    // console.log(neighbor)
                    // console.log(this.adjacencyList)

                    //calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if (candidate < distances[nextNeighbor]) {
                        //Updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;

                        //Updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;

                        //enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }

                }
            }
        }
        return path.concat(smallest).reverse()
    }
}


let wg = new WeightedGraphs();
wg.addVertex("A")
wg.addVertex("B")
wg.addVertex("C")
wg.addVertex("D")
wg.addVertex("E")
wg.addVertex("F")

wg.addEdge("A", "B", 4)
wg.addEdge("A", "C", 2)
wg.addEdge("B", "E", 3)
wg.addEdge("C", "D", 2)
wg.addEdge("C", "F", 4)
wg.addEdge("D", "E", 3)
wg.addEdge("D", "F", 1)
wg.addEdge("E", "F", 1)

console.log(wg.Dijkstra("A", "E"))

// console.log(wg.adjacencyList)
//
