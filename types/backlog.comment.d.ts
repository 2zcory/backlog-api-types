declare namespace NSBacklog {
  interface Comment {
    changeLog: ChangeLog[];
    content: null | string;
    created: string;
    createdUser: User;
    id: number;
    issueId: number;
    notifications: Notification[];
    projectId: number;
    stars: any[];
    updated: string;
  }

  namespace Query {
    interface Comment extends GoogleAppsScript.URL_Fetch.Query {
      /**
       * number of records to retrieve(1-100) default=20 : count
       */
      count?: number;
      /**
       * maximum ID : maxId
       */
      maxId?: number;
      /**
       * minimum ID : minId
       */
      minId?: number;
      /**
       * “asc” or “desc” default=“desc” : order
       */
      order?: "asc" | "desc";
    }
  }
}
