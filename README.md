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

## Take A Look At Our Application In Action! [CLICK PREVIEW TO WATCH VIDEO!]

- E-Commerce-Back-End-ORMs Tutorial - [Back-End-ORMs](https://www.youtube.com/watch?v=QRh_KFoSkSg)

- [![Watch the video](https://img.youtube.com/vi/QRh_KFoSkSg/maxresdefault.jpg)](https://youtu.be/QRh_KFoSkSg)

- ![Demo of Insomnia Test for Products](https://user-images.githubusercontent.com/127361736/236393142-d55508b4-205b-40d2-8df4-8f0dfe11227c.gif)

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

- Scalability: My CMS is scalable, which means that it can accommodate businesses of different sizes and stages of growth. As businesses grow and require more functionality, the CMS can be scaled up to meet their needs.\*

To use Insomnia, follow these simple tips:

1. First, open Insomnia and create a new request. To do this, click on the New Request button located in the top-left corner of the screen.

2. Next, choose the HTTP method you want to use. You can choose from SEND, GET, POST, PUT, and DELETE. Click on the method you want to use, and the appropriate fields will appear in the request.

3. Enter the URL of the endpoint you want to access. This is the address where the API is located. The URL will depend on the specific API you are using, so make sure you have the correct URL.

4. If you are using GET or DELETE, you can add any query parameters in the query parameters section. This is where you can add additional information that will help you filter or sort the data you are retrieving.

5. If you are using POST or PUT, you can add the data you want to send in the request body section. This is where you can add new data or update existing data in the API.

6. Once you have entered all the necessary information, click on the Send button. Insomnia will send the request to the API, and you will receive a response in the Response section of the screen.

7. If the request is successful, you will see the response data in the Response Body section. If there are any errors, you will see them in the Response section as well.

8. If you want to save the request for future use, click on the Save button located in the top-left corner of the screen. You can then access the saved request from the sidebar on the left side of the screen.

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

This code establishes relationships between four models (Product, Category, Tag, and ProductTag) in a database-driven application using the Sequelize ORM library. It defines associations such as "Product belongs to Category", "Category has many Products", "Product belongs to many Tags", and "Tag belongs to many Products". These associations enable the application to retrieve related data from multiple tables in the database. Finally, the code exports the four models for use in other parts of the application.

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

## License

Copyright (c) Microsoft Corporation. All rights reserved.

Licensed under the MIT license.

---
