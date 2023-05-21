const conn = require("octokit");

const connection = async () => {
  return new conn.Octokit({
    auth: process.env.GITHUB_TOKEN,
  });
};

const findAllRepositories = async (req, res, next) => {
  let username = "iamangelmp";
  try {
    const response = await (
      await connection()
    ).request(`GET /users/${username}/repos`, {
      username: username,
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error retrieving repositories:", error);
    return [];
  }
};

module.exports = findAllRepositories;
