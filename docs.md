# Photons

# `GET: /images`

## Parameters

| Name       | Description                                                                          |
|-------------|----------------------------------------------------------------------|
| page        | Page number to retrieve (default = 1)                                  |
| per_page | Number of images to retrieve per page (default = 10)         |
| order_by | How images are ordered latest or oldest (default = latest)  |

## Response

```
{
    id: id from db --> auto assign an id for now
    created-at: date of uploading the image
    width:
    height:
    description:
    url: url to image
    user: {
        id: 
    }
}
```