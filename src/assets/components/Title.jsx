const Title = ({ data }) => {
  // data: data.data.meta
  console.log(data);
  const name = data.restaurant.name;
  const imgUrl = data.metatags.image;
  return (
    <div className="title-div sm-w90vw xs-col sm-row">
      <img className="xs-w100vw sm-w40pc" src={imgUrl} alt="Photo" />
      <div className="stratos bold xs-28 lg-40 sm-w360 lg-w400">{name}</div>
    </div>
  );
};

export default Title;
