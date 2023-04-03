---
layout: default
title: Login
---

<!-- Page Heading -->
<link href="{{ site.url }}/{{ site.baseurl }}/assets/css/login.css" rel="stylesheet">
<div class="form-popup" id="myForm">
  <form action="/action_page.php" class="form-container">
    <h1>Login</h1>
    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required>
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>
    <button type="submit" class="btn">Login</button>
  </form>
</div>


