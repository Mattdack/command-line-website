const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your full name?',
      name: 'name',
    },
    {
        type: 'input',
        message: 'Where do you live?',
        name: 'location',
      },
      {
        type: 'input',
        message: 'Please provide a short bio about yourself.',
        name: 'bio',
      },
      {
        type: 'input',
        message: 'What is your LinkedIn link?',
        name: 'linkedin',
      },
      {
        type: 'input',
        message: 'What is your github link?',
        name: 'github',
      },
    {
      type: 'checkbox',
      message: 'What coding languages do you know?',
      choices: ['HTML', 'CSS', 'Javascript'],
      name: 'stack',
    },
  ])
  .then((response) => {
    const content = 
    `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Made by Command Line Prompts</title>
    <style>
        body {
            background-image: url(https://cdn.trendhunterstatic.com/thumbs/cool-backgrounds.jpeg?auto=webp);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            background-attachment: fixed;
            color: white;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        p {
            font-size: 150%;
            border: 2px solid black;
            border-radius: 5px;
            width: fit-content;
            color: rgb(237, 234, 234);
        }
        a{
            text-decoration: none;
            font-size: 150%;
            color: rgb(76, 135, 238);
        }
        p:hover {
            font-size: 200%;
            color: azure;
        }
        a:hover {
            font-size: 200%;
            color: azure;
        }
    </style>
</head>
<body>
    <h1>${response.name}</h1>
    <p>${response.location}</p>
    <p>${response.bio}</p>
    <a href = "${response.linkedin}">My LinkedIn</a>
    <a href = "${response.github}">My Github</a>
    <p>Languages that I know:${response.stack} </p>
</body>
</html>
    `
    fs.writeFile(`${response.name}.html`, content, (err) =>
    err ? console.error(err) : console.log('Commit logged!')
  );
  });