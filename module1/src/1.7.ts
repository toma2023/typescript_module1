{
    //spread operator
    //rest operator
    // destructuring

   //learn spread operator
    const bros1: string[] = ["tanmoy", "nahid", "mejhba"];
    const bros2: string[] = ["akash", "arobi", "toma"];
    bros1.push(...bros2);


    const mentors1 = {
        typescript: " mezba",
        redux: "mir",
        dbms: "mizan"
    }

const mentors2 = {
        prisma: " firoz",
        nextjs: "tanmoy",
        cloud: "nahid"
    }

    
    const mentorList = {
        ...mentors1,
        ...mentors2
}
 //learn rest operator
    const greetFriends = (...friends: string[]) =>{
        // return `hi ${friend1} ${friend2} ${friend3}`
        friends.forEach((friend : String) => `hi ${friend}` )


}

    greetFriends("toma", "ruma", "shila")










}