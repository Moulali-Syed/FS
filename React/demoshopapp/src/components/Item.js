import './Item.css';
function Item(props) {
  return (
    <>
      {props.children}
      <p className="nirma">{props.name}</p>;
    </>
  );
}
export default Item;
