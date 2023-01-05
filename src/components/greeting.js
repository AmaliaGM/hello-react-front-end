import React from 'react';

function Worlds(props) {
  return (
    <div>
      {props.worlds.map((id, title, body) => (
        <div key={id}>
          <p>{title}</p>
          <h2>{body}</h2>
        </div>
      ))}
    </div>
  );
}

export default Worlds;
