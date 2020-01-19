# Feedback API

This API I was built for my React application where you can leave me feedback for my [portfolio](https://bp.etf.ac.me/users/danilol/portfolio/).
Live app you can find [here](https://feedbackapp.netlify.com/).

API is hosted on domain:
```
https://feedbackappapi.glitch.me
```

## Instructions 

Application have three categories for feedback: projects, CV and website. You can access this categories on following links:

For projects:
```
https://feedbackappapi.glitch.me/projectFeedback
```

For CV:
```
https://feedbackappapi.glitch.me/cvFeedback
```

For website:
```
https://feedbackappapi.glitch.me/websiteFeedback
```
For leaving feedback over API you send POST request on previous links with following header 
```
"Content-Type", "application/json
```
and in body you have following JSON:

For projects:
```json 
{
    "project": "Name of project",
    "design": "50",
    "performance": "50",
    "content": "50",
    "text": "You can leave text feedback! I would be glad."
}
```

For CV:
```json
{
     "design":"50",
     "content":"50",
     "text":"You can leave text feedback! I would be glad."
}
```

For website:
```json
{
      "design":"50",
      "performance":"50",
      "content":"50",
      "text":"You can leave text feedback! I would be glad."}
```
The range of values goes from 0 to 100.

Used technologies: Node(Express) / npm / MongoDB / mongoose / Postman






