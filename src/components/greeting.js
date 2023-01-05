import React from 'react';

const Worlds = ({ id, title, body }) => {
  return (
    <div>
      { worlds.map(() => (
        <div key={id}>
          <p>{title}</p>
          <h2>{body}</h2>
        </div>
      ))}
    </div>
  );
}

export default Worlds;
