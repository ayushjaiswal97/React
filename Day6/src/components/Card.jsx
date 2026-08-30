const Card = (props) => {
  console.log(props);
  return (
    <div className="bg-white border-2 border-red-800 rounded-2xl px-5 py-5 w-fit text-black m-2">
      <h1 className="text-2xl font-semibold">
        {props.user} {props.age}
      </h1>
    </div>
  );
};

export default Card;
