import React from 'react';

export function Login() {
  return (
    <main>
            <h3 class="text">Welcome! Login to view your Vault</h3>
            <form method="get" action="html/post_login.html">
                <div class="login-prompt">
                    <div class="input-group mb-4">
                        <span class="text">Username:</span>
                        <input class="form-control" type="text" placeholder="username" />
                    </div>
                    <div class="input-group mb-4">
                        <span class="text">Password:</span>
                        <input class="form-control" type="password" placeholder="password" />
                    </div>
                    <button type="submit" class="btn btn-primary">Login</button>
                </div>
                
            </form>

            <p class="text">Click <a href="html/create_account.html">here</a> to create an account</p>

            <h5 class="text">On this day, an interesting thing happened. This is where an api will go</h5>
            <img src = "https://images.pexels.com/photos/1095601/pexels-photo-1095601.jpeg" width="500" />

            <div>
                <a href="html/post_login.html">Home Page</a>
            </div>
        </main>
  );
}