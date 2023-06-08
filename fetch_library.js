// FETCH
const checkForNewNotifications = () => {
  return fetch(
    "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json"
  );
};
const result = checkForNewNotifications();
console.log(result); // Promise{<pending>}
//
//
//
fetch(URL).then((response) => {
  console.log(response);
});
//
//
//
/* This is why whenever you fetch(URL), the response 
that we get back is just a response object and the browser 
doesn't know that the data it has received is in JSON format. 
This is why we should manually convert the response into JSON: */
fetch(URL).then((response) => {
  return response.json();
});
//
//
//
//Implicit return
const double = (x) => {
  return x * 2;
};
//
const double2 = (x) => x * 2;
/* The previous fetch example falls under the same scenario, 
thus, it can also be refactored to the following: */

fetch(URL).then((response) => response.json());
//
//
//
const checkForNewNotifications1 = () => {
  return fetch(
    "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json"
  ).then((response) => response.json());
};
console.log(checkForNewNotifications1());
//
//
//
fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
//
//
//
const init = () => {
  console.log("A");
  fetch(
    "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.count);
      console.log(data.message);
    });
  console.log("B");
};
init();
//
//
//
// all links: 43. Working with fetch
const init2 = () => {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};
init2();
/* And, let's say you're asked to fetch this API endpoint 
  and log the email of every user. Here's how you'd do it: */
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((user) => {
      console.log(user.email);
    });
  });
//
//
//
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    console.log(data.title);
  });
//
//
//
const checkForNewNotifications3 = () => {
  fetch(
    "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      showNewNotifications(data.count);
    });
};
function showNewNotifications(count) {
  console.log(
    `You have ${count} new notifications. Would you like to read them?`
  );
}
checkForNewNotifications3();
//
//
//
// do exercise 43. Weather API Project
//
//
//
// do exercise 43. Tweet details
//
//
//
// do exercise 43. Get completed chapters
//
//
// Handling fetch errors
fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
/* The response object contains an ok field that returns
 true when the response was successful (status in the 2xx range).
So, you will be able to handle 4xx and 5xx by 
checking if response.ok was not true: */
fetch(URL)
  .then((response) => {
    if (!response.ok) {
      throw new Error("API issues.");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
/* Always handle rejections
Regardless of how the API handles errors, we recommend 
that you always handle the rejected state of fetch(). 
That's because network errors can occur at any time 
and you still want to handle that with the .catch().
So, in summary, here's the basic fetch boilerplate 
that you can save to your notes and use whenever necessary: */
fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
//
//
//
function ShowNewNotifications(count) {
  console.log(
    `You have ${count} new notifications. Would you like to read them?`
  );
}
const checkForNewNotifications4 = () => {
  fetch(
    "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      ShowNewNotifications(data.count);
    })
    .catch((error) => {
      console.error(error);
    });
};
checkForNewNotifications4();
//
//
//
// do exercise 44. Get completed chapters
//
//
//
// FETCH METHODS
/* 
GET: read data
POST: create data
PUT: update data
DELETE: delete data 

The fetch API defaults to the method GET.
Requests made with method PUT, POST, or 
DELETE can have an extra field called body. 
The body can contain any information that 
you want to send with the request.
Requests made with GET are not allowed to have a body.*/
fetch(URL, {
  method: "GET", // or "get"
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
//
fetch(URL, {
  method: "POST", // or "post"
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
//
//
//
/* Sending "body" */
fetch("https://example.com/api/tweets", {
  method: "POST",
  body: JSON.stringify({
    tweet: "Your tweet here...",
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
/* So, we cannot send objects directly to the API, 
thus we have to convert them to a string with JSON.stringify. */
//
// Fetch bolerplate:
fetch(URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    key1: "value1",
    key2: "value2",
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
/* The reason why some endpoints require this header is that 
they don't know that you're sending them JSON (since they 
support other formats too). Here's what the code looks like: */
//
//
//
// do exercise 45. Save grade
//
//
//
// do exercise 45. Update user profile
//
//
//
// --------------READ 46 MODULES-----------------
// exercise 46. Broken imports
// exercise 46. Helpers
// exercise 46. Numeric Helper
//
//
//
/* -----------Fetch Wrapper----------- */
class FetchWrapper {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }
  get(endpoint) {
    // todo
  }
}
API.get("/notifications/new.json").then((data) => {
  console.log(data);
});
/*  The code above is sending a fetch request to 
https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json.
This means that the fetch request is being sent to baseURL + endpoint. */
class FetchWrapper {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }
  get(endpoint) {
    return fetch(this.baseURL + endpoint).then((response) => response.json());
  }
}
//
//
//
class FetchWrapper {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }
  get(endpoint) {
    return fetch(this.baseURL + endpoint, {
      method: "get",
      headers: { "Content-Type": "application/json" },
    }).then((response) => response.json());
  }
}
//
//
// exercise 47. Implementing GET
//
// exercise 47. Display new notifications
//
// exercise 47. Weather API Project
//
// exercise 47. Tweet details
//
// exercise 47. Get completed chapters
//
//
// ---------Implementing PUT---------
// sample:
const API = new FetchWrapper("https://api.learnjavascript.online");
API.put("/demo/grades.json", {
  grade: 18,
}).then((data) => {
  console.log(data);
});
// ▼
class FetchWrapper {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }
  put(endpoint, body) {
    return fetch(this.baseURL + endpoint, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }).then((response) => response.json());
  }
}
//
// exercise 47. Implementing PUT
//
// exercise 47. Save grade
//
// exercise 47. Update user profile
//
//
//-------Implementing post() and delete()--------

/* we mentioned that the post() and delete() methods are 
very similar to the put(). The only thing that changes is the method: "put".
For that reason, we can rewrite the put function as an private helper:*/
class FetchWrapper {
  // constructor() and get()
  #send(method, endpoint, body) {
    return fetch(this.baseURL + endpoint, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }).then((response) => response.json());
  }
}
/* The #send() method takes the method ("put", "post", or "delete") 
followed by the endpoint and the body. So, now, we can implement 
the put(), post(), and delete() methods that call this internal 
private #send() method: */
class FetchWrapper {
  // constructor() and get()
  put(endpoint, body) {
    // pass the endpoint and body parameters to #send
    // and specify the method to be "put"
    return this.#send("put", endpoint, body);
  }
  post(endpoint, body) {
    // pass the endpoint and body parameters to #send
    // and specify the method to be "post"
    return this.#send("post", endpoint, body);
  }
  delete(endpoint, body) {
    // pass the endpoint and body parameters to #send
    // and specify the method to be 'delete'
    return this.#send("delete", endpoint, body);
  }
  #send(method, endpoint, body) {
    return fetch(this.baseURL + endpoint, {
      method,
      headers: { "COntent-Type": "application/json" },
      body: JSON.stringify(body),
    }).then((response) => response.json());
  }
}
//
//
/* In summary, here's the FetchWrapper class that we'll be using 
throughout the rest of the course (especially in the DOM + fetch projects): */
class FetchWrapper {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }
  get(endpoint) {
    return fetch(this.baseURL + endpoint).then((response) => response.json());
  }
  put(endpoint, body) {
    return this.#send("put", endpoint, body);
  }
  post(endpoint, body) {
    return this.#send("post", endpoint, body);
  }
  delete(endpoint, body) {
    return this.#send("delete", endpoint, body);
  }
  #send(method, endpoint, body) {
    return fetch(this.baseURL + endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());
  }
}
