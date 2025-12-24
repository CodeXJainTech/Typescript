// interface User{
//   name: string,
//   age: number
// }

// function sumOfAge(user1: User, user2: User){
//   return user1.age+ user2.age;
// }

// const age = sumOfAge({name: "AJ", age: 20}, {name: "DJ", age: 34});
// console.log(age);



/***pick****/
/*
interface User{
  name?: string,
  age: number,
  email: string
}

type userData = Pick<User, 'name' | 'email'>
const displayUserProfile = (user: userData) => {
  console.log(`Name: ${user.name}, Email: ${user.email}`);
};

displayUserProfile({name: "pinki",email: "ramu@gmail.com"});
*/



/***partial****/
/*
interface User {
    id: string;
    name: string;
    age: string;
    email: string;
    password: string;
};

type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

type UpdatePropsOptional = Partial<UpdateProps>

function updateUser(updatedProps: UpdatePropsOptional) {
    // hit the database tp update the user
}
updateUser({})
*/




/***readonly****/
/*
interface User {
  name: string;
  readonly age: number;
};

const user: User = {name: "AJ", age: 43};

// user.age = 43;
//or we can make whole type readonly via using
const user1: Readonly<User> = {name: "DJ", age: 32};
*/





/***records and map***/
//https://projects.100xdevs.com/tracks/ts-hard/ts-hard-5
/*
interface User {
  id: string;
  name: string;
}

type Users = Record<string, User>;

var users: Users = {
  'abc123': { id: 'abc123', name: 'John Doe' },
  'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};

users['pinkie'] = {id: 'fdsafa', name: 'gendiu'};
console.log(users['pinkie']);



//Javscript concept
interface User {
  id: string;
  name: string;
}

// Initialize an empty Map
const usersMap = new Map<string, User>();

// Add users to the map using .set
usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });

// Accessing a value using .get
console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }

*/





/***exclude***/
//just to remove some type from the object interface
/*
type Event = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<Event, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK
*/





