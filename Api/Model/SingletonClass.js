class ConfigurationManager{
	constructor(){
	this.config={};
	this.setconfig()
	}


	setconfig(){
	this.config={"server":"serveer.com","port":"3306"}
	Object.freeze(this.config)
	}
	getconfig(){
		return this.config
	}
}


class DBSingleton{
	constructor(){
		throw new error("Call DBSingleton.getInstance() to call")
	}

	static getInstance(){
		if(!DBSingleton.instance){
			DBSingleton.instance=new ConfigurationManager();
		}
		return DBSingleton.instance
	}
}

module.exports = DBSingleton

