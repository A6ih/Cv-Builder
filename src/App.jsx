import { Fragment, useState } from "react"
import Section from "./Section"
import Input from "./Input"
import {replaceInfo, addEdu, deleteField, addWork} from "./infoHelpers" 
import InputYear from "./InputYear"

function App() {
  const [personalInfo, setPersonalInfo] = useState({name: "John Doe", profession:"Accountant", email: "johndoe@example.com", phone: 123456789})
  const [summary, setSummary] = useState("");
  const [education, setEducation] = useState([{id: crypto.randomUUID(), degree: "BA Accounting", institution:"Mumbai University", yearStart:"2015", yearEnd:"2018"}])
  const [work, setWork] = useState([{id: crypto.randomUUID(), role: "Accountant", company:"AC Firm", dateStart:"2019-01-02", dateEnd:"2022-01-01", description:""}])
  return (
    <>
     <Section header="General Information"> 
        <Input label="Name" text={personalInfo.name} handleInput={(e) => setPersonalInfo({...personalInfo, name:e.target.value})} inputType="text"/>
        <Input label="Profession" text={personalInfo.profession} handleInput={(e) => setPersonalInfo({...personalInfo, profession:e.target.value})} inputType="text"/>
        <Input label="Email" text={personalInfo.email} handleInput={(e) => setPersonalInfo({...personalInfo, email:e.target.value})} inputType="email"/>
        <Input label="Phone" text={personalInfo.phone} handleInput={(e) => setPersonalInfo({...personalInfo, phone:e.target.value})} inputType="tel"/>
     </Section>
     <Section header="Summary">
      <textarea placeholder="Write a brief summary about yourself" cols="37" rows="6" onChange={(e) => setSummary(e.target.value)} value={summary}></textarea>
     </Section>
     <Section className="education" header="Education">
        {education.map((edu) => {
          return (
             <div className="cards" key={edu.id}>
               <Input label="Degree" text={edu.degree} handleInput={(e) => setEducation(replaceInfo(education, edu.id, e.target.value, "degree"))} inputType="text"/>
               <Input label="Institution" text={edu.institution} handleInput={(e) => setEducation(replaceInfo(education, edu.id, e.target.value, "institution"))} inputType="text"/>
               <fieldset>
                <legend>Years</legend>
                <InputYear label="From" text={edu.yearStart} handleInput={(e) => setEducation(replaceInfo(education, edu.id, e.target.value, "yearStart"))} inputType="number"/>
                <InputYear label="To" text={edu.yearEnd} handleInput={(e) => setEducation(replaceInfo(education, edu.id, e.target.value, "yearEnd"))} inputType="number"/>
               </fieldset>
               <button onClick={(e) => {
                  const parent = e.currentTarget.parentNode
                  parent.classList.add("card-delete")
                  deleteField(setEducation, education, edu.id)
                }}>Delete</button>
            </div>
          )
        })}
        <button onClick={() => setEducation(education.concat(addEdu()))}>Add More</button>
     </Section>
     <Section className="work" header="Work Experience">
        {
          work.map(job => {
            return (
              <div className="cards" key={job.id}>
                <Input label="Job Title" text={job.role} handleInput={(e) => setWork(replaceInfo(work, job.id, e.target.value, "role"))} inputType="text"/>
                <Input label="Company" text={job.company} handleInput={(e) => setWork(replaceInfo(work, job.id, e.target.value, "company"))} inputType="text"/>
                <fieldset>
                <legend>Date</legend>
                  <InputYear label="From" text={job.dateStart} handleInput={(e) => setWork(replaceInfo(work, job.id, e.target.value, "dateStart"))} inputType="date"/>
                  <InputYear label="To" text={job.dateEnd} handleInput={(e) => setWork(replaceInfo(work, job.id, e.target.value, "dateEnd"))} inputType="date"/>
                </fieldset>
                <textarea value={job.text} onChange={(e) => setWork(replaceInfo(work, job.id, e.target.value, "description"))} placeholder="Description" rows="4" cols="36"></textarea>
                <button onClick={(e) => {
                  const parent = e.currentTarget.parentNode
                  parent.classList.add("card-delete")
                  deleteField(setWork, work, job.id)
                }}>Delete</button>
              </div>
            )
          })
        }
        <button onClick={() => setWork(work.concat(addWork()))}>Add More</button>
     </Section>
    </>
  )
}

export default App