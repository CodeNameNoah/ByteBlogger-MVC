# ByteBlogger-MVC

I am proud to say that I have built a CMS-style blog site that resembles WordPress, designed specifically for developers to publish their blog posts and interact with other developers’ posts through comments. The site is deployed using Heroku, making it easily accessible for users to engage with.

## Description

Throughout the development process, I ensured that the application followed the Model-View-Controller (MVC) paradigm for its architectural structure. I chose Handlebars.js as the templating language, as it provides a simple and intuitive syntax for generating HTML pages. Additionally, Sequelize was utilized as the Object-Relational Mapping (ORM) to interact with the database, streamlining the process of managing data.

One of the most critical features of this blog site is its ability to authenticate users. To accomplish this, I used the express-session npm package for authentication, which allows users to log in and securely access their profile pages, view their blog posts and comments, as well as interact with other developers' posts.

Overall, I am excited about the potential this blog site has to help developers share their knowledge and insights with others in their field. I believe that it will foster a community of developers who can collaborate and learn from one another.

---

## Languages and Technologies Used

[![Socials](https://skillicons.dev/icons?i=js,git,mysql,nodejs,express)](https://skillicons.dev)

| Featured Technology Used |                     Link                     |
| :----------------------: | :------------------------------------------: |
|        `Node.js`         |        [LINK](https://nodejs.dev/en/)        |
|          `NPM`           |        [LINK](https://www.npmjs.com/)        |
|         `Mysql`          |        [LINK](https://www.mysql.com/)        |
|        `Express`         |        [LINK](https://expressjs.com/)        |
|         `Heroku`         |    [LINK](https://devcenter.heroku.com/)     |
|         `dotenv`         | [LINK](https://www.npmjs.com/package/dotenv) |

---

| Collaborators |                                                                                                                                  Socials                                                                                                                                   |
| :-----------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| `Noah Hoang`  | [![Socials](https://skillicons.dev/icons?i=git)](https://github.com/codenamenoah) [![Socials](https://skillicons.dev/icons?i=linkedin)](https://www.linkedin.com/in/codenamenoah/) [![Socials](https://skillicons.dev/icons?i=twitter)](https://twitter.com/CodeNameNoahH) |

## Take A Look At My Application!

Deployed Application Link [ByteBlogger](https://byteblogger.herokuapp.com/)

![ByteBlogger](https://user-images.githubusercontent.com/127361736/237054631-0e9598b9-955a-4c68-82f2-d2015a29eafb.gif)

---

## Installation

**To Clone Our Repository Using CLI**

1. Click on the green code button and copy the link for the SSH key.
2. Once clip-boarded load up a command line interface and change directory to one of your preference
3. Enter in the command `git@github.com:CodeNameNoah/ByteBlogger-MVC.git`
4. Enter your protected SSH password
5. Enjoy!

**To Download Our Repository as a ZIP File**

1. Click on the green code button
2. In the bottom of the drop-down menu, click Download Zip
3. Enjoy!

![github](https://user-images.githubusercontent.com/127361736/227422005-d28a9020-e331-4098-976b-df9c1e545bb4.png)

---

## Usage

Now you may be wondering why you would want to use my application or even its core practicalities:

- My application provides quality content about the latest trends in technology, gadget and software reviews, and tips and tricks for using different technologies. By offering informative and engaging content, I establish myself as an authority in the tech space, attracting a loyal following.

- Additionally, my tech blog application fosters community engagement, enabling readers to discuss and share ideas with others who have similar interests. This sense of community can build a loyal audience that keeps coming back to my blog.

- Convenient access is another benefit of my application. By providing an online platform for my blog, users can access the content from anywhere, at any time. This is particularly appealing for people who are always on the go and want to stay up-to-date with the latest tech news and trends.

- I also offer customization features, allowing users to tailor their experience to their needs. For example, users can create a personalized dashboard that displays the topics they are most interested in or receive email notifications when new content is posted.

- Finally, my tech blog application is user-friendly and easy to navigate, providing a clean and intuitive interface. This ensures that users have a positive experience on my blog, which can encourage them to visit again in the future.

To use ByteBlogger, follow these simple steps:

1. Upon entering the website, click on Login within the upper right corner

2. If you are a new user, create an account.

3. If you are a returning user, you should be logged in. If you are not logged in still, enter in your same login credentials.

4. Now that you are authenticated, you can create a post by clicking on the user-friendly interface buttons.

Note: Make sure you have a MySQL server running on your computer with the appropriate database schema and data tables for the application to function correctly.

---

## Featured Code Snippet

```
async function commentFormHandler(event) {
  event.preventDefault();

  const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (comment_text) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        comment_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);

```

- This is where the magic happens, it was quite fun working out the hiccups I must admit.

This is an asynchronous JavaScript function commentFormHandler that is used to handle the submission of a comment form. The function is triggered when a user submits a form with the class comment-form.

First, the function prevents the default form submission behavior using event.preventDefault(). Then it extracts the text entered by the user from the textarea element with the name "comment-body" and trims any leading or trailing whitespace from the text.

It also extracts the post ID from the current window location URL by splitting the URL by '/' and taking the last element in the resulting array.

If the comment text is not empty, the function sends a POST request to the server's API endpoint /api/comments using the fetch method. The body of the request is a JSON object that includes the post ID and the comment text. The Content-Type header is set to application/json.

If the response is successful (i.e., the server returns a 2xx status code), the browser reloads the current page to display the new comment. Otherwise, an error message is displayed using alert(response.statusText).

Finally, the function is registered as an event listener for the form's submit event using addEventListener.

---

## Credits & Source Codes

- Guide for Gifs to use in README.md

  - https://www.youtube.com/watch?v=3RlpVrYt_qE&ab_channel=AskCloudArchitech

- Documentation for NPM

  - https://www.npmjs.com

- Documentation for NPM 'Inquirer'

  - https://www.npmjs.com/package/inquirer

- Documentation for Node.js

  - https://nodejs.org/en

- Documentation on MySQL

  - https://www.mysql.com/

- Documentation on Express

  - https://expressjs.com/

- Documentation on Kitefin from JAWSDB

  - https://www.jawsdb.com/ 

## License

Copyright (c) Microsoft Corporation. All rights reserved.

Licensed under the MIT license.

---
