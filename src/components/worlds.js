function Worlds(props, greet) {
  const { greet } = props.worlds;
  return (
    <div>
      {greet.map((id, title, body) => (
        <div key={id}>
          <p>{title}</p>
          <h2>{body}</h2>
        </div>
      ))}
    </div>
  );
}

export default Worlds;
