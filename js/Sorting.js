class Sorting{

	constructor(var Arr){
		this.i = 0;
		this.j = 0;
		this.Arr = Arr;
	}

	swap(var num1, var num2){
		var temp = num1;
		num1=num2;
		num2=num1;
		return [num1, num2];
	}

	selectionSort(){
		var mn = 0;
		var len = this.Arr.length;
		for(i =0;i<len-1;i++){
			mn=i;
			for(j=i+1;j<len;j++){
				if(this.Arr[j] < this.Arr[mn])
					mn=j;
			}
			[this.Arr[i], this.Arr[mn]]= swap(this.Arr[i], this.Arr[mn]);
		}
	}
}