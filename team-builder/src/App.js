import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import MemberCard from './Components/MemberCard';

function App() {
  const [team, setTeam] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState({});

  function editMember(editedMember) {
    const tmpTeam = team.map(member => {
      if (member === memberToEdit) {
        return (editedMember);
      } else {
        return member;
      }
    })
    setTeam(tmpTeam);
  }

  return (
    <div className="App">
      <div id='FormWrapper'>
        <Form setTeam={setTeam} team={team} memberToEdit={memberToEdit} editMember={editMember} />
      </div>
      <div id='TeamWrapper'>
        {team.map((member) => {
          return (
            <MemberCard member={member} setMemberToEdit={setMemberToEdit} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
