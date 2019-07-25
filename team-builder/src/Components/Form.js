import React, { useState, useEffect } from 'react';

export default function Form(props) {
  const [member, setMember] = useState({ name: '', email: '', role: '' });
  

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    if(props.isEditing){
      props.editMember(member);
      props.setIsEditing(false);
    }else{
      props.setTeam([...props.team, member]);
    }
    setMember({ name: '', email: '', role: '' });
  }


  const handleInputChange = (event) => {
    event.persist();
    setMember({ ...member, [event.target.name]: event.target.value })
  }

  function cancelEdit(event){
    if (event) event.preventDefault();
    props.setIsEditing(false);
    setMember({ name: '', email: '', role: '' });
  }

  useEffect(()=>{
    if(props.memberToEdit.name){
      props.setIsEditing(true);
      console.log("this is the thing " +JSON.stringify(props.memberToEdit)); 
    }
    setMember(props.memberToEdit); 
  },[props.memberToEdit])
  
  if(props.isEditing){
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <h3>{`Editing Team Member: ${props.memberToEdit.name}`}</h3>
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
          <button onClick={cancelEdit}>Cancel</button>
        </div>
  
      </form>
    )
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <div>
        <h3>Add New Member</h3>
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
}