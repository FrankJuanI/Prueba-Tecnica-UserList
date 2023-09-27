import "./UserRow.css";

function UserRow({ img, name }) {
  return (
    <div className="UserRow">
      <img className="user-img" src={img} alt="" />
      <h3 className="user-name">{name}</h3>
    </div>
  );
}

export { UserRow };
