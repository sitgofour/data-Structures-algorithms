

class MaxBinaryHeap {
    constructor () {
        this.heap = []
    }

    insert (value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    bubbleUp (index) {
        let childBigger = true;
        while (childBigger && newIdx > 0) {
            let newIdx = this.heap[this.heap.length - 1];
            let parentIdx = this.heap[Math.floor((index - 1) / 2)];

            if (this.heap[newIdx] > this.heap[parentIdx]) {
                [this.heap[newIdx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[newIdx]]; 
                newIdx = parentIdx;
            } else {
                childBigger = false;
            }
        }
    }

    sinkDown (parentIdx) {
        let swapMade = true;

        while (swapMade)
        let lChildIdx = (parentIdx * 2) + 1;
        let rChildIdx = (parentIdx * 2) + 2;
        
            if(this.heap[lChildIdx] && this.heap[rChildIdx]) {
                // let maxChild = Math.max(this.heap[lChildIdx], this.heap[rChildIdx]);
                // let maxChildIdx = indexOf(maxChild);

                if(this.heap[lChildIdx] > this.heap[rChildIdx]) {
                    let temp = this.heap[lChildIdx];
                    this.heap[lChildIdx] = this.heap[parentIdx];
                    this.heap[parentIdx] = temp;
                } else if(this.heap[lChildIdx] < this.heap[rChildIdx]) {
                    let temp = this.heap[rChildIdx];
                    this.heap[rChildIdx] = this.heap[parentIdx];
                    this.heap[parentIdx] = temp;
                }                    
            } else if (this.heap[lChildIdx]) {
                let temp = this.heap[lChildIdx];
                this.heap[lChildIdx] = this.heap[parentIdx];
                this.heap[parentIdx] = temp;                
            } else if (this.heap[rChildIdx]) {
                let temp = this.heap[rChildIdx];
                this.heap[rChildIdx] = this.heap[parentIdx];
                this.heap[parentIdx] = temp;                
            }        
    }


    extractMax () {
        // swap first and last element in heap and pop off last element, which is the max
        [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]];
        // grab max
        let maxElement = this.heap.pop();
        this.sinkDown(0);
        
        let lChildIdx = (parentIdx * 2) + 1;
        let rChildIdx = (parentIdx * 2) + 2;
        
        if(this.heap[lChildIdx] && this.heap[rChildIdx]) {
            // let maxChild = Math.max(this.heap[lChildIdx], this.heap[rChildIdx]);
            // let maxChildIdx = indexOf(maxChild);

            if(this.heap[lChildIdx] > this.heap[rChildIdx]) {

            }


        }
    }
}


