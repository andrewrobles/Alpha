const Link = (props) => {
  return (
    <div>
      <a className="App-link" href={`/${props.index}`}>
        Psalm {props.index}
      </a>
    </div>
  );
};

export default Link;
