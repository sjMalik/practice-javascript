const timer1 = setTimeout(() => {
    console.log('timer1');
    const promise1 = Promise.resolve().then(() => {
      console.log('promise1')
    })
  }, 0)
  
  const timer2 = setTimeout(() => {
    console.log('timer2')
  }, 0)
  
  console.log('start')

  /**
   * Output
   * start
   * timer1
   * promise1
   * timer2
   */