export type WorksPosts = {
  workstitle: string;
  workoverview: string;
  slidedata: {
    metadata: {
      tags: string[];
    };
    sys: {
      space: any;
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
      environment: any;
      revision: number;
      locale: string;
    };
    fields: {
      title: string;
      description: string;
      file: any;
    };
  };
};

export type WorkFields = {
  newsoverview: string;
  title: string;
  description: string;
  file: any;
};

export type WorkContentfulEntry = {
  fields: WorkFields;
};
