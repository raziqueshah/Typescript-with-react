import React from "react";
import "./App.css";
// import RandomNumber from "./components/restrictions/RandomNumber";
// import Toast from "./components/templateLiterals/Toast";
// import Button from './components/html/Button';
// import Text from "./components/polymorphic/Text";
// import Private from "./components/auth/Private";
// import Profile from "./components/auth/Profile";
// import Counter from "./components/class/Counter";
// import User from "./components/context/User";
// import { UserContextProvider } from "./components/context/UserContext";
import List from "./components/generics/List";
// import DomRef from "./components/ref/DomRef";
// import MutableRef from "./components/ref/MutableRef";
// import Box from "./components/context/Box";
// import Counter from "./components/state/Counter";
// import { ThemeContextProvider } from "./components/context/ThemeContext";
// import Button from "./components/Button";
// import Container from "./components/Container";
// import Greet from "./components/Greet";
// import Heading from "./components/Heading";
// import Input from "./components/Input";
// import Oscar from "./components/Oscar";
// import Person from "./components/Person";
// import PersonList from "./components/PersonList";
// import LoggedIn from "./components/state/LoggedIn";
// import User from "./components/state/User";
// import Status from "./components/Status";

function App() {
  const personName = {
    first_Name: "Razique",
    last_Name: "Shah",
  };

  const nameLists = [
    {
      first_Name: "Razique",
      last_Name: "Shah",
    },
    {
      first_Name: "Amar",
      last_Name: "Khan",
    },
    {
      first_Name: "Faiz",
      last_Name: "Shaikh",
    },
  ];

  return (
    <div className="App">
      {/* <Greet name="Razique" messageCount={10} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameLists} />
      <Status status="success" />
      <Heading>Placeholder text</Heading>
      <Oscar><Heading>Oscar goes to Leonardo Dicpario!</Heading></Oscar>
      <Button handleClick={(event,id)=>{console.log("button clicked...", event, id) }}/>
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container style={{ border: '1px solid black', padding: '1rem'}} />
      <LoggedIn />
      <User /> */}
      {/* <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      {/* <UserContextProvider>
        <User />
      </UserContextProvider>
      <DomRef />
      <MutableRef />
      <Counter message="Hello TypeScript" />
      <Private isLoggedIn={true} component={Profile} /> */}
      <List items={["xman","Batman", "Superman"]} onClick={(item) => console.log(item)} />
      <List items={[1, 2, 3, 4, 5]} onClick={(item) => console.log(item)} />
      <List items={[{id:1, fname: 'razique', lname: 'shah'},{id:2, fname: 'raz', lname: 'shah'},{id:3, fname: 'yasir', lname: 'khan'}]} onClick={(item) => console.log(item)} /> 
      {/* <RandomNumber value={10}  isPossitive />
      {/* <Toast position="center" /> */}
      {/* <Button variant="primary" onClick={()=>console.log('click')}>Primary Button</Button> */}
      {/* <Text as='h1' size="lg">Heading</Text>
      <Text as='p' size="md">Paragraph</Text>
      <Text as='label' htmlFor='someId' size="sm" color="secondary">Label</Text> */}
    </div>
  );
}

export default App;
