[GitHub - Akkilesh-A/Quiz-App](https://github.com/Akkilesh-A/Quiz-App)

## Tech Stack:

| Frontend  | Next.js |
| --- | --- |
| State Management | Redux |
| Architecture | Monorepo |
| Build System | Turborepo |
| Session Authentication | Next-Auth |
| Styling | Tailwind CSS |

## Instructor App:

[iPropel Instructor](https://quiz-app-instructor-app.vercel.app/createquiz)

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

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/f3eee9c0-14b3-4c8e-932d-aa26f3b4a4be/df883120-37c5-4dae-b132-0296baa7a167/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/f3eee9c0-14b3-4c8e-932d-aa26f3b4a4be/36b29999-90b6-4170-9c6b-fd3fe985caeb/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/f3eee9c0-14b3-4c8e-932d-aa26f3b4a4be/1829c06c-6266-4afe-a810-afb654c4c879/Untitled.png)

View Quizzes from database, mocked via -https://6667f9c6f53957909ff5fe12.mockapi.io/api/v1/QuizDatabase

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/f3eee9c0-14b3-4c8e-932d-aa26f3b4a4be/85cac64e-9835-4da7-97f9-69bf8370d07a/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/f3eee9c0-14b3-4c8e-932d-aa26f3b4a4be/2d033ae7-ef95-4e90-9199-6a984b591408/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/f3eee9c0-14b3-4c8e-932d-aa26f3b4a4be/c4502b54-b46c-4931-9de9-e0e1fbb24a50/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/f3eee9c0-14b3-4c8e-932d-aa26f3b4a4be/c2553f7c-035f-4c8b-a93a-ece15788a851/Untitled.png)

After this page the quiz can be uploaded to a database
