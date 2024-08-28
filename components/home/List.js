import Item from "./Item";

const List = ({ data }) => {
  console.log("data====>", data);

  return (
    <div className="list">
      {data?.map((element, index) => (
        <Item item={element} key={index} />
      ))}
    </div>
  );
};

export default List;
