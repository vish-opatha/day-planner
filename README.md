# Work Day Scheduler - Day Planner

## Overview
This is a project carried out to create a simple calenar application that helps the user to save appointments or events for the working hours. It is implemented by using HTML, CSS and jquery. Majority of the styles and layouts were done using the Bootstrap framework.

Moment Javascript is used to manupulate the date and time when required.

## Important Links
Refer to the following links:
* [Day Planner - Deployed page](ttps://vish-opatha.github.io/day-planner/)
* [Day Planner - Github repository](https://github.com/vish-opatha/day-planner)

## Mock-up
* Following are the related images.
* [Day Planner - Video](https://drive.google.com/file/d/1nl-SqQ4iny6qRsCnynR8jLN_oSMIMh-a/view?usp=sharing)
---
Highlights :
  1. When the 'Start' button is pressed quiz starts with the timer
  2. Questions are presented to the user until the available time is zero or question count in the pool is zero.
  3. Once the user clicks an answer, result is displayed.
  4. When all questions are answered or availble time is zero, user is presented to save the score.
  5. Marks are saved in local storage, and if there are any marks are saved already, they are loaded in view_highscore.html.

## Technical Acceptance - Work Done
1. When the planner is loaded,  current date is displayed on the page and moment.js is used for that.
2. When the daily planner is opened, timeblocks are created using javascript(JQuery).
3. ##########################WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future#################
4. Once the user click a particular timeblock, the user can enter details of the event. A text area is used for this purpose.
5. Selected answer is validated against the stored correct answer, and displays the result(correc or wrong) below the possible answer buttons.
4.

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:

![A user clicks on slots on the color-coded calendar and edits the events.](./Assets/05-third-party-apis-homework-demo.gif)


## Grading Requirements

This homework is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria plus the following:

  * Uses a date utility library to work with date and time

### Deployment: 32%

* Application deployed at live URL

* Application loads with no errors

* Application GitHub URL submitted

* GitHub repo contains application code

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate

* Application user interface style is clean and polished

* Application resembles the mock-up functionality provided in the homework instructions

### Repository Quality: 13%

* Repository has a unique name

* Repository follows best practices for file structure and naming conventions

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages

* Repository contains quality README file with description, screenshot, and link to deployed application

## Review

You are required to submit the following for review:

* The URL of the deployed application

* The URL of the GitHub repository, with a unique name and a README describing the project

- - -
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
