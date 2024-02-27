import { useEffect, useState } from "react";
import "./Organization.css";
import Repo from "./Repo";

function Organization({ orgs, currentOrg, currentOrgData, setCurrentOrg }) {
  function handleNext() {
    let nextOrg = orgs[orgs.indexOf(currentOrg) + 1];
    if (!nextOrg) {
      nextOrg = orgs[0];
    }
    setCurrentOrg(nextOrg);
  }
  const [repos, setRepos] = useState([]);
  //      |      |            |
  //      |      |       passing initial value ([]) for "repos" variable
  //      |   create function for updating "repos" variable 
  // create state variable
  useEffect(() => {
    async function fetchRepos() {
      const response = await fetch(
        `https://api.github.com/orgs/${currentOrg}/repos`
      ); // fetching data about repos of organization
      const result = await response.json(); // convert respond object into JS 
      setRepos(result); // update "repos" array with array of objects
      //console.log(result);
    }
    fetchRepos();
  }, [currentOrg]);
  //console.log(repos);

  return (
    <div className="org">
      <button onClick={handleNext}>Next</button>

      <h2>{currentOrgData.name}</h2>
      <img src={currentOrgData.avatar_url} alt="" />
      <p>{currentOrgData.description}</p>
      <p>
        {currentOrgData.location} {currentOrgData.followers} followers
      </p>
      <ul>
        {/* Iterating through repos array and rendering Repo component with repo and key arguments */}
        {repos.map((repo, index) => (
          <Repo key={index} repo={repo} />
        ))}
      </ul>
    </div>
  );
}

export default Organization;
