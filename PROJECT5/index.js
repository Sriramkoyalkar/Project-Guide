console.log("cv screener project")
// Candidate Application for Data Scientist Job
//through this we can go through an number of applications and select some for giving jobs//basically company manager/selectors use this app for better and easier use inorder to select freshers

//Data is an array of objects which contain information about the candidates
const data = [
    {
        name : 'Rishita saxena',
        age : 24,
        city : 'hyderabad',
        language : 'Python',
        framework : "Django",
        image : 'https://randomuser.me/api/portraits/women/81.jpg'
    },


    {
        name : 'trumpet trimmi',
        age : 36,
        city : 'cape town',
        language : 'JavaScript',
        framework: 'Angular js',
        image : 'https://randomuser.me/api/portraits/men/72.jpg'
    },
    

    {
        name : "Diana",
        age : 21,
        city : 'los angles',
        language : 'Python',
        framework : 'Django',
        image : 'https://randomuser.me/api/portraits/women/72.jpg'
    },

    {
        name : 'Riche rich',
        age : 34,
        city : 'kolkata',
        language : 'Python',
        framework : 'Flask',
        image : 'https://randomuser.me/api/portraits/men/69.jpg'
    },

    {
        name : 'Larry jez',
        age : 29,
        city : 'London',
        language :' go',
        framework : 'dgo',
        image : 'https://randomuser.me/api/portraits/women/75.jpg'
    },

]

// CV Iterator
function cvIterator(profiles){
    let nextIndex=0;
    return {
        next: function(){ 
            return nextIndex<profiles.length ?
            {value: profiles[nextIndex++], done: false} :
            {done: true}
            //we use ternary operator in substitute with if else conditon
        }
    };
}
const candidates = cvIterator(data);

nextCV();
// Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);


function nextCV(){
    //nextCV function populate/update next profile and image on screen
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
  </ul>`;
    }
    else{
        alert('End of candidate applications');
        window.location.reload();
    }

}
