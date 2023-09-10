type HeaderProps = {
  title: string;
  totalTasks: number;
};

//interface Props {
//  title: string;
//  totalItems: number;
//}
const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <span>Total Tasks: {props.totalTasks}</span>
    </header>
  );
};

export default Header;
