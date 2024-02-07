## Todo app

A simple React application for creating and managing tasks.

### Installation

1. Clone the repository to your local machine.

2. Ensure that you have Node.js installed.

3. Run ```npm install``` in the root directory of the project.

4. Create a .env.local file in the root directory.

5. Add the following environment variables to the``` .env.local``` file:

```
REACT_APP_AIRTABLE_API_TOKEN="your_airtable_api_token"
REACT_APP_AIRTABLE_BASE_ID="your_airtable_base_id"
REACT_APP_TABLE_NAME="your_table_name"
```
You should grab these values from your airtable project previously set up on [Airtaible.com](https://www.airtable.com/v1).

6. To start the application, run ```npm start```.

7. To run tests, use the command npm test. In this app we are using Jest to detect errors and improve code quality.

### Airtable Integration
The application integrates with Airtable, a cloud-based database, to store and manage task data. It utilizes the following methods for interaction:

**GET:** Retrieves data from Airtable to display tasks and their details.

**POST:** Adds new tasks to the Airtable database.

**PATCH:** Updates existing tasks in the Airtable database.

**DELETE:** Removes tasks from the Airtable database.

### Usage
Add Task: Enter the task name in the input field and click the "Add" button.

Remove Task: Click the delete button next to the task.

Update Task: Click the edit button next to the task and enter the new name.

