export const getExamScore = async(examId)=>{
    try {
        const url = `http://localhost:3001/exams/${examId}`
        const response = await fetch(url,{
            method:"get"
        })
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}
export const startTest = async(body)=>{
    try {
        const url = `http://localhost:3001/exams/start`
        const response = await fetch(url,{
            method:"Post",
            body: JSON.stringify(body),
            headers:{
                "Content-Type":"application/json"
            }
           
        })
      return response.json()
    } catch (error) {
        console.log(error)
    }
}
export const answerExam = async (examId,answer)=>{
    try {
        const url = `http://localhost:3001/exams/${examId}/${answer}`
        const response = await fetch(url,{
            method:"Post",
           
            headers:{
                "Content-Type":"application/json"
            }
        })
        return response
    } catch (error) {
        console.log(error)
    }
}