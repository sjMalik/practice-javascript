const expect = require('chai').expect;

describe('Simple Calculation', ()=> {
    before(()=> {
        console.log('This will execute once before all the tasks\n')
    });
    beforeEach(()=> {
        console.log('This will execute before every test')
    });

    it('Its giving 4 whene we add 2+2', ()=> {
        expect(2 + 2).to.equal(4);
    });

    it('Its giving boolean value', ()=> {
        expect(2 === 2).to.be.true
    });

    it('Checking String length', ()=> {
        expect('Foo').to.have.lengthOf(3);
    });

    it('Checking object property', ()=> {
        let beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };
        expect(beverages).to.have.property('tea').with.lengthOf(3);
    });

    afterEach(()=> {
        console.log('This will execute after each test\n')
    });
    after(()=> {
        console.log('This will execute after all the tests');
    })
})