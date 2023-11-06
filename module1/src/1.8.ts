{

    // learn destructuring
    //object destructuring
const user = {
id: 230, 
name: {
    firstName: "Toma",
    middleName: "Akter",
    lastName: "Hashi"
    },
contactNo: "017888888",
address: "uganda"
}

    const { contactNo, name: {lastName} } = user;

//array destructuring

const myFriends = ["Hridoy", "joey", "rehana", "marium"]
    const [a, b, c] = myFriends;







}
