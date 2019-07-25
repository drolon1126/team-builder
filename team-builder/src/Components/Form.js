import React, { useState, useEffect } from 'react';

export default function Form(props) {
  const [member, setMember] = useState({ name: '', email: '', role: '' });
  const [isEditing,setIsEditing] = useState(false);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    if(isEditing){
      props.editMember(member);
      setIsEditing(false);
    }else{
      props.setTeam([...props.team, member]);
    }
  }


  const handleInputChange = (event) => {
    event.persist();
    setMember({ ...member, [event.target.name]: event.target.value })
  }

  useEffect(()=>{
    setMember(props.memberToEdit); 
    setIsEditing(true); 
  },[props.memberToEdit])
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          <p>Name:</p>
          <input type='text' name='name' placeholder='Timmy Appletooth' value={member.name} onChange={handleInputChange} />
        </label>

        <label>
          <p>Email:</p>
          <input type='text' name='email' placeholder='example@email.com' value={member.email} onChange={handleInputChange} />
        </label>

        <label>
          <p>Role:</p>
          <input type='text' name='role' placeholder='Nerf Herder' value={member.role} onChange={handleInputChange} />
        </label>
      </div>
      <div>
        <button>Submit</button>
      </div>

    </form>
  )
}