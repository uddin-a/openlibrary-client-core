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
    console.log("olid : ", olid);
    // TODO
  }

  public search(searchOpt: SearchOptions) {
    console.log("options: ", this.options);
    console.log("search options : ", searchOpt);
  }
}
