function islegal(user: User){
  if(user.age >= 18){
    console.log(`${user.name} is eligible to vote`);
  }
}

islegal({
  name: "Alice",
  age: 21
});

//interface
interface User{
  name: string;
  age: number;
}
class employee implements User{
  name: string;
  age: number;

  constructor(n : string, a: number){
    this.name = n;
    this.age = a;
  }

  greet(s: string) : void {
    console.log(s);
  }
}
const emp = new employee("Bob", 30);
emp.greet("Hello everyone!");

//we also have "type". 
type person = {
  name: string,
  age: number
}
//What is difference between type and interface 
//Basic differnce is we can not implement class from type.
//Union(type)
type jobid = {
  name: string,
  id : string
}

type worker = person | jobid;
//intersection(type)
//interface can extend