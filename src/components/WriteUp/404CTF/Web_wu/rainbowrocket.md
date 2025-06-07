
# Web Challenge Rainbow Rocket

This web challenge was build around a simple Login/Register web site. Let's walk through how we approached wand solved it step by step

For this challenge, i use Burp Suite with jwt plugin but you can only use https://jwt.io 

---
### Step 1: Inspecting the Webpage 

The first thing we did was to register and login into the website, i recommend to use easy credential for a better experience, for the test i use *Rapido1234*

![[register_img.png]]

---
### Step 2: Analyse the login request 

When i click on the login button, BurpSuite intercept the request and something interesting pop on the screen 
![[img connexion burp suite.png]]
We can see a interesting entry in the request header, a Cookie ***token=eyJhbGci0iJSUzI1N ...***
My extension *JWT Editor* show me the token was a JWT

---
### Step 3: Analyse the JWT

![[JWT_analyse.png]]
The JWT have three parts, the **Header**, the **Payload** ad the **Signature**

Inside the Payload we see my username and a timestamp, the first things we can try it's to modifie the payload.
The main page show
```
You need to be admin to show this page 
```
So, instinctively i change Rapdio1234 by Admin

![[change_jwt_payload.png]]

I forward to submit the form

---
### Step 4: See the result 

![[get_flag.png]]

---
## ✅ Conclusion

This challenge is a great example to introduce the JWT, it show how they works and how they can be pontential an entry point in your website 


Rapido =)