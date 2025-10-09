import React from 'react';

export function CreateAccount() {
  return (
    <main>
            <h3 class="text">Create an Account</h3>
            <form method="get" action="html/post_login.html">
                <div class="login-prompt">
                    <div class="input-group mb-4">
                        <span class="text">Name:</span>
                        <input class="form-control" type="text" placeholder="name" />
                    </div>
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
            <p class="text">Return to <a href="../index.html">login</a> page.</p>
        </main>
  );
}