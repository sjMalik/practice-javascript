const timer1 = setTimeout(() => {
    console.log('timer1');
  
  const timer3 = setTimeout(() => {
      console.log('timer3')
    }, 0)
  }, 0)
  
  const timer2 = setTimeout(() => {
    console.log('timer2')
  }, 0)
  
  console.log('start');

  /**
   * Output
   * start
   * timer1
   * timer2
   * timer3
   */