
class Book{
	constructor(title,author,genre,publication){
		this.id=Math.floor(Math.random() * 100).toString()
		this.title=title
		this.author=author
		this.genre=genre
		this.publication=publication
	}
}

module.exports=Book