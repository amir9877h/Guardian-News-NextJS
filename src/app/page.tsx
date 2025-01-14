import NewsList from "@/components/NewsList";
import { newsService } from "@/services/api";

export const revalidate = 3600; // revalidate every hour

export default async function Home() {
  const newsResponse = await newsService.getNews();

  return (
    <div className="bg-background">
      <NewsList newsList={newsResponse.response.results} />
    </div>
  );
}
