import NewsList from "@/components/NewsList";
import Pagination from "@/components/Pagination";
import { newsService } from "@/services/api";

export const revalidate = 3600; // revalidate every hour

type SectionProps = {
  params: { section: string };
  searchParams?: Promise<{
    page?: string;
    pageSize?: string;
    orderBy?: "newest" | "oldest" | "relevance";
  }>;
};

export default async function Section({
  params,
  searchParams = Promise.resolve({}),
}: SectionProps) {
  const sectionParam = await params;
  const searchP = await searchParams;

  const page = Number(searchP?.page) || 1;
  const pageSize = Number(searchP?.pageSize) || 10;
  const orderBy = searchP?.orderBy || "newest";
  const list = await newsService.getNewsBySection(
    sectionParam?.section,
    page,
    pageSize,
    orderBy
  );

  return (
    <div className="bg-background">
      <NewsList newsList={list.response.results} />
      <Pagination
        totalResults={list.response.total}
        currentPage={list.response.currentPage}
        pageSize={list.response.pageSize}
      />
    </div>
  );
}
