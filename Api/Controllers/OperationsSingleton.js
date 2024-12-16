const DBSingleton=require('../Model/SingletonClass')


console.log("here")
const object1=DBSingleton.getInstance()

console.log(object1.config)

console.log(object1.getconfig())
