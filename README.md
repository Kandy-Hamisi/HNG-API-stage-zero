# HNG Stage 0 Backend API

This is a public API that returns basic user information in JSON format.

## Running the project Locally
The project is hosted remotely at: `https://github.com/Kandy-Hamisi/HNG-API-stage-zero`.

Set the project locally by:
- creating a folder name of your choice
- On your terminal run: `git clone https://github.com/Kandy-Hamisi/HNG-API-stage-zero .` The `.` at the end of the url is to clone at the root folder you just created.
- Execute the command `npm install` to install all the required packages used in our project
- In your terminal run `npm run dev` to run the project locally
- Visit `localhost:5000/api/getUserinfo` and you will get the user information as shown in the API Endpoint return section
- Feel free to change your email address


## API Endpoint

- **URL**: `https://hng-api-stage-zero.vercel.app/api/getUserinfo`
- **Method**: `GET`

## Response Format

```json
{
  "email": "your-email@example.com",
  "current_datetime": "2023-10-05T12:34:56.789Z",
  "github_url": "https://github.com/yourusername/your-repo"
}
```

## Backlinks

- [HNG Node.js Developers](https://hng.tech/hire/nodejs-developers)