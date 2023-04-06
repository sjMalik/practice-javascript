const employee1 = {name: 'Surajit'};

const invite = function (greetings1, greetings2) {
    console.log(greetings1+ ' '+ this.name+ ', '+greetings2);
}

// bind
const inviteEmp1 = invite.bind(employee1);
inviteEmp1('Hello', 'How are you?');

// call
invite.call(employee1, 'Hello',  'How are you?');

// apply
invite.apply(employee1, ['Hello',  'How are you?'])