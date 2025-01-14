import NewsList from "@/components/NewsList";
import Pagination from "@/components/Pagination";
import { newsService } from "@/services/api";

export const revalidate = 3600; // revalidate every hour

type HomeProps = {
  searchParams: {
    page?: string;
    pageSize?: string;
    orderBy?: "newest" | "oldest" | "relevance";
  };
};

export default async function Home({ searchParams }: HomeProps) {
  const page = Number(searchParams.page) || 1;
  const pageSize = Number(searchParams.pageSize) || 10;
  const orderBy = searchParams.orderBy || "newest";

  const newsResponse = await newsService.getNews(page, pageSize, orderBy);

  return (
    <div className="bg-background">
      <NewsList newsList={newsResponse.response.results} />
      <Pagination
        totalResults={newsResponse.response.total}
        currentPage={newsResponse.response.currentPage}
        pageSize={newsResponse.response.pageSize}
      />
    </div>
  );
}
