# Welcome to MERKIA , my first fully designed website 

## This project was aimed to put in test my design skills as my coding one , everything was done from scratch . 



## API Documentation



| /articles         | GET   | gett all articles from database |                                       |
| ----------------- | ----- | ------------------------------- | ------------------------------------- |
| /article          | POST  | add an article                  | {title,text,description,author,photo} |
| /article/like     | PATCH | like an article                 | {user_id,id}                          |
| /comment          | PATCH | comment an article              | {articleId,authorId,comment}          |
| /article/:id      | GET   | get an article                  | ~id                                   |
| /user/:id         | GET   | get a user                      | ~id                                   |
| /user/profile/:id | GET   | get a profile                   | ~id                                   |
| /user             | POST  | add user                        | {email,password}                      |
| /user/follow      | PATCH | follow user                     | {user_id,id}                          |
| /user/bookmark    | PATCH | bookmark article for a user     | {id,articleId}                        |
| /login            | POST  | Login a user                    | {email,password}                      |
| /google/auth      | POST  | Google authentication           | automated by Oauth2                   |
|                   |       |                                 |                                       |

