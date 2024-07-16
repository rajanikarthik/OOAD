const IntChild=require('../Interfaces/InterfaceClass')


/*

All class related operations goes here


*/


module.exports.GetName = async function (req, res) {
	const _IntChild=new IntChild()
console.log("\n"+_IntChild.callChildGetName());
res.send(_IntChild.callChildGetName())
}
