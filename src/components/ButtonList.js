import { BUTTON_LIST } from "../utils/constants";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex overflow-x-auto whitespace-nowrap m-2 scroll-smooth hide-scrollbar">
      {BUTTON_LIST.map((name) => {
        return <Button key={name} name={name} />;
      })}
    </div>
  );
};

export default ButtonList;
