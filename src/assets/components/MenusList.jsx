import { nanoid } from "nanoid";

const MenusList = ({ title, data }) => {
  // data: menus array
  //   console.log(data);

  return (
    <div className="menus-list-div xs-mg-lr-20 lg-mg-l-30">
      <h2 className="bold xs-18 sm-22">{title}</h2>
      <div className="menus-div xs-col xl-wrap">
        {data.map((menu, index) => {
          //   console.log(menu.image.url);
          return (
            <div key={nanoid()}>
              <div className="common-row xl-w45pc">
                <div className="common-col">
                  <div className="bold common-16">{menu.name}</div>
                  <div className="common-14">{menu.description}</div>
                  <div className="xs-14 sm-16">{menu.price.formatted}</div>
                </div>
                <div>
                  <img src={menu.image.url} alt={menu.image.altText} />
                </div>
              </div>
              {/* <div className="lg-w420"></div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenusList;
