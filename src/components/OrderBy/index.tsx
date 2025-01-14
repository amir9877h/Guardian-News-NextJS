import OrderByWrapper from "./OrderByWrapper";
import { sortOptions } from "@/constants";

const OrderBy = () => {
  return (
    <OrderByWrapper defaultOrder="newest">
      {sortOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </OrderByWrapper>
  );
};

export default OrderBy;
