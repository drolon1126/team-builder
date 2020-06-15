import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';

export default function Form(props) {
  const [member, setMember] = useState({ name: '', email: '', role: '' });


  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    if (props.isEditing) {
      props.editMember(member);
      props.setIsEditing(false);
    } else {
      props.setTeam([...props.team, member]);
    }
    setMember({ name: '', email: '', role: '' });
  }


  const handleInputChange = (event) => {
    event.persist();
    setMember({ ...member, [event.target.name]: event.target.value })
  }

  function cancelEdit(event) {
    if (event) event.preventDefault();
    props.setIsEditing(false);
    setMember({ name: '', email: '', role: '' });
  }

  useEffect(() => {
    if (props.memberToEdit.name) {
      props.setIsEditing(true);
      console.log("this is the thing " + JSON.stringify(props.memberToEdit));
    }
    setMember(props.memberToEdit);
  }, [props.memberToEdit])

  if (props.isEditing) {
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <h3>{`Editing Team Member: ${props.memberToEdit.name}`}</h3>
          <TextField required margin="normal" variant="outlined" label="Name" name='name' placeholder='Timmy Appletooth' value={member.name} onChange={handleInputChange} />
          <TextField margin="normal" variant="outlined" label="Email" name='email' placeholder='example@email.com' value={member.email} onChange={handleInputChange} />
          <TextField margin="normal" variant="outlined" label="Role" name='role' placeholder='Nerf Herder' value={member.role} onChange={handleInputChange} />
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
          <TextField required margin="normal" variant="outlined" label="Name" name='name' placeholder='Timmy Appletooth' value={member.name} onChange={handleInputChange} />
          <TextField margin="normal" variant="outlined" label="Email" name='email' placeholder='example@email.com' value={member.email} onChange={handleInputChange} />
          <TextField margin="normal" variant="outlined" label="Role" name='role' placeholder='Nerf Herder' value={member.role} onChange={handleInputChange} />
        </div>
        <div>
          <button>Submit</button>
        </div>

      </form>
    )
  }
}