const MenusList = ({ title, data }) => {
  // data: menus array
  //   console.log(data);
  return (
    <div className="menus-list-div">
      <h2>{title}</h2>
      <div className="menus-div">
        {data.map((menu, index) => {
          //   console.log(menu.image.url);
          return (
            <div key={index}>
              <div>
                <div>{menu.name}</div>
                <div>{menu.description}</div>
                <div>{menu.price.formatted}</div>
              </div>
              <div>
                <img src={menu.image.url} alt={menu.image.altText} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenusList;
