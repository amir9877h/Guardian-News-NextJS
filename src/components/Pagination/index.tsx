"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import styles from "./pagination.module.scss";

interface PaginationProps {
  totalResults: number;
  currentPage?: number;
  pageSize: number;
}

const Pagination = ({
  totalResults = 0,
  pageSize = 10,
  currentPage = 1,
}: PaginationProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const totalPages = Math.max(1, Math.ceil(totalResults / pageSize));

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const showMax = 5; // Maximum number of page buttons to show

    if (totalPages <= showMax) {
      // Show all pages if total pages are less than max
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show limited pages with ellipsis
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push("...");
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <div className={styles.pagination}>
      <Link
        href={createPageURL(currentPage - 1)}
        className={`${styles.pageLink} ${
          currentPage <= 1 ? styles.disabled : ""
        } ${styles.prevLink}`}
        aria-disabled={currentPage <= 1}
      >
        Previous
      </Link>

      <div className={styles.pageNumbers}>
        {getPageNumbers().map((pageNum, index) =>
          pageNum === "..." ? (
            <span key={`ellipsis-${index}`} className={styles.ellipsis}>
              ...
            </span>
          ) : (
            <Link
              key={`page-${pageNum}`}
              href={createPageURL(pageNum as number)}
              className={`${styles.pageLink} ${
                currentPage === pageNum ? styles.active : ""
              }`}
            >
              {pageNum}
            </Link>
          )
        )}
      </div>

      <Link
        href={createPageURL(currentPage + 1)}
        className={`${styles.pageLink} ${
          currentPage >= totalPages ? styles.disabled : ""
        }`}
        aria-disabled={currentPage >= totalPages}
      >
        Next
      </Link>
    </div>
  );
};

export default Pagination;
