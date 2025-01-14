import React from "react";
import { NewsListProps } from "./types";
import styles from "./news-list.module.scss";
import NewsCart from "../NewsCart";

const NewsList = ({ newsList = [] }: NewsListProps) => {
  return (
    <div className={styles.container}>
      {newsList.map((news, index) => (
        <NewsCart
          className={styles[`item${index}`]}
          key={news.id}
          id={news.id}
          title={news.webTitle}
          description={news.fields.trailText}
          publishedAt={news.webPublicationDate}
          sectionName={news.sectionName}
          urlToImage={news.fields.thumbnail}
        />
      ))}
    </div>
  );
};

export default NewsList;
