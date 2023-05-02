const assert  = require('assert');

describe("Simple Calculation", ()=> {
    before(()=> {
        console.log('This will execcute once before all tasks')
    });

    after(()=> {
        console.log('This will execute once after all tasks')
    });

    describe("Test 1", ()=> {
        beforeEach(()=> {
            console.log("execute before every test");
        })

        it('Its returning 5 by adding 2 + 3', ()=> {
            assert.equal(2 + 2, 5);
        });

        it('Its returning 6 by multiplying 3 * 2', ()=> {
            assert.equal(2 * 3, 6);
        })
    });

    describe("Test 2", ()=> {
        beforeEach(()=> {
            console.log("execute before every test");
        })

        it('Its returning 6 by adding 3 + 3', ()=> {
            assert.equal(2 + 3, 5);
        });

        it('Its returning 8 by multiplying 4 * 2', ()=> {
            assert.equal(2 * 3, 6);
        })
    })
})