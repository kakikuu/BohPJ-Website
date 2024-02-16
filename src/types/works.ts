export type WorksPosts = {
  workstitle: string;
  workoverview: string;
  slidedata: {
    metadata: {
      tags: string[];
    };
    sys: {
      space: any; // ここは適切な型に置き換えてください
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
      environment: any; // ここは適切な型に置き換えてください
      revision: number;
      locale: string;
    };
    fields: {
      title: string;
      description: string;
      file: any; // ここは適切な型に置き換えてください
    };
  };
};
