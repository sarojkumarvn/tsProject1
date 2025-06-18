import { useState } from "react";

interface MyButtonProps {
  text: string | number | boolean;
  onClick?: () => void;
  isClicked?: boolean;
}

interface Book {
  name: string;
  price: number;
}
const MyButton: React.FC<MyButtonProps> = (props) => {
  //implicit typing is like not giving the type it automatically detects
  // but explicit typing is like giving the type, the type will define as a interface before

  // const [value, setValue] = useState<Book>({
  //   name : "React",
  //   price : 100
  // });
  const [value, setValue] = useState<string>("");
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValue("");
    console.log(e);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleNameChange}
          type="text"
          placeholder="Enter your name"
        />
        <button
        type="submit"
        >Submit</button>
        <h1>Hello {value}</h1>
      </form>
    </div>
  );
};

export default MyButton;

{
  /* <h1 className="text-2xl "> name : {value.name}</h1>
      <h1 className="text-2xl "> price: {value.price}</h1>

      <button onClick={() => setValue({name: "Angular", price: 200})} className="btn btn-block">
        {props.text}
      </button> */
}
