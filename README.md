# ByteBlogger-MVC

I am thrilled to share with you how I built a powerful back-end system that is designed to assist e-commerce websites in managing their data storage and collection. This project was developed using Node.js, Sequel, and Express frameworks, which allowed me to build a robust, scalable and efficient system.

## Description

With this system, e-commerce websites can easily store and manage data such as customer information, product inventory, and transaction history. The user-friendly interface and well-organized data structure make it easy for website owners to access and manage their data.

The Node.js framework was perfect for building the back-end system as it provided me with the flexibility and scalability required for managing large data sets. I also utilized Sequel, a powerful SQL ORM, to interact with the database and perform complex queries, making the system efficient and reliable.

Express was also an excellent tool for developing the system's APIs, allowing me to create a smooth and seamless experience for website owners. By using Express, I was able to create well-organized endpoints that made it easy for website owners to access their data quickly and efficiently.

Overall, I am excited to share the success of this project and how it can greatly benefit e-commerce websites in managing their data storage and collection. The combination of Node.js, Sequel, and Express allowed me to build a powerful system that is both efficient and easy to use.

---

## Languages and Technologies Used

[![Socials](https://skillicons.dev/icons?i=js,git,mysql,nodejs,express)](https://skillicons.dev)

| Featured Technology Used |              Link              |
| :----------------------: | :----------------------------: |
|        `Node.js`         | [LINK](https://nodejs.dev/en/) |
|          `NPM`           | [LINK](https://www.npmjs.com/) |
|         `Mysql`          | [LINK](https://www.mysql.com/) |
|        `Express`         | [LINK](https://expressjs.com/) |

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
3. Enter in the command `git clone git@github.com:CodeNameNoah/E-Commerce-Back-End-ORMs.git`
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
// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};


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
