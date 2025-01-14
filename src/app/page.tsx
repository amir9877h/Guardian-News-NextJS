import NewsList from "@/components/NewsList";
import Pagination from "@/components/Pagination";
import { newsService } from "@/services/api";

export const revalidate = 3600; // revalidate every hour

type HomeProps = {
  searchParams?: Promise<{
    page?: string;
    pageSize?: string;
    orderBy?: "newest" | "oldest" | "relevance";
    q?: string;
    section?: string;
  }>;
};

export default async function Home({
  searchParams = Promise.resolve({}),
}: HomeProps) {
  const params = await searchParams;

  const page = Number(params?.page) || 1;
  const pageSize = Number(params?.pageSize) || 10;
  const query = params?.q || "";
  const orderBy = params?.orderBy || query ? "relevance" : "newest";
  const section = params?.section || "";

  let newsResponse;

  if (query) {
    newsResponse = await newsService.searchNews(
      query,
      page,
      pageSize,
      section,
      orderBy
    );
  } else {
    newsResponse = await newsService.getNews(page, pageSize, orderBy);
  }

  return (
    <div className="bg-background">
      {query && (
        <h1 className="text-2xl font-bold text-center my-4">
          Search results for: {query}
        </h1>
      )}
      <NewsList newsList={newsResponse.response.results} />
      <Pagination
        totalResults={newsResponse.response.total}
        currentPage={newsResponse.response.currentPage}
        pageSize={newsResponse.response.pageSize}
      />
    </div>
  );
}
