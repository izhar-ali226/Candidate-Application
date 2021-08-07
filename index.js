// data is an array of objects white contains information
const data = [
  {
    name: "Hassan",
    age: 22,
    city: "Karachi",
    language: "Javascript",
    framework: "React.js",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },

  {
    name: "Kashif",
    age: 24,
    city: "Karachi",
    language: "Javascript",
    framework: "Vue.js",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
  },

  {
    name: "Arshad",
    age: 25,
    city: "Lahore",
    language: "javascript",
    framework: "Anguler.js",
    image: "https://randomuser.me/api/portraits/men/37.jpg",
  },
  {
    name: "Izhar",
    age: 24,
    city: "Islamabad",
    language: "Java",
    framework: "Spring",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "ana",
    age: 31,
    city: "islamabad",
    language: "Java",
    framework: "Struts",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

// cv iterator
function cvIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}

const candidate = cvIterator(data);
nextcv();
const next = document.getElementById("next");
next.addEventListener("click", nextcv);

function nextcv() {
  const currentcandidate = candidate.next().value;
  let image = document.getElementById("image");
  let profile = document.getElementById("profile");
  if (currentcandidate != undefined) {
    image.innerHTML = `<img src='${currentcandidate.image}'></img>`;
    profile.innerHTML = `<ul class="list">
<li>Name: ${currentcandidate.name}</li>
<li>${currentcandidate.age} Years old</li>
<li>Lives in ${currentcandidate.city}</li>
<li>Works on ${currentcandidate.language}</li>
<li> Uses ${currentcandidate.framework} Framework</li>
</ul>`;
  } else {
    alert("End of candidate Application ");
    window.location.reload();
  }
}
