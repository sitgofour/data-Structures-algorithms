class MaxBinaryHeap{
	constructor(){
		this.values = [];
	}
	insert(val){
		values.push(val);
		let childIndex = this.values.length - 1;
		let parentIndex = math.floor((childIndex-1)/2);
		while(childIndex > parentIndex){
			[values[childIndex], values[parentIndex]] = [values[parentIndex], values[childIndex]];
			  
		}
	}
	extractMax(){
		let lastValue = values[values.length-1];
		let oldMax = this.root;
		this.root = lastValue;
		values[values.length-1] = oldMax;
		
	}
}




