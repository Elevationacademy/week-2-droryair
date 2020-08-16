const counter = {
    count: 0,
  
    updateCounter: function () {
      this.count += 1;
    }
  };
  
  counter.updateCounter();
  counter.updateCounter();
  counter.updateCounter();
  
  alert(counter.count);


  // SPOT CHECK 1
  const person = {
    username: "Felicia",
    introduce: function(){
      console.log(`Hi, I'm ${this.username}`)
    }
  }
  
  person.introduce() //prints "Hi, I'm Felicia"