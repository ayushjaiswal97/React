const Card = (props) => {
  return (
    <div className="bg-white border-2 border-red-500 rounded h-20  px-5 py-5 w-40 text-black m-2">
      <h1 className="text-2xl font-semibold">{props.users}</h1>
    </div>
  );
};

export default Card;
