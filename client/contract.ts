export type EndpointEntriesCreate_OutputOK = string;
export type EndpointEntriesRemove_OutputNO_CONTENT = void;
export type EndpointCollectionsList_OutputOK = {
  id: string;
  name: string;
  icon: string;
  amount: number;
}[];
export type EndpointCollectionsRemove_OutputNO_CONTENT = void;
export type EndpointLanguagesEnsure_OutputOK = {
  id: string;
  name: string;
  icon: string;
  code: string;
}[];
export type EndpointLanguagesRemove_OutputNO_CONTENT = void;
export type EndpointFormatsList_OutputOK = {
  id: string;
  name: string;
  icon: string;
  amount: number;
}[];
export type EndpointCountFileTypes_OutputOK = {
  id: string;
  name: string;
  amount: number;
}[];
export type EndpointCountLanguages_OutputOK = {
  id: string;
  name: string;
  icon: string;
  code: string;
  amount: number;
}[];
export type EndpointCountReadStatus_OutputOK = {
  id: string;
  name: string;
  icon: string;
  color: string;
  amount: number;
}[];

export interface Contract {
  entries: {
    create: EndpointEntriesCreate;
    getEpubMetadata: EndpointEntriesGetEpubMetadata;
    list: EndpointEntriesList;
    remove: EndpointEntriesRemove;
    toggleFavouriteStatus: EndpointEntriesToggleFavouriteStatus;
    toggleReadStatus: EndpointEntriesToggleReadStatus;
    update: EndpointEntriesUpdate;
  };
  collections: {
    create: EndpointCollectionsCreate;
    list: EndpointCollectionsList;
    remove: EndpointCollectionsRemove;
    update: EndpointCollectionsUpdate;
  };
  languages: {
    create: EndpointLanguagesCreate;
    ensure: EndpointLanguagesEnsure;
    remove: EndpointLanguagesRemove;
    update: EndpointLanguagesUpdate;
  };
  formats: {
    list: EndpointFormatsList;
  };
  count: {
    fileTypes: EndpointCountFileTypes;
    languages: EndpointCountLanguages;
    readStatus: EndpointCountReadStatus;
  };
  providers: {
    search: EndpointProvidersSearch;
    openLibrary: {
      covers: EndpointProvidersOpenLibraryCovers;
    };
    douban: {
      detail: EndpointProvidersDoubanDetail;
      cover: EndpointProvidersDoubanCover;
    };
    goodreads: {
      detail: EndpointProvidersGoodreadsDetail;
    };
    kingstone: {
      detail: EndpointProvidersKingstoneDetail;
    };
  };
}
export interface EndpointEntriesCreate {
  method: "post";
  input: {
    body?: EndpointEntriesCreate_InputBody;
  };
  output: {
    OK: EndpointEntriesCreate_OutputOK;
  };
  media: {file: {optional: true; multiple: false}; thumbnail: {optional: true; multiple: false}};
}
export interface EndpointEntriesCreate_InputBody {
  title?: string;
  authors?: string;
  edition?: string;
  languages?: string[];
  isbn?: string;
  publisher?: string;
  year_published?: number;
  page_count?: number;
  collection?: string;
  formats?: ("ebook" | "physical")[];
}
export interface EndpointEntriesGetEpubMetadata {
  method: "post";
  input: {};
  output: {
    OK: EndpointEntriesGetEpubMetadata_OutputOK;
  };
  media: {document: {optional: false; multiple: false}};
}
export interface EndpointEntriesGetEpubMetadata_OutputOK {
  isbn: string;
  title: string;
  authors: string;
  publisher: string;
  year_published: number;
}
export interface EndpointEntriesList {
  method: "get";
  input: {
    query?: EndpointEntriesList_InputQuery;
  };
  output: {
    OK: EndpointEntriesList_OutputOK;
  };
  media: null;
}
export interface EndpointEntriesList_InputQuery {
  page: string;
  /**
   * Collection ID of the collection
   */
  collection?: string;
  language?: string;
  favourite?: "true" | "false";
  readStatus?: "1" | "2" | "3";
  fileType?: string;
  format?: "ebook" | "physical";
  query?: string;
}
export interface EndpointEntriesList_OutputOK {
  page: number;
  totalPages: number;
  totalItems: number;
  items: {
    id: string;
    title: string;
    authors: string;
    md5: string;
    year_published: number;
    publisher: string;
    languages: string[];
    collection: string | null;
    extension: string;
    edition: string;
    size: number;
    word_count: number;
    page_count: number;
    isbn: string;
    formats: ("ebook" | "physical")[];
    file: string;
    thumbnail: string;
    is_favourite: boolean;
    time_started: string | null;
    time_finished: string | null;
    read_status: string;
    created: string;
    updated: string;
  }[];
}
export interface EndpointEntriesRemove {
  method: "post";
  input: {
    query?: EndpointEntriesRemove_InputQuery;
  };
  output: {
    NO_CONTENT: EndpointEntriesRemove_OutputNO_CONTENT;
  };
  media: null;
}
export interface EndpointEntriesRemove_InputQuery {
  id: string;
}
export interface EndpointEntriesToggleFavouriteStatus {
  method: "post";
  input: {
    query?: EndpointEntriesToggleFavouriteStatus_InputQuery;
  };
  output: {
    OK: EndpointEntriesToggleFavouriteStatus_OutputOK;
  };
  media: null;
}
export interface EndpointEntriesToggleFavouriteStatus_InputQuery {
  id: string;
}
export interface EndpointEntriesToggleFavouriteStatus_OutputOK {
  id: string;
  title: string;
  authors: string;
  md5: string;
  year_published: number;
  publisher: string;
  languages: string[];
  collection: string | null;
  extension: string;
  edition: string;
  size: number;
  word_count: number;
  page_count: number;
  isbn: string;
  formats: ("ebook" | "physical")[];
  file: string;
  thumbnail: string;
  is_favourite: boolean;
  time_started: string | null;
  time_finished: string | null;
  read_status: string;
  created: string;
  updated: string;
}
export interface EndpointEntriesToggleReadStatus {
  method: "post";
  input: {
    query?: EndpointEntriesToggleReadStatus_InputQuery;
  };
  output: {
    OK: EndpointEntriesToggleReadStatus_OutputOK;
  };
  media: null;
}
export interface EndpointEntriesToggleReadStatus_InputQuery {
  id: string;
}
export interface EndpointEntriesToggleReadStatus_OutputOK {
  id: string;
  title: string;
  authors: string;
  md5: string;
  year_published: number;
  publisher: string;
  languages: string[];
  collection: string | null;
  extension: string;
  edition: string;
  size: number;
  word_count: number;
  page_count: number;
  isbn: string;
  formats: ("ebook" | "physical")[];
  file: string;
  thumbnail: string;
  is_favourite: boolean;
  time_started: string | null;
  time_finished: string | null;
  read_status: string;
  created: string;
  updated: string;
}
export interface EndpointEntriesUpdate {
  method: "post";
  input: {
    query?: EndpointEntriesUpdate_InputQuery;
    body?: EndpointEntriesUpdate_InputBody;
  };
  output: {
    OK: EndpointEntriesUpdate_OutputOK;
  };
  media: {file: {optional: true; multiple: false}; thumbnail: {optional: true; multiple: false}};
}
export interface EndpointEntriesUpdate_InputQuery {
  id: string;
}
export interface EndpointEntriesUpdate_InputBody {
  title?: string;
  authors?: string;
  edition?: string;
  languages?: string[];
  isbn?: string;
  publisher?: string;
  year_published?: number;
  page_count?: number;
  collection?: string;
  formats?: ("ebook" | "physical")[];
}
export interface EndpointEntriesUpdate_OutputOK {
  id: string;
  title: string;
  authors: string;
  md5: string;
  year_published: number;
  publisher: string;
  languages: string[];
  collection: string | null;
  extension: string;
  edition: string;
  size: number;
  word_count: number;
  page_count: number;
  isbn: string;
  formats: ("ebook" | "physical")[];
  file: string;
  thumbnail: string;
  is_favourite: boolean;
  time_started: string | null;
  time_finished: string | null;
  read_status: string;
  created: string;
  updated: string;
}
export interface EndpointCollectionsCreate {
  method: "post";
  input: {
    body?: EndpointCollectionsCreate_InputBody;
  };
  output: {
    CREATED: EndpointCollectionsCreate_OutputCREATED;
  };
  media: null;
}
export interface EndpointCollectionsCreate_InputBody {
  name: string;
  icon: string;
}
export interface EndpointCollectionsCreate_OutputCREATED {
  id: string;
  name: string;
  icon: string;
}
export interface EndpointCollectionsList {
  method: "get";
  input: {};
  output: {
    OK: EndpointCollectionsList_OutputOK;
  };
  media: null;
}
export interface EndpointCollectionsRemove {
  method: "post";
  input: {
    query?: EndpointCollectionsRemove_InputQuery;
  };
  output: {
    NO_CONTENT: EndpointCollectionsRemove_OutputNO_CONTENT;
  };
  media: null;
}
export interface EndpointCollectionsRemove_InputQuery {
  id: string;
}
export interface EndpointCollectionsUpdate {
  method: "post";
  input: {
    query?: EndpointCollectionsUpdate_InputQuery;
    body?: EndpointCollectionsUpdate_InputBody;
  };
  output: {
    OK: EndpointCollectionsUpdate_OutputOK;
  };
  media: null;
}
export interface EndpointCollectionsUpdate_InputQuery {
  id: string;
}
export interface EndpointCollectionsUpdate_InputBody {
  name: string;
  icon: string;
}
export interface EndpointCollectionsUpdate_OutputOK {
  id: string;
  name: string;
  icon: string;
}
export interface EndpointLanguagesCreate {
  method: "post";
  input: {
    body?: EndpointLanguagesCreate_InputBody;
  };
  output: {
    CREATED: EndpointLanguagesCreate_OutputCREATED;
  };
  media: null;
}
export interface EndpointLanguagesCreate_InputBody {
  name: string;
  icon: string;
  code: string;
}
export interface EndpointLanguagesCreate_OutputCREATED {
  id: string;
  name: string;
  icon: string;
  code: string;
}
export interface EndpointLanguagesEnsure {
  method: "post";
  input: {
    body?: EndpointLanguagesEnsure_InputBody;
  };
  output: {
    OK: EndpointLanguagesEnsure_OutputOK;
  };
  media: null;
}
export interface EndpointLanguagesEnsure_InputBody {
  codes: string[];
}
export interface EndpointLanguagesRemove {
  method: "post";
  input: {
    query?: EndpointLanguagesRemove_InputQuery;
  };
  output: {
    NO_CONTENT: EndpointLanguagesRemove_OutputNO_CONTENT;
  };
  media: null;
}
export interface EndpointLanguagesRemove_InputQuery {
  id: string;
}
export interface EndpointLanguagesUpdate {
  method: "post";
  input: {
    query?: EndpointLanguagesUpdate_InputQuery;
    body?: EndpointLanguagesUpdate_InputBody;
  };
  output: {
    OK: EndpointLanguagesUpdate_OutputOK;
  };
  media: null;
}
export interface EndpointLanguagesUpdate_InputQuery {
  id: string;
}
export interface EndpointLanguagesUpdate_InputBody {
  name: string;
  icon: string;
  code: string;
}
export interface EndpointLanguagesUpdate_OutputOK {
  id: string;
  name: string;
  icon: string;
  code: string;
}
export interface EndpointFormatsList {
  method: "get";
  input: {};
  output: {
    OK: EndpointFormatsList_OutputOK;
  };
  media: null;
}
export interface EndpointCountFileTypes {
  method: "get";
  input: {};
  output: {
    OK: EndpointCountFileTypes_OutputOK;
  };
  media: null;
}
export interface EndpointCountLanguages {
  method: "get";
  input: {};
  output: {
    OK: EndpointCountLanguages_OutputOK;
  };
  media: null;
}
export interface EndpointCountReadStatus {
  method: "get";
  input: {};
  output: {
    OK: EndpointCountReadStatus_OutputOK;
  };
  media: null;
}
export interface EndpointProvidersSearch {
  method: "get";
  input: {
    query?: EndpointProvidersSearch_InputQuery;
  };
  output: {
    OK: EndpointProvidersSearch_OutputOK;
  };
  media: null;
}
export interface EndpointProvidersSearch_InputQuery {
  q: string;
  page: string;
  provider?: "openlibrary" | "goodreads" | "douban" | "kingstone";
}
export interface EndpointProvidersSearch_OutputOK {
  page: number;
  totalPages: number;
  totalItems: number;
  results: {
    key: string;
    title: string;
    authors: string;
    publisher: string;
    year: number;
    isbn: string;
    coverUrl: string;
    pageCount: number;
    languages: {
      code: string;
      name: string;
    }[];
    source: "openlibrary" | "goodreads" | "douban" | "kingstone";
    existed: boolean;
  }[];
}
export interface EndpointProvidersOpenLibraryCovers {
  method: "get";
  input: {
    query?: EndpointProvidersOpenLibraryCovers_InputQuery;
  };
  output: {
    OK: EndpointProvidersOpenLibraryCovers_OutputOK;
  };
  media: null;
}
export interface EndpointProvidersOpenLibraryCovers_InputQuery {
  key?: string;
  isbn?: string;
  title?: string;
}
export interface EndpointProvidersOpenLibraryCovers_OutputOK {
  covers: number[];
}
export interface EndpointProvidersDoubanDetail {
  method: "get";
  input: {
    query?: EndpointProvidersDoubanDetail_InputQuery;
  };
  output: {
    OK: EndpointProvidersDoubanDetail_OutputOK;
  };
  media: null;
}
export interface EndpointProvidersDoubanDetail_InputQuery {
  id: string;
}
export interface EndpointProvidersDoubanDetail_OutputOK {
  title: string;
  authors: string;
  publisher: string;
  year: number;
  isbn: string;
  pageCount: number;
  coverUrl: string;
}
export interface EndpointProvidersDoubanCover {
  method: "get";
  input: {
    query?: EndpointProvidersDoubanCover_InputQuery;
  };
  output: any;
  media: null;
}
export interface EndpointProvidersDoubanCover_InputQuery {
  url: string;
}
export interface EndpointProvidersGoodreadsDetail {
  method: "get";
  input: {
    query?: EndpointProvidersGoodreadsDetail_InputQuery;
  };
  output: {
    OK: EndpointProvidersGoodreadsDetail_OutputOK;
  };
  media: null;
}
export interface EndpointProvidersGoodreadsDetail_InputQuery {
  id: string;
}
export interface EndpointProvidersGoodreadsDetail_OutputOK {
  title: string;
  authors: string;
  publisher: string;
  year: number;
  isbn: string;
  pageCount: number;
  coverUrl: string;
}
export interface EndpointProvidersKingstoneDetail {
  method: "get";
  input: {
    query?: EndpointProvidersKingstoneDetail_InputQuery;
  };
  output: {
    OK: EndpointProvidersKingstoneDetail_OutputOK;
  };
  media: null;
}
export interface EndpointProvidersKingstoneDetail_InputQuery {
  id: string;
}
export interface EndpointProvidersKingstoneDetail_OutputOK {
  title: string;
  authors: string;
  publisher: string;
  year: number;
  isbn: string;
  pageCount: number;
  coverUrl: string;
}
