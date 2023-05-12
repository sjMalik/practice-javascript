function counter(){
    var _counter = 0;

    return {
        add: (increment)=> {
            _counter += increment;
        },
        retrive: ()=> {
            return _counter;
        }
    }
};

const cnt = counter();
cnt.add(5);
console.log(cnt.retrive());