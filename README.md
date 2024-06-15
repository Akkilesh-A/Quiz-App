## Tech Stack:

| Frontend  | Next.js |
| --- | --- |
| State Management | Redux |
| Architecture | Monorepo |
| Build System | Turborepo |
| Session Authentication | Next-Auth |
| Styling | Tailwind CSS |

## Instructor App:

> [!LINK]
> <samp> Deployed Link - [iPropel Instructor](https://quiz-app-instructor-app.vercel.app/createquiz) </samp>

### Functionalities:

- Next-Auth
    - Local Session handling with next-auth .
    - Included Google Sign In as well.
- Create Quiz
    - Locally handled state of  questions. options and correct option.
    - When confirm quiz button is pressed state is stored into REDUX store by dispatching an action.
- Confirm Quiz
    - Takes you to review quiz page, Shows questions, answers, correct option before uploading quiz to database.
    - State variables fetched from REDUX store.

### Screenshots:


![image](https://github.com/Akkilesh-A/Quiz-App/assets/136828513/816a1a64-9f2d-48ab-a1d6-3343112fa855)
![image](https://github.com/Akkilesh-A/Quiz-App/assets/136828513/96150e25-4bc6-41e8-8f11-6b78fe7e37cb)
#### View Quizzes from database, mocked via -https://6667f9c6f53957909ff5fe12.mockapi.io/api/v1/QuizDatabase
![image](https://github.com/Akkilesh-A/Quiz-App/assets/136828513/eb87b0b0-985c-455b-b50b-6dfa18a4bb50)

#### Create Quiz - State handled with REDUX
![image](https://github.com/Akkilesh-A/Quiz-App/assets/136828513/ee601c39-e8b2-4065-8d11-cbcfb663d909)
![image](https://github.com/Akkilesh-A/Quiz-App/assets/136828513/ebd194b0-dd46-4e70-8922-d21f29048fbc)
![image](https://github.com/Akkilesh-A/Quiz-App/assets/136828513/6636ceed-9d99-4429-8327-1af22c899ab4)
![image](https://github.com/Akkilesh-A/Quiz-App/assets/136828513/1850f4c9-6c6a-4595-893f-49d7444701d8)
After this page the quiz can be uploaded to a database
