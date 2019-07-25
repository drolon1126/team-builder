import React from 'react';

export default function MemberCard(props) {
  return (
    <div>
      <div>
        <h1>Name: {props.member.name}</h1>
        <h3>Email: {props.member.email}</h3>
        <h3>Role: {props.member.role}</h3>
      </div>
      <button onClick={() => props.setMemberToEdit(props.member)}>Edit</button>
    </div>
  );
}