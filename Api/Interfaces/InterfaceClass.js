const classChild=require('../Model/ChildClass')
/*
This is to call db and assign value to the class member as required
*/
class IntChild {
  constructor(){
  	
  }
  callChildGetName(){
  	const _classChild=new classChild();
  	return _classChild.getName();
  }
}

module.exports=IntChild;

