> ### 1. How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

Although I wasn't counting and jumping between other things, I think perhaps 6 hours solidly on coding. I wasn't satisfied with my result at the deadline, but have enjoyed the process very much so have submitted it regardless. Thank you for looking over it.
Testing is something I haven't used too much,
I also started this out in a typescript framework but because I was encountering some troubles (especially when I first set this up using the Dead API), I decided to leave it out of this until I was faster and more confident in it.
Styling and UX is usually my strength, but I also left this to the side in favour of spending more time in the functionality.

> ### 2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

For returning a list of possible cities to populate an autocomplete suggestion dropdown, i would use optional chaining || nullish coallescing to give a default value if unavailable

> ### 3. How would you track down a performance issue in production? Have you ever had to do this?

Trying to recreate on local machine, I did have a problem with a SPA that would reload an element twice if the page was accessed from a source other than through an internal link, this was tricky to replicate without understanding how it appeared. Checking logs, seeing HOW things happen, for the script that was populating it added a console.log to it to detect if it was indeed that, that was firing, which it wasn't. It was another script on the page that ran on first page load.

> ### 4. How would you improve the API that you just used?

A call to list all cities, perhaps using a certain country or area as a query parameter if too many files requested.
Needing to wait on the first call to get the cityID before making the call to find restaraunts causes quite a large delay,
especially when I had tried to get some autocompletion based on partial matched names.
Using a correct city name as a parameter would also solve this

> ### 5. Please describe yourself using JSON.

````
[
    {
        "personal": {
            "fullName": "Phil Welsh",
            "currentAge": 32
        },
        "hobbies": [
            "art",
            "gaming",
            "fitness"
        ],
        "workRelated": {
            "title": "Front End Developer",
            "experience": "5 Years",
            "preferredLanguages": [
                "javascript",
                "React",
                "SCSS"
            ]
        },
        "enjoymentOfUniqueQuestions": true
    }
]```
````
