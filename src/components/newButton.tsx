import {useCounter} from "../provider/counter";

interface newButtonProps {
  text: string;
  onCLick?: () => void;
  isClicked?: boolean;
}

const NewButton: React.FC<newButtonProps> = (props) => {
   const context  = useCounter(); 
  return (
    <div>
      <h1 onClick={(e) => context?.setCount(context?.value + 1)}>{context?.value}</h1>
    </div>
  );
};

export default NewButton;
