import React from 'react';

export default function MemberCard(props) {
  return (
    <div>
      <div>
        <h1>{props.member.name}</h1>
        <h3>{props.member.email}</h3>
        <h3>{props.member.role}</h3>
      </div>
      <button onClick={() => props.setMemberToEdit(props.member)}>Edit</button>
    </div>
  );
}