# NestJs Assessment

## Overview

This project implements a **Candidate Skill Rating** flow using NestJS, Sequelize ORM, and MySQL. The project includes authentication using JWT without the use of Passport. The primary features include user sign-up, rating candidate responses, and fetching aggregated skill ratings.

## Requirements

### Tables

1. **User Table**
   - Attributes: `name`, `role`
   - `role` is an enum with values: ['candidate', 'reviewer']

2. **Question Responses Table**
   - Attributes: `skillId`, `difficulty_level`, `question`, `response`, `rating`
   - `difficulty_level` is an enum with values: ['easy', 'medium', 'hard']

### Features

1. **User Sign-up**
   - Create, read, update, and delete (CRUD) operations for user sign-up.
   
2. **Rating Candidate's Response**
   - Reviewers can rate candidate responses.

3. **Aggregated Skills and Ratings**
   - Fetch the list of aggregated skills along with ratings.
   - Difficulty level weights:
     - Easy: 1
     - Medium: 2
     - Hard: 3
   - Skill calculation formula:
     ```
     (1 * easy_number_of_questions * rating + 2 * medium_number_of_questions * rating + 3 * hard_number_of_questions * rating) 
     / 
     (1 * easy_number_of_questions + 2 * medium_number_of_questions + 3 * hard_number_of_questions)
     ```

## Example

### Candidate's Saved Response Data

```json
[
  { "skillId": 1, "difficulty_level": "easy", "question": "What is Node?", "response": "" },
  { "skillId": 1, "difficulty_level": "easy", "question": "What is Express?", "response": "" },
  { "skillId": 1, "difficulty_level": "hard", "question": "How to handle child processes in Node?", "response": "" },
  { "skillId": 1, "difficulty_level": "medium", "question": "What are streams?", "response": "" }
]
