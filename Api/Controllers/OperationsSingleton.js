const DBSingleton=require('../Model/SingletonClass')



const object1=DBSingleton.getInstance()

console.log(object1.config)
