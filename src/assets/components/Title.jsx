const Title = ({ data }) => {
  // data: data.data.meta
  console.log(data);
  const name = data.restaurant.name;
  const imgUrl = data.metatags.image;
  return (
    <div className="title-div">
      <div>
        <img src={imgUrl} alt="Photo" />
      </div>
      <div>
        <div>{name}</div>
      </div>
    </div>
  );
};

export default Title;
