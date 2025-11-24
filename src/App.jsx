import { Fragment, useState } from "react"
import Section from "./Section"
import Input from "./Input"
import {replaceInfo, addEdu, deleteField, addWork, addSkill} from "./infoHelpers" 
import InputYear from "./InputYear"

function App() {
  const [personalInfo, setPersonalInfo] = useState({name: "John Doe", profession:"Accountant", email: "johndoe@example.com", phone: 123456789})
  const [summary, setSummary] = useState("");
  const [education, setEducation] = useState([{id: crypto.randomUUID(), degree: "BA Accounting", institution:"Mumbai University", yearStart:"2015", yearEnd:"2018"}])
  const [work, setWork] = useState([{id: crypto.randomUUID(), role: "Accountant", company:"AC Firm", dateStart:"2019-01-02", dateEnd:"2022-01-01", description:""}])
  const [skills, setSkills] = useState([{id: crypto.randomUUID(), name: ""}]);
  return (
    <>
     <Section header="General Information" className="general-info">
        <Input label="Name" text={personalInfo.name} handleInput={(e) => setPersonalInfo({...personalInfo, name:e.target.value})} inputType="text" placeholdText="Your Fullname"/>
        <Input label="Profession" text={personalInfo.profession} handleInput={(e) => setPersonalInfo({...personalInfo, profession:e.target.value})} inputType="text" placeholdText="Your Profession"/>
        <Input label="Email" text={personalInfo.email} handleInput={(e) => setPersonalInfo({...personalInfo, email:e.target.value})} inputType="email" placeholdText="(eg: name@example.com)"/>
        <Input label="Phone" text={personalInfo.phone} handleInput={(e) => setPersonalInfo({...personalInfo, phone:e.target.value})} inputType="tel" placeholdText="(eg: +35840123456)"/>
     </Section>
     <Section header="Summary" className="summary">
      <textarea placeholder="Write a brief summary about yourself" cols="37" rows="6" onChange={(e) => setSummary(e.target.value)} value={summary}></textarea>
     </Section>
     <Section className="education" header="Education">
        {education.map((edu) => {
          return (
             <div className="cards" key={edu.id}>
               <Input label="Degree" text={edu.degree} handleInput={(e) => setEducation(replaceInfo(education, edu.id, e.target.value, "degree"))} inputType="text" placeholdText="Field of study"/>
               <Input label="Institution" text={edu.institution} handleInput={(e) => setEducation(replaceInfo(education, edu.id, e.target.value, "institution"))} inputType="text" placeholdText="Name of Institution/University"/>
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
        <button onClick={() => setEducation(education.concat(addEdu()))}>Add Education</button>
     </Section>
     <Section className="work" header="Work Experience">
        {
          work.map(job => {
            return (
              <div className="cards" key={job.id}>
                <Input label="Job Title" text={job.role} handleInput={(e) => setWork(replaceInfo(work, job.id, e.target.value, "role"))} inputType="text" placeholdText="Your Job Title/Role"/>
                <Input label="Company" text={job.company} handleInput={(e) => setWork(replaceInfo(work, job.id, e.target.value, "company"))} inputType="text" placeholdText="Company name"/>
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
        <button onClick={() => setWork(work.concat(addWork()))}>Add Experience</button>
     </Section>
     <Section className="skills" header="Skills">
        {
          skills.map(skill => {
            return(
              <div className="cards skill-cards" key={skill.id}>
              <Input label="Skill" text={skill.name} handleInput={(e) => setSkills(replaceInfo(work, skill.id, e.target.value, "name"))} inputType="text" placeholdText="(eg: Excel)"/>
              <button className="skill-delete" onClick={(e) => {
                  const parent = e.currentTarget.parentNode
                  parent.classList.add("card-delete")
                  deleteField(setSkills, skills, skill.id)
                }}>Delete</button>
              </div> 
            )
          })
        }
        <button onClick={() => setSkills(skills.concat(addSkill()))}>Add Skill</button>
     </Section>
    </>
  )
}

export default App