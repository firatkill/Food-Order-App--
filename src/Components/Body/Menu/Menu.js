import Card from "../../UI/Card/Card";
import MenuCSS from "./Menu.module.css";
import MenuItem from "./MenuItem";

function Menu(props) {
  const styled = MenuCSS;

  return (
    <Card className={styled.Container}>
      {props.menuItems.map((item) => {
        if (props.menuItems.indexOf(item) === props.menuItems.length - 1) {
          return (
            <MenuItem
              buttonState={props.buttonState}
              handleIncrement={props.handleIncrement}
              key={item.caption}
              food={item}
            />
          );
        } else {
          return (
            <>
              <MenuItem
                buttonState={props.buttonState}
                handleIncrement={props.handleIncrement}
                key={item.caption}
                food={item}
              />
              <hr key={item.name} />
            </>
          );
        }
      })}
    </Card>
  );
}

export default Menu;
