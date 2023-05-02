const expect = require('chai').expect;

describe("Testing with chai", ()=> {
    it('Its returing 4 when add 2 + 2', ()=> {
        expect(2 + 2).to.equal(4);
    });

    it('Its returning bollean as true', ()=> {
        expect(5 == 6).to.be.true;
    })

    it('Are both sentence matching', ()=> {
        expect('This is working').to.equal('This is working')
    })
})

