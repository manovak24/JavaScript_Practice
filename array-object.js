//Array to Object I
//Ex: pulled fruits from a database into array and now convert to an object
const fruits = [
    'orange', 'orange', 'apple', 'orange', 'apple', 'pear'
];
//count how many of each fruit
//Below we are initializing fruit counts variable. Then we are looping through the fruit array. First items orange, if there is not fruitCounts[fruit], it will go to else code block and create a fruitCounts[fruit]. Then when going to next item in array since there is already an orange fruitCounts[fruit], it goes to if code block and increaes the orange fruitCounts[fruit].
const fruitCounts = {};
for(let fruit of fruits) {
    console.log(fruitCounts);
    if(fruitCounts[fruit]) {
        fruitCounts[fruit]++
    } else {
        fruitCounts[fruit] = 1;
    }
}
console.log(fruitCounts)

//Array to Object II
// Creating a simple 'map'
const users = [
    {username: 'aaron', fullname: 'Aaron Jack', description: 'Software Developer'},
    {username: 'jan', fullname: 'Jan Fre', description: 'Shopify Developer'},
    {username: 'igor', fullname: 'Igor Kalishnakov', description: 'Massage Therapist'}
]
//This is very useful when pulling arrays from database and need to access specific object. The username can be used as the unique key to seach for specific object and pull that data
const userMap = {};
for (let user of users) {
    console.log(user.username);
    userMap[user.username] = user;
}
//console.log(userMap);
console.log(userMap.aaron);

//Array to Object III
const tweets = [
    {day: 'Monday', text: 'Im tired'},
    {day: 'Monday', text: 'Need coffee'},
    {day: 'Tuesday', text: 'Feeling better'},
    {day: 'Friday', text: 'Ready to party'},
    {day: 'Friday', text: 'Lost my phone...'}
]

const tweetsByDay = {};
for (let tweet of tweets) {
    //console.log(tweet.day);
    //console.log(tweet.text);
    if (tweetsByDay[tweet.day]) {
        tweetsByDay[tweet.day].push(tweet.text);
    } else {
        tweetsByDay[tweet.day] = [tweet.text];
    }
}
console.log(tweetsByDay);

// const tweetsMap = {};
//     for(let tweet of tweets) {
//       if (tweetsMap[tweet.timestamp]) {
//         tweetsMap[tweet.timestamp].push(tweet.content)
//       } else {
//         tweetsMap[tweet.timestamp] = [tweet.content]
//       }
//     }
//       console.log(tweetsMap)