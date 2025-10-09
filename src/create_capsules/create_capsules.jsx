import React from 'react';

export function CreateCapsules() {
  return (
    <main>
        <h2 class="text">Create a Capsule!</h2>
        <form>
            <div>
                <input type="text" placeholder="Enter Title of Experience Here" size="50"/>
            </div>
            <br/>
            <div>
                <input type="text" placeholder="Journal about Experience Here" size="50"/>
            </div>
            <br/>
            <div>
                <p class="text">Insert any pictures here: </p><input type="file" />
            </div>
            <br/>
            <div>
                <p class="text">Enter date this capsule will open: </p><input type="date" />
            </div>
            <br/>
            <div>
                <input type="submit" />
            </div>
        </form>
    </main>
  );
}