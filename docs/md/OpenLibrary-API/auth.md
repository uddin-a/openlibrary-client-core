# Authentication & Access

## S3 Key Authentication

```typescript
const config = {
  access: "your_s3_access_key",
  secret: "your_s3_secret_key",
};
```

## Session Cookie Authentication

> # Some sources and tips:
>
> - [nginx.conf](https://github.com/internetarchive/openlibrary/blob/master/docker/nginx.conf)
>
> - > please add a HEADER that specifies a User-Agent string with (a) the name of your application and (b) your contact email or phone number, so we may contact you when we notice high request volume.

```typescript
const loginResponse = await fetch(
  "https://openlibrary.org/account/login.json",
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "your_username",
      password: "your_password",
    }),
  }
);
```

## User-Agent Requirements (critical for rate limiting)

```typescript
const headers = {
  "User-Agent": "YourAppName/1.0 (contact@yoursite.com)",
  "Content-Type": "application/json",
};
```

## Configuration File Suppport

Store credentials in `~/.config/ol.ini` : [source](https://github.com/internetarchive/openlibrary-client#authentication-against-production)

```ini | ol.ini
[openlibrary.org]
access = your_access_key
secret = your_secret_key
```
