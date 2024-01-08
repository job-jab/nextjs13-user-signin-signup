const Cards = ({ name, gender }) => {
    return (
      <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
        <h3>{name}</h3>
        <p>{gender}</p>
      </div>
    );
  };
  
  export default Cards;
