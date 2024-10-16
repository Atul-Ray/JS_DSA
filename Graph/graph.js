
class Graph {
    constructor() {
        this.adjList={}
    }

addVertex(vertex){
    if(!this.adjList[vertex]){
        this.adjList[vertex]=[]
    }
}

addEdges(vertex1,vertex2){
this.adjList[vertex1].push(vertex2)
this.adjList[vertex2].push(vertex1)
}

}


const g1 =new Graph();

g1.addVertex("A")
g1.addVertex("B")
g1.addVertex("C")
g1.addVertex("D")

g1.addEdges("A","B")
g1.addEdges("B","C")


console.log(g1);










