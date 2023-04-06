const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('start', () => {
    console.log('started');
  });

//   Run or fire the event
eventEmitter.emit('start');

//   Pass arguments to the event handler
eventEmitter.on('start', number => {
    console.log(`started ${number}`);
});
  
eventEmitter.emit('start', 23);

// Pass multiple arguments to the event handler
eventEmitter.on('start', (start, end) => {
    console.log(`started from ${start} to ${end}`);
});
  
eventEmitter.emit('start', 1, 100);