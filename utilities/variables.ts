export enum Status {
  ALL = 'All',
  ONGOING = 'Ongoing',
  COMPLETED = 'Completed'
}

export enum NovelKind {
  NOVEL = 'Novel',
  MANGA = 'Manga'
}

export interface ILanguage {
  code: string;
  name: string;
  flag: string;
}
