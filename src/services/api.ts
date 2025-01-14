import axios from "axios";

// Create axios instance with default config
const newsApi = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_NEWS_API_URL || "https://content.guardianapis.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interface for the news response
interface NewsArticle {
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  isHosted: boolean;
  fields: {
    headline: string;
    thumbnail: string;
    trailText: string;
  };
}

interface NewsResponse {
  response: {
    status: string;
    userTier: string;
    total: number;
    startIndex: number;
    pageSize: number;
    currentPage: number;
    pages: number;
    orderBy: string;
    results: NewsArticle[];
  };
}

// API methods
export const newsService = {
  // Get all news
  getNews: async (
    page: number = 1,
    pageSize: number = 10,
    orderBy: string = "newest"
  ) => {
    try {
      const response = await newsApi.get<NewsResponse>("/search", {
        params: {
          "api-key": process.env.NEXT_PUBLIC_GUARDIAN_API_KEY,
          page: page,
          "page-size": pageSize,
          "show-fields": "headline,thumbnail,trailText",
          "order-by": orderBy,
        },
      });

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("News API Error:", error.response?.data || error.message);
      }
      throw error;
    }
  },

  // Get news by section
  getNewsBySection: async (
    section: string,
    page: number = 1,
    pageSize: number = 10,
    orderBy: string = "newest"
  ) => {
    try {
      const response = await newsApi.get<NewsResponse>(`/search`, {
        params: {
          "api-key": process.env.NEXT_PUBLIC_GUARDIAN_API_KEY,
          section: section,
          page: page,
          "page-size": pageSize,
          "show-fields": "headline,thumbnail,trailText",
          "order-by": orderBy,
        },
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("News API Error:", error.response?.data || error.message);
      }
      throw error;
    }
  },

  // Search news
  searchNews: async (query: string, page: number = 1) => {
    try {
      const response = await newsApi.get<NewsResponse>("/search", {
        params: {
          "api-key": process.env.NEXT_PUBLIC_GUARDIAN_API_KEY,
          q: query,
          page: page,
          "show-fields": "headline,thumbnail",
          "order-by": "relevance",
        },
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("News API Error:", error.response?.data || error.message);
      }
      throw error;
    }
  },
};
