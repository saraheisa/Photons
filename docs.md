# Photons

## `GET: /images`

### Parameters

| Name       | Description                                                                          |
|-------------|----------------------------------------------------------------------|
| page        | Page number to retrieve *(default = 1)*                                  |
| per_page | Number of images to retrieve per page *(default = 10)*         |
| order_by | How images are ordered latest or oldest *(default = latest)*  |

### Response

```json
{
    "id": "1425636985",
    "created-at": "14523656565",
    "width": 200,
    "height": 200,
    "description": "an image of saturn",
    "url": "http://images.photons.com/1425636985",
    "user": {
        "id": "14289632555"
    }
}
```