import { ISOLanguageCode } from "./types/ISOLanguageCode";

export type OpenlibraryClientOptionType = {
  appName?: string;
  appVersion?: string;
  creatorContactEmail?: string;
  creatorContactPhone?: string;
};

export interface SearchOptions {
  query: {};
  fields: "";
  sort: {};
  lang: ISOLanguageCode | string;
}

export class OpenlibraryClient {
  private options: OpenlibraryClientOptionType;

  constructor(options?: OpenlibraryClientOptionType) {
    if (options) {
      this.options = options;
    } else {
      this.options = {};
    }
  }

  public getByOpenLibraryId(olid: string) {
    // TODO
  }

  public search(searchOpt: SearchOptions) {}
}
