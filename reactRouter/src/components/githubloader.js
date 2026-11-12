
const githubLoader = async () => {
    const response = await fetch("https://api.github.com/users/abdulwadood-ops")
    return response.json()
}

export default githubLoader