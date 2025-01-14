import CartContent from "./CartContent";
import RouteToDetail from "./RouteToDetail";
import { NewsCartProps } from "./type";

const NewsCart = (props: NewsCartProps) => {
  return (
    <RouteToDetail id={props.id}>
      <CartContent {...props} />
    </RouteToDetail>
  );
};

export default NewsCart;
