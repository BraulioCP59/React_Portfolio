function Project ({/*props*/}) {
    return (
      <div>
        <div>
          <h1>{title.substr(0, 50)}</h1>
          <h3>{category}</h3>
          <p>{price}$</p>
          <div>{description.substr(0, 100)}</div>
        </div>
      </div>
    );
  }
  
  export default Project;