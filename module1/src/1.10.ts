{

    // UNION TYPE || hoi eita noi oitaa
    // type FrontendDeveloper  = "fakibazDeveloper" | "JuniorDeveloper"
    // type FullStackDeveloper  = "frontendDeveloper" | "ExpertDeveloper"

    // type Developer = FrontendDeveloper | FullStackDeveloper;



    // const newDeveloper : FrontendDeveloper = "JuniorDeveloper"

    // 
    type User = {
        name: string;
        email: string;
        gender: 'male' | ' female';
        bloodGroup: "O+"| "B+"| "AB"

    }

    const user1: User = {
        name: "Toma",
        email: "prio@gmail.com",
        gender:' female',
        bloodGroup: "O+"
}

    type FrontendDeveloper = {
        skills: string[];
        designation1 : "Frontend Developer"
}
    type BackendDeveloper = {
        skills: string[];
        designation2 : "Backend Developer"
}

type FullStackDeveloper = FrontendDeveloper & BackendDeveloper

const fullStackDeveloper: FullStackDeveloper = {
    skills: ["HTML", "REact", "Tailwind", "Express"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer"
    
}















}