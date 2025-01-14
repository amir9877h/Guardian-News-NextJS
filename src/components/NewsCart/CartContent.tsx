import Image from "next/image";
import styles from "./news-cart.module.scss";
import { NewsCartProps } from "./type";

const CartContent = (props: NewsCartProps) => {
  const {
    className,
    description,
    publishedAt,
    sectionName,
    title,
    urlToImage,
  } = props;
  return (
    <div className={[styles.card, className].join(" ")}>
      {urlToImage && (
        <Image
          src={urlToImage}
          alt={title}
          width={500}
          height={300}
          className={styles.image}
        />
      )}

      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.info}>
          <span>{sectionName}</span>
          <span>{new Date(publishedAt).toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default CartContent;
