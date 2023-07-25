export const generatePrompt = (category:string, difficulty:string) => {
    return `Act like you are a math professor tutoring one of your students. Can you generate a list of 5 ${category} problems that are of ${difficulty} difficulty. Format the problems in LaTex.`
}