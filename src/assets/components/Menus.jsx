// Components
import MenusList from "./MenusList";

const Menus = ({ data, basket, setBasket }) => {
  // data: data.data.items
  const menusNames = data.filter((item) => {
    return item.name.includes("Menu");
  });
  const seriesMenus = menusNames.filter((item) => {
    return (
      (item.name.includes("SUB30") ||
        item.name.includes("SUB15") ||
        item.name.includes("Wrap") ||
        item.name.includes("Salade")) &&
      !item.name.includes("Submelt") &&
      !item.name.includes("My Way")
    );
  });
  const submeltsMenus = menusNames.filter((item) => {
    return item.name.includes("Submelt");
  });
  const myWayMenus = menusNames.filter((item) => {
    return item.name.includes("My Way");
  });

  return (
    <div>
      <MenusList
        title="Menus SERIES"
        data={seriesMenus}
        basket={basket}
        setBasket={setBasket}
      />
      <MenusList
        title="Menus SUBMELTS"
        data={submeltsMenus}
        basket={basket}
        setBasket={setBasket}
      />
      <MenusList
        title="Menus Sub My Way"
        data={myWayMenus}
        basket={basket}
        setBasket={setBasket}
      />
    </div>
  );
};

export default Menus;
