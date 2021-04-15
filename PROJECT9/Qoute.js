
var arrayOfQuotes = [

    { 
        "author":"Alfred Tennyson",
        "quote": "f I had a flower for every time I thought of you… I could walk through my garden forever."
    },
    { 
        "author":"Benjamin Franklin",
        "quote":"Either write something worth reading or do something worth writing"
    },
    { 
        "author":"Robert Frost",
        "quote": "We love the things we love for what they are"
    },
    { 
        "author":"Roy Croft",
        "quote": "I love you not because of who you are, but because of who I am when I am with you."
    },
    { 
        "author":"Julia Roberts",
        "quote": "You know it’s love when all you want is that person to be happy, even if you’re not part of their happiness."
    },
    { 
        "author":"Walter Bagehot",
        "quote": "The great pleasure in life is doing what people say you cannot do."
    }
    

]

function randonSelector(arrayLength){
    return Math.floor(Math.random()* arrayLength);
}

function generateQuote(){
    
    var randomNumber = randonSelector(arrayOfQuotes.length);

    document.getElementById("quoteOutput").innerHTML = '"' + arrayOfQuotes[randomNumber].quote + '"';

    document.getElementById("authorOutput").innerHTML = '-' +arrayOfQuotes[randomNumber].author;

}