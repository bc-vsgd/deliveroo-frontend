import { nanoid } from "nanoid";

const MenusList = ({ title, data }) => {
  // data: menus array
  //   console.log(data);

  return (
    <div className="menus-list-div xs-mg-lr-20 xs-mg-b-30 lg-mg-b-40 lg-mg-l-30">
      <h2 className="bold xs-18 sm-22">{title}</h2>
      <div className="menus-div xs-col xl-wrap">
        {data.map((menu, index) => {
          //   console.log(menu.image.url);
          return (
            <div className="common-brd-F5F5F5 xl-w48pc " key={nanoid()}>
              <div className="common-row common-gap-15 common-pad-15">
                <div className="common-col  common-gap-10">
                  <div className="bold common-16">{menu.name}</div>
                  <div className="common-col-585C5C common-14 common-lh-19">
                    {menu.description}
                  </div>
                  <div className=" common-col-585C5C xs-14 sm-16">
                    {menu.price.formatted}
                  </div>
                </div>
                <div>
                  <img src={menu.image.url} alt={menu.image.altText} />
                </div>
                <button className="add-button">+</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenusList;
