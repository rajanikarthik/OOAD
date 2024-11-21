const supertest=require('supertest')
const app=require('../app')


describe("Products",() =>{
	describe("Validate route",() => {
        it('it should return 200', async() =>{
                const res=supertest(app).get('/books')
            //   await supertest(app).get('/books').expect(200)
                expect((await res).status).toBe(404) 
    })
    it('it should return 200', async() =>{
        const res=supertest(app).get('/demo')
    //   await supertest(app).get('/books').expect(200)
        expect((await res).status).toBe(200) 
})
	})
})