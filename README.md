# ecommerce-backend

![](https://img.shields.io/github/license/ghall89/ecommerce-backend?style=for-the-badge)
## Description

An ecommerce backend written with Node.js to create, read, write, and modify a MySQL database. 

[Video Demo](https://drive.google.com/file/d/1hURgJ5hzxluyS3kl_vIH7u_JUCs8DMM5/view?usp=sharing)

![](./screenshot.png)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Requests](#api-requests)
- [License](#license)
- [Questions](#usage)

## Installation

- Install node if you don't already have it
- Clone this repo
- Navigate to the repo's location on your computer in your terminal
- Run the 'npm install' command and wait for the process to finish

## Usage

- From the repo directory in your terminal run `mysql -u root -p` and enter your MySQL password when prompted
- In the MySQL prompt run `source db/schema.sql`
- Exit the MySQL prompt with `quit`
- From the repo directory in your terminal run `node seeds/index.js`
- Then run `npm start`

## API Requests

Use a tool like Insomnia or Postman to create API requests.

### Viewing Database (GET requests) & Deleting Rows (DELETE requests)

View All Products 
`localhost:3001/api/products`

View All Categories 
`localhost:3001/api/categories`

View All Tags 
`localhost:3001/api/tags`

To view individual items from any of the previous paths, simply add `/` and the id of the item you're looking up, for example:
`localhost:3001/api/categories/2`

You can also submit URLs with IDs as a DELETE request to remove the item from the database. 

### Adding to Database (POST requests) & Modifying Rows (PUT requests)

To add items to the database, submit the URL for the table you want to add to, and a body in JSON format.

Add To Products
`{
	"product_name": “Lego Set”,
	"price": 100.00,
  "stock": 3,
	“category_id”: 6
  "tagIds": [8, 3, 9]
}`

Add To Categories
`{
	"category_name": "toys"
}`

Add To Tags
`{
	"tag_name": "kids"
}`

You can also submit the URLs with IDs as a PUT request, alongside any key/values you want to change as a a body in JSON format to modify any items in the database.

## License

Team Profile Builder
Copyright (C) 2021  Graham Hall

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.

## Questions

Direct any questions to [Graham Hall](http://github.com/ghall89) via email at ghall89@me.com
