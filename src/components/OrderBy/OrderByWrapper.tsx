"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./order-by.module.scss";

interface OrderByProps {
  defaultOrder?: string;
  children: React.ReactNode;
}

const OrderByWrapper = ({
  defaultOrder = "newest",
  children,
}: OrderByProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createSortURL = (orderValue: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("orderBy", orderValue);
    // Reset page when changing order
    params.set("page", "1");
    return `${pathname}?${params.toString()}`;
  };

  const currentOrder = searchParams.get("orderBy") || defaultOrder;

  return (
    <div className={styles.orderBy}>
      {/* <label htmlFor="sort-order" className={styles.label}>
        Sort by:
      </label> */}
      <select
        aria-label="Select Order"
        name="orderBy"
        id="sort-order"
        className={styles.select}
        value={currentOrder}
        onChange={(e) => {
          router.push(createSortURL(e.target.value));
        }}
      >
        {children}
      </select>
    </div>
  );
};

export default OrderByWrapper;
