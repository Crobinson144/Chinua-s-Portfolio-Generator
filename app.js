const profileDataArgs = process.argv.slice(2);
const [name, github] = profileDataArgs;

const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;

console.log(generatePage(name, github));
