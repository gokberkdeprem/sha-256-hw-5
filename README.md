## Crossing Paths: DevPaths Homework-5 
Used technology: Node.Js  
Used framework: Express.Js  

**Description:** It hashes a string using sha256 and get the original message using hashed valuy. The string value and the hashed message are stored in a dictionary. 

**Base URL of the application:** https://sha256-hw-5.herokuapp.com/

**How To Use It?**  
Use postman or alternative apps to send a post request to:  
https://sha256-hw-5.herokuapp.com/messages endpoint.  
  
You should send it in text format and as raw data.  
Choose Content-Type: text/plain.  
It returns a value in sha256 base64url format.  
  
Send get request to get original message to endpoint below:  
https://sha256-hw-5.herokuapp.com/messages/{hashedValue}  

If the hashed value does not exist in dictionary, it returns 404 not found.  

## Additional Questions
**How can you scale your implementation?**

To post and get methods Express.js framework is used. In order to shorten the loading time for the request and response, Memcache can be used. It can adjust the capacity and memory that is used. 

With the anticipation of heavy traffic of application, the data base could be seperated and work with API service. 

**How did you deploy this application?**

Heroku is used to deploy this application.  
Heroku is a decent application for this kind of small applications.  
Easy setup and scaling make setting up project faster.  
However it is 3x - 5x time expensive when compared with the equivalents.   

**How can you improve this process and make it easy to maintain?**

Seperating the database can make the process easier and more maintainable. And services can be seperated and assigned it's specific job such that post, get, cyrptor if it is a larger and complicated project.
