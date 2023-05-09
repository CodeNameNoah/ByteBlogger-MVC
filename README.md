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

![ByteBlogger HomePage](https://user-images.githubusercontent.com/127361736/237017862-f6ab0e37-da0d-4403-a6a9-a77f946c276d.png)

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

Now you may be wondering as a business owner why you would want to own or utilize a CMS, well here are some pointers:

- Easy to use: My CMS is user-friendly and easy to use, which makes it accessible to business owners who are not tech-savvy. Business owners can quickly update their website content without the need for technical expertise.

- Saves time: My CMS allows business owners to quickly add or update website content, which saves time and effort. Business owners can manage their website content themselves instead of relying on a web developer or technical team.

- Customizable: My CMS is highly customizable and can be tailored to meet the specific needs of different businesses. This means that business owners can modify their website content and design to align with their branding and marketing goals.

- Cost-effective: My CMS is cost-effective as it eliminates the need for a technical team to manage website content. Business owners can easily manage website content themselves, which reduces the cost of maintaining a website.

- Scalability: My CMS is scalable, which means that it can accommodate businesses of different sizes and stages of growth. As businesses grow and require more functionality, the CMS can be scaled up to meet their needs.

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
