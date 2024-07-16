const classParent=require('./ParentClass')

class classChild extends classParent{

	constructor(){
		console.log("Calling superclass from child class " + super().getName());
	}
	getName(){
		return `My name ${this.name} is from child class and job is ${this.job}`;
	}
}

module.exports=classChild;