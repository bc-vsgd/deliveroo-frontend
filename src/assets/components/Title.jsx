const Title = ({ data }) => {
  // data: data.data.meta

  const name = data.restaurant.name;
  const imgUrl = data.metatags.image;
  return (
    <div className="title-div sm-w90vw xs-col sm-row xs-mg-b-30 lg-mg-b-45 xs-mg-l-20 lg-mg-l-30">
      <img className="xs-w100vw sm-w40pc" src={imgUrl} alt="Photo" />
      <div className="stratos bold xs-28 lg-40 sm-w360 lg-w400">{name}</div>
    </div>
  );
};

export default Title;
