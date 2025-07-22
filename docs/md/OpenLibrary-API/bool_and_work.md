# Book & Work API

| Request type | Endpoint     | Description|
| ------------ | ------------ | ---------- |
| **GET**      | `/works/{OLID}.json` | Work Details |
| **GET**      | `/books/{OLID}.json` | Edition Details |
| **GET**      | `/works/{OLID}/editions.json` | Work Edition |
| **GET**      | `/works/{OLID}/ratings.json` | Work Ratings |

## Edition Response Structure

```typescript
interface EditionResponse {
  key: string;                      // Edition OLID
  type: { key: string };
  title: string;
  subtitle?: string;
  authors?: Array<{ key: string }>; // Author OLIDs
  works?: Array<{ key: string }>;   // Work OLIDs
  isbn_10?: string[];
  isbn_13?: string[];
  lccn?: string[];
  oclc_numbers?: string[];
  goodreads?: string[];
  publish_date?: string;
  publishers?: string[];
  publish_places?: string[];
  number_of_pages?: number;
  languages?: Array<{ key: string }>;
  subjects?: string[];
  covers?: number[];               // Cover IDs
  source_records?: string[];
  identifiers?: {
    [key: string]: string[];
  };
}
```