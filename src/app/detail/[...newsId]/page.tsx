import Image from "next/image";
import styles from "./news-detail.module.css";
import DOMPurify from "isomorphic-dompurify";
import { newsService } from "@/services/api";

export const revalidate = 3600; // revalidate every hour

type NewsDetailProps = {
  params: { newsId: string[] };
};

export default async function NewsDetail({ params }: NewsDetailProps) {
  const { newsId } = await params;
  const news = await newsService.getNewsDetail(newsId?.join("/"));

  const cleanContent = DOMPurify.sanitize(news?.fields?.body);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{news?.webTitle}</h1>
      <p className={styles.meta}>
        <span className={styles.sectionName}>{news?.sectionName}</span>
        <span className={styles.date} suppressHydrationWarning>
          {new Date(news?.webPublicationDate).toLocaleString()}
        </span>
      </p>
      <div className={styles.imageWrapper}>
        <Image
          src={news?.fields.thumbnail}
          alt={news?.webTitle}
          fill
          className={styles.image}
          priority
        />
      </div>

      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: cleanContent }}
      />
      <a href={news.webUrl} target="_blank" rel="nofollow">
        Read this On Guardian News
      </a>
    </div>
  );
}
