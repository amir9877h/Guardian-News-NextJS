export type NewsListProps = {
  newsList: {
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
  }[];
};
