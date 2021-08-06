export const getGitCommitHistory = async(payload) => {
    try {
        const api = 'https://api.github.com/repos/brendamesias/git_commit_history_displayer/commits';
        const options = {
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            method: 'GET',
        };
        const response = await fetch(api, options);
        // const signupResponse = await response.json();
        return response
    } catch (error) {
        console.trace(error);
    }
}