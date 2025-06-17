interface MyButtonProps {
  text: string;
  isclicked?: boolean;
}
const MyButton: React.FC<MyButtonProps> = (props) => {
  return (
    <>
      <button
      className="btn btn-block"
      onClick={() => alert("clicked")}
      >{props.text}</button>
    </>
  );
};

export default MyButton;
