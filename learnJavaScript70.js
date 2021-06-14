fetch(URL)
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log(error);
});
//
fetch(URL)
.then(response => {
    console.log(response);
});
//
fetch(URL)
.then(response => {
    if(!response.ok) {
        throw new Error("API issues.");
    }
    return response.json();
})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log(error);
});
//
fetch(URL)
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log(error);
});
//
fetch(URL)
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error(error);
});
//
fetch(URL)
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error(error);
});
//
fetch(URL)
.then(response => {
    if(!response.ok){
        throw new Error(`API issues.`);
    }
    return response.json()
})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error(error);
});
//
fetch(URL)
.then(response => {
    if(!response.ok) {
        throw new Error('API issue.')
    }
    return response.json()
})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error(error)
});
//
fetch(URL)
.then(response => {
    if(!response.ok){
        throw new Error("API problem.")
    }
    return response.json()
})
.then(data => {
    console.log(data)
})
.catch(error => {
    console.error(error);
});
//
fetch(URL)
.then(response => {
    if(!response.ok){
        throw new Error("API issues.")
    }
    return response.json();
})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error(error);
});
//
const checkForNewNotifications = () => {
    fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        showNewNotifications(data.count)
    })
    .catch(error => {
        console.error(error);
    })
};
const showNewNotifications = count => {
    console.log(`Ypu have ${count} new notifications. Would you like to read them?`);
};
checkForNewNotifications();
//
function displayComletedChapters(chapters){
    console.log("Received", chapters);
};
const getChapters = () => {
    fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json")
    .then(response => {
        if(!response.ok){
            throw new Error("API issues")
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        const completedChapters = data.filter(chapter => 
            chapter.isCompleted);
            displayComletedChapters(completedChapters);
    })
};
getChapters();
//
fetch(URL, {
    method: "GET"
})
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
fetch(URL, {
    method: "PUT"
})
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
fetch("https://example.com/api/tweets", {
    method: "PUT",
    body: JSON.stringify({tweet: "Your tweet here..."})
})
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
fetch(URL, {
    method: "PUT",
    body: JSON.stringify({
        key1: 'value1',
        key2: 'value2',
    })
})
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
fetch("https://api.learnjavascript.online/demo/food.json",{
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
})
.then(response => response.json())
.then(data => {
    console.log(data);
});