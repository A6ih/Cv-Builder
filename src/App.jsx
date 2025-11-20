import { Fragment, useState } from "react"
import Section from "./Section"
import Input from "./Input"
import {replaceEdu, addEdu} from "./educationHelper"
import InputYear from "./InputYear"

function App() {
  const [personalInfo, setPersonalInfo] = useState({name: "John Doe", profession:"Accountant", email: "johndoe@example.com", phone: 123456789})
  const [education, setEducation] = useState([{id: crypto.randomUUID(), degree: "BA Accounting", institution:"Mumbai University", yearStart:"2015", yearEnd:"2018"}])
  return (
    <>
     <Section header="General Information"> 
        <Input label="Name" text={personalInfo.name} handleInput={(e) => setPersonalInfo({...personalInfo, name:e.target.value})} inputType="text"/>
        <Input label="Profession" text={personalInfo.profession} handleInput={(e) => setPersonalInfo({...personalInfo, profession:e.target.value})} inputType="text"/>
        <Input label="Email" text={personalInfo.email} handleInput={(e) => setPersonalInfo({...personalInfo, email:e.target.value})} inputType="email"/>
        <Input label="Phone" text={personalInfo.phone} handleInput={(e) => setPersonalInfo({...personalInfo, phone:e.target.value})} inputType="tel"/>
     </Section>
     <Section className="education" header="Education">
        {education.map((edu) => {
          return (
             <div className="cards" key={edu.id}>
               <Input label="Degree" text={edu.degree} handleInput={(e) => setEducation(replaceEdu(education, edu.id, e.target.value, "degree"))} inputType="text"/>
               <Input label="Institution" text={edu.institution} handleInput={(e) => setEducation(replaceEdu(education, edu.id, e.target.value, "institution"))} inputType="text"/>
               <fieldset>
                <legend>Years</legend>
                <InputYear label="From" text={edu.yearStart} handleInput={(e) => setEducation(replaceEdu(education, edu.id, e.target.value, "yearStart"))} inputType="number"/>
                <InputYear label="To" text={edu.yearEnd} handleInput={(e) => setEducation(replaceEdu(education, edu.id, e.target.value, "yearEnd"))} inputType="number"/>
               </fieldset>
               <button onClick={(e) => {
                  const parent = e.currentTarget.parentNode
                  parent.classList.toggle("cards")
                  parent.classList.add("card-delete")
                  setTimeout(() => setEducation(education.filter(e => e.id !== edu.id)), 300)
                }}>Delete</button>
            </div>
          )
        })}
        <button onClick={() => setEducation(education.concat(addEdu()))}>Add More</button>
     </Section>
    </>
  )
}

export default App
