import React, { useState } from 'react'

export default function OnChange() {
  let [country,setCountry] =useState('India')
  let [skills,setSkills] =useState(['Photoshop'])

  const handleOnChange = (event) =>{
    //event.target.value
    setCountry(event.target.value)
  }

  const handleCheckboxes = (event) =>{
    //spread operator : 
    skills = [...skills,event.target.value]
    setSkills(skills)
  }
  return (
    <div>
        <h1>{country}</h1>
        <select onChange={handleOnChange}>
            <option value={''}>Select Country </option>
            <option value={'India'}>India</option>
            <option value={'United States of Jaipur'}>United States of Jaipur</option>
            <option value={'Federal State of Delhi'}>Federal State of Delhi</option>
            <option value={'South Ex Island'}>South Ex Island</option>
            <option value={'Badarpur Ocean'}>Badarpur Ocean</option>
        </select>
        <hr />
        <h1>{skills.join(", ")}</h1>
        <ul>
            <li>
                <label><input type='checkbox' value={'HTML'} onChange={handleCheckboxes} /> HTML</label>
            </li>
            <li>
                <label><input type='checkbox' value={'CSS'} onChange={handleCheckboxes} /> CSS</label>
            </li>
            <li>
                <label><input type='checkbox' value={'JavaScript'} onChange={handleCheckboxes} /> JavaScript</label>
            </li>
            <li>
                <label><input type='checkbox' value={'jQuery'} onChange={handleCheckboxes} /> jQuery</label>
            </li>
            <li>
                <label><input type='checkbox' value={'BootStrap'} onChange={handleCheckboxes} /> BootStrap</label>
            </li>
            <li>
                <label><input type='checkbox' value={'React'} onChange={handleCheckboxes} /> React</label>
            </li>
        </ul>
    </div>
  )
}
