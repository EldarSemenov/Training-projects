const positions = document.querySelector("#job-position");
positions.insertAdjacentHTML("beforeend", `<div class="position">2014-2015</div>`);
positions.insertAdjacentHTML("beforeend", `<div class="position">2015-2016</div>`);
positions.insertAdjacentHTML("beforeend", `<div class="position">2016-2017</div>`);
positions.insertAdjacentHTML("beforeend", `<div class="position">2017-2018</div>`);
positions.insertAdjacentHTML("beforeend", `<div class="position'>2018-2019</div>`);
positions.insertAdjacentHTML("beforeend", `<div class="position">2019-2020</div>`);
//
positions.insertAdjacentHTML("afterbegin", `<div class="position">2011-2012</div>`);
positions.insertAdjacentHTML("afterbegin", `<div class="position">2010-2011</div>`);
positions.insertAdjacentHTML("afterbegin", `<div class="position">2009-2010</div>`);
positions.insertAdjacentHTML("afterbegin", `<div class="position">2008-2009</div>`);
positions.insertAdjacentHTML("afterbegin", `<div class="position">2007-2008</div>`);
//
const list = document.querySelector("#apps-list");
const apps = ['calculator', 'phone', 'messages'];

apps.forEach(app =>{
    list.insertAdjacentHTML("beforeend", `<li>${app}</li>`);
});
//
const year = document.querySelector("#id");
const myList = ["car", "country", "he", "progress", "me"];

myList.forEach(li => {
    year.insertAdjacentHTML("beforeend", `<li>${li}</li>`);
});
//
const div = document.querySelector("#container");
div.innerHTML += `<p>Another paragraph</p>`;
div.innerHTML += `<ol>
<li>Car</li>
<li>Money</li>
</ol>`;
//
const job = document.querySelector("#job");
job.insertAdjacentHTML("beforeend", `<div class="position">Doctor</div>`);
job.insertAdjacentHTML("afterbegin", `<div class="position">Car-Driver</div>`);
//
const citizen = document.querySelector("#citizen");
const names = ['James Lee', 'Eldar Noeman', 'Pol Hertern'];

names.forEach(name => {
    citizen.insertAdjacentHTML("beforeend", `<li>${name}</li>`);
});