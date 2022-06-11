export default class NumericHelper {
    constructor(number) {
        this.number = number;
    }
    isEven() {
        return this.number % 2 === 0;
    }
    isOdd() {
        return this.number % 2 === 1;
    }
}

export class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    get(endpoint) {
        return fetch(this.baseURL + endpoint, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        }).then(response => response.json());
    }
}
