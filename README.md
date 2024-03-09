# Tech City  Apps

## Project Management Board
[Management Board Here!](https://github.com/orgs/Tech-City-Apps/projects/2/views/1)

## Team Members

- Vivian Davila
- Amanda Marquez
- Adam Jimenez
- Michael Roark

### Project Details

An interactive daily planner, with a weather plug-in to ensure you're always prepared.


#### Domain

<details>
<summary>Domian Model</summary>

Entities and Their Properties:
User

UserID: Integer (Primary Key)
Username: String
Email: String
PasswordHash: String
Preferences: JSON (To store user preferences such as notification settings and view options)
Task

TaskID: Integer (Primary Key)
UserID: Integer (Foreign Key, references User)
Title: String
Description: String (Optional)
Date: DateTime
Status: Enum ('Pending', 'Completed')
WeatherDependent: Boolean
WeatherReport

ReportID: Integer (Primary Key)
Date: DateTime
Forecast: String
HighTemp: Integer
LowTemp: Integer
PrecipitationChance: Integer
Notification

NotificationID: Integer (Primary Key)
UserID: Integer (Foreign Key, references User)
Message: String
Date: DateTime
Seen: Boolean
Relationships:
User to Task: One-to-Many. A user can have multiple tasks, but each task is associated with a single user.
User to Notification: One-to-Many. A user can have multiple notifications.
Task to WeatherReport: Many-to-One (Optional). A task may be associated with a weather report if it is marked as weather-dependent. Not all tasks will have a weather report associated, making this an optional relationship.
Functions/Methods and Their Related Entities:
CreateTask(UserID, Title, Description, Date, WeatherDependent): Creates a new task for the user. Relates to User and Task entities.
FetchWeatherReport(Date): Retrieves the weather report for a specific date. Primarily relates to the WeatherReport entity.
GenerateNotification(UserID, Message, Date): Generates a new notification for the user. Relates to User and Notification entities.
MarkTaskAsCompleted(TaskID): Marks a specific task as completed. Relates to the Task entity.
AdjustTaskBasedOnWeather(TaskID, WeatherReportID): Adjusts the task details based on the associated weather report, for example, changing a task from an outdoor to an indoor activity. Relates to Task and WeatherReport entities.
</details>

#### Database Schema Diagram

<details>
<summary>Scheme Diagram</summary>

Data Models:
Users

Properties: UserID (Primary Key, Integer), UserName (String), Email (String, Unique), PasswordHash (String), Preferences (JSON)
Relationships: One-to-Many with Tasks, One-to-Many with Notifications
Tasks

Properties: TaskID (Primary Key, Integer), UserID (Foreign Key, Integer), Title (String), Description (String, Optional), Date (Date), Status (Enum: ['Pending', 'Completed']), WeatherDependent (Boolean)
Relationships: Belongs to Users, Many-to-One with WeatherReports (optional)
WeatherReports

Properties: ReportID (Primary Key, Integer), Date (Date), Forecast (String), HighTemp (Integer), LowTemp (Integer), PrecipitationChance (Integer)
Relationships: One-to-Many with Tasks (optional)
Notifications

Properties: NotificationID (Primary Key, Integer), UserID (Foreign Key, Integer), Message (String), Date (Date), Seen (Boolean)
Relationships: Belongs to Users
Relationships:
Users to Tasks: A user can have many tasks, but each task belongs to only one user.
Users to Notifications: A user can have many notifications, but each notification is targeted to a single user.
Tasks to WeatherReports: Tasks may optionally be associated with a weather report if they are marked as weather-dependent. A weather report can influence many tasks, but a task is directly associated with at most one weather report on a given day.

</summary>