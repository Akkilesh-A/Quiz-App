## Tech Stack:

| Frontend  | Next.js |
| --- | --- |
| State Management | Redux |
| Architecture | Monorepo |
| Build System | Turborepo |
| Session Authentication | Next-Auth |
| Styling | Tailwind CSS |

## Instructor App:

> [LINK]
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

#### Redux in action 
![image](https://github.com/Akkilesh-A/Quiz-App/assets/136828513/6bf59644-d254-4129-83fe-60bfd26191e8)
![image](https://github.com/Akkilesh-A/Quiz-App/assets/136828513/1850f4c9-6c6a-4595-893f-49d7444701d8)
After this page the quiz can be uploaded to a database


## Learner App:

[iP | Learner]()
> [LINK]
> <samp> Deployed Link - [iPropel Learner](https://quiz-learner-app.vercel.app/) </samp>

### Functionalities:

- View Available Quizzes
    - Fetching Quizzes from Mock API
    - Dynamic path routing for different quizzes
- Attend Quiz with filled responses guide
    - Attend quiz like any other with the help of a attempt percentage tracker in the right.
    - State variables fetched and managed through REDUX store.
- View Score
    - View Score with a small animation

### Screenshots:
![image](https://github.com/Akkilesh-A/Quiz-App/assets/136828513/16cb80e5-25bb-4072-8bcc-a2fdd0cfd400)
![image](https://github.com/Akkilesh-A/Quiz-App/assets/136828513/554338b8-255f-42f8-acb5-f31cf3c14b8b)


View Quizzes from database, mocked via -[https://6667f9c6f53957909ff5fe12.mockapi.io/api/v1/QuizDatabase](https://6667f9c6f53957909ff5fe12.mockapi.io/api/v1/Quizzes)
![image](https://github.com/Akkilesh-A/Quiz-App/assets/136828513/14ceddfb-94db-4212-bd99-0c986d1235c2)
![image](https://github.com/Akkilesh-A/Quiz-App/assets/136828513/821f5cb2-26b4-45a6-8e6a-5675ae80bd81)
![image](https://github.com/Akkilesh-A/Quiz-App/assets/136828513/16f7e932-c559-473f-adb6-3d276666acdf)
![image](https://github.com/Akkilesh-A/Quiz-App/assets/136828513/2e298268-0ff1-45a8-9887-91213dcee49a)
State again fetched from redux store!
