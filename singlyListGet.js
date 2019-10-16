get(index){
	if(index < 0 || index >= this.length){
		return null;
	} else {
		let counter = 0;
		while(this.next){
			if(counter === index){
				return this;
			} else {
				this.head = this.head.next;
				counter++;
			}
		}
	}
}