// This only works in typescript

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

// * This is the common way of working around in this kind of scenario
// function createCourseGoal(
//     title: string,
//     description: string,
//     date: Date,
// ): CourseGoal {
//     return { title: title, description: description, completeUntil: date };
// }

function createCourseGoal(
    title: string,
    description: string,
    date: Date,
): CourseGoal {
    // Partial sets all the properties of CourseGoal as an optional, after that it will be possible to make the initial value empty
    let courseGoal: Partial<CourseGoal> = {}; // this is only possible because of Partial utility
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal; // use typecasting
}
