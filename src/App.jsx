import { useState } from "react"
import Section from "./Section"
import Input from "./Input"

function App() {
  const [personalInfo, setPersonalInfo] = useState({name: "John Doe", profession:"Accountant", email: "johndoe@example.com", phone: 123456789})
  return (
    <>
     <Section header="General Information"> 
        <Input label="Name" text={personalInfo.name} handleInput={(e) => setPersonalInfo({...personalInfo, name:e.target.value})} inputType="text"/>
        <Input label="Profession" text={personalInfo.profession} handleInput={(e) => setPersonalInfo({...personalInfo, profession:e.target.value})} inputType="text"/>
        <Input label="Email" text={personalInfo.email} handleInput={(e) => setPersonalInfo({...personalInfo, email:e.target.value})} inputType="email"/>
        <Input label="Phone" text={personalInfo.phone} handleInput={(e) => setPersonalInfo({...personalInfo, phone:e.target.value})} inputType="tel"/>
     </Section>
     <Section header="Education">
        <Input label/>
     </Section>
    </>
  )
}

export default App
