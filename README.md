####List of basic routes:

| Route          | HTTP   | Description  | Role |
| ----------     |:------:|-------------:|------:|
| /api/signin    | POST    | Sign in user |user|
| /api/signup    | POST    | Register user |user|
| /api/users     | GET     | Get all the users |admin|
| /api/user/:id  | GET     | Get a single user |user|
| /api/user      | POST    | Create a user |admin|
| /api/user/:id  | DELETE  | Get all the users |admin|
| /api/user/:id  | PUT     | Get all the users |user|

## Usage
#### With only npm:

```
npm install
npm start
npm run dev
```
####Access the website via ```http://localhost:3000``` or API via ```http://localhost:3000/api```.
