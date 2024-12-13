declare namespace NSBacklog {
  interface Category {
    displayOrder: number;
    id: number;
    name: string;
    projectId: number;
  }

  namespace PostPayload {
    interface Category extends GoogleAppsScript.URL_Fetch.Payload {
      name: string;
    }
  }
}
