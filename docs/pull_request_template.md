## Description

<!-- What does this code change? Why did I choose this approach? Did I learn anything worth sharing? Reminder: This will be a publicly facing representation of your work (READ: help you land that sweet dev gig). -->

## Related Issue

<!-- If you write "closes" followed by the Github issue number, it will automatically close the issue for you when the PR merges -->
closes #

## Connected Issues

## Acceptance Criteria

<!-- Include AC from the Github issue -->
- [X]

## Type of Changes

<!-- Put an `✓` for the applicable box: -->

|     | Type                       |
| --- | -------------------------- |
|    | :bug: Bug fix              |
|  ✓ | :sparkles: New feature     |
|    | :hammer: Refactoring       |
|    | :100: Add tests            |
|    | :link: Update dependencies |
|    | :scroll: Docs              |


## Requests / Responses

**Request**

POST `/api/users` Returns a list of users

```
{
  "data": {
    "attributes": {
      "name": "The Dude",
      "email": "thedudeabides@wee.net",
      "password": "hellopassword"
    }
  },
  "type": "users"
}
```

**Response**

HTTP/1.1 200 OK

```
{
  "data": {
    "type": "users",
    "id": "4",
    "attributes": {
      "name": "The Dude",
      "email": "thedudeabides@wee.net",
      "last-logged-in": null,
      "created-at": "2016-10-20T17:45:08.190Z",
      "updated-at": "2016-10-20T17:45:08.190Z"
    },
    "links": {
      "self": "/users/4"
    }
  }
}
```
## Testing Steps

- From your terminal, pull down this branch with git pull origin `branch name`
- Check that branch out with `git checkout branch name`
- Run `npm install` to install dependencies
- Run `npm run dev` to run the app
