const EventEmitter = require('events');

export default () => {
  const store = new EventEmitter();

  store.state = {
    time: new Date(),
  };

  setInterval(() => {
    store.state.time = new Date();
    store.emit('change');
  }, 1000);

  return store;
};
