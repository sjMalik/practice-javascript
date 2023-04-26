function func1() {
    return {
      name: "Full Stack Tutorials"
    }
  }
  console.log(func1()); // {name: "Full Stack Tutorials"}

  function func2() {
    return;
    {
      name: "Full Stack Tutorials";
    }
  }
  console.log(func2()); // undefined