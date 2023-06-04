interface Props {
  children?: string;
  color?: "primary" | "danger";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }) => {
  return (
    <Button className={"btn btn-" + color} onClick={onClick}>
      {children}
      Button
    </Button>
  );
};

export default Button;
