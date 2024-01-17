// Components
import MenusList from "./MenusList";

const Menus = ({ data }) => {
  // data: data.data.items
  const menusNames = data.filter((item) => {
    return item.name.includes("Menu");
  });
  //   console.log(menusNames);
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
  console.log("Series menus >>>>> ", seriesMenus);
  console.log("Submelt menus >>>>>> ", submeltsMenus);
  console.log("My way menus >>>> ", myWayMenus);

  return (
    // <div className="menus lg-w400">
    <div>
      <MenusList title="Menus SERIES" data={seriesMenus} />
      <MenusList title="Menus SUBMELTS" data={submeltsMenus} />
      <MenusList title="Menus Sub My Way" data={myWayMenus} />
    </div>
  );
};

export default Menus;
