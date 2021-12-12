getWeatherIn('Amsterdam')
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error(error);
})
.finally(() => {
    console.log('Done fetching weather');
});
console.log('a');
//
getWeatherIn('Amsterdam')
.then(data => {
    throw new Error('Stopped');
    console.log(data)
    console.log('Done fetching weather');
})
.catch(error => {
    console.error(error);
    console.log('Done fetching weather');
});
//
startLoader();
getWeatherIn('Amsterdam')
.then(data => {
    stopLoader();
    console.log(data);
})
.catch(error => {
    stopLoader();
    console.error(error);
}).finally(() => {
    stopLoader();
});
//
const waitOneSecond = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}
waitOneSecond().then(() => {
    console.log('Waited one second!');
});
//
const waitTwoSeconds = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2000);
    });
}
waitTwoSeconds().then(() => {
    console.log('I waited two seconds!');
});
//
const wait = milliseconds => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const seconds = milliseconds / 1000;
            resolve(seconds);
        }, milliseconds);
    });
}
wait(2000).then(data => {
    console.log(data);
});
//
const fakeFetch = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
           resolve({
               data: 'View',
               time: 'Appeared in three seconds'
           });
        }, 3000);
    });
}
fakeFetch().then(data => {
    console.log(data);
});
//
const alwaysFail = () => {
    return new Promise((resolve, reject) => {
        reject(`That's only thing I do`);
    });
}
alwaysFail().then(data => {
    console.log(data);
})
.catch(error => {
    console.error(error);
});
//
const fakeFetch = endpoint => {
    return new Promise((resolve, reject) => {
        if(endpoint !== 'Special data') {
            return reject('You typed a wrong data. Try again, please.')
        }
        setTimeout(() => {
            resolve({
                dataType: 'information',
                count: 3
            });
        }, 1000);
    });
}
fakeFetch('ST').then(data => {
    console.log(data);
}).catch(error => {
    console.error(error);
});
fakeFetch('Special data').then(data => {
    console.log(data);
}).catch(error => {
    console.error(error);
});
//
const data = {
    firstName: 'Sam',
    lastName: 'Green'
};
const string = JSON.stringify(data);
console.log(string);
//
const willItRain = string => {
    const data = JSON.parse(string);
    return data.now.rainExpected;
}
console.log(willItRain(`{"now":{"temperature":18,"humidity":"30%","uvIndex":0,"rainExpected":true}}`));
//
const prepareStatus = (status, location) => {
    const userId = 42;
    const data = {
        userId,
        status,
        location
    };
    return JSON.stringify(data);
}
console.log(prepareStatus('My first post!', 'Iceland'));
//
const init = () => {
    console.log('A');
    fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json')
    .then(response => response.json())
    .then(data => {
        console.log('B');
        console.log(data);
        console.log(data.message);
    })
    console.log('C');
}
init();
//
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
    console.log(data);
    data.forEach(user =>  {
        console.log(user.phone);
        console.log(user.id);
        console.log(user.name);
    });
});
//
fetch(URL)
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error('Error');
});
//
fetch(URL, {
    method: 'POST'
}).then(response => response.json())
.then(data => {
    console.log(data);
});
//
fetch('https://example.com/api/tweets', {
    method: 'POST',
    body: JSON.stringify({
        tweet: 'Your tweet here...'
    })
})
.then(response => response.json())
.then(data => {
    console.log(data);
});
//
fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
        key1: 'value1',
        key2: 'value2'
    })
})
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error('sd');
});
//
fetch(URL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        key1: 'value1',
        key2: 'value2'
    })
})
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error('Error!');
});
//
class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    get(endpoint) {
        return fetch(this.baseURL + endpoint, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).then(response => response.json());
    }
}