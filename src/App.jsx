import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    if (userName) {
      axios
        .get(`https://api.github.com/users/${userName}`)
        .then((response) => setUserData(response.data))
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className='App'>
      <form onSubmit={handleSearch}>
        <div class='d-flex  justify-content-around container-sm mt-5'>
          <h2 class='text-white'>devfinder</h2>
          <h2 class='text-white'>Light-Mode</h2>
        </div>
        <div class='input-group m-4 d-flex justify-content-center w-50 mx-auto'>
          <input
            type='text'
            class='form-control pr-5'
            placeholder='Search Github username'
            aria-label="Recipient's username"
            aria-describedby='basic-addon2'
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
          <div class='input-group-append position-relative'>
            <button
              class='btn btn-outline-secondary position-abslute z-1 mr-auto'
              type='submit'
            >
              Button
            </button>
          </div>
        </div>
      </form>

      <div class='container custom-bg rounded-4 py-4 mx-auto w-50'>
        <div class='generalInfo-Container d-flex justify-content-between align-items-center'>
          <div class='d-flex justify-content-around mt-4'>
            <div class='user-container d-flex'>
              <img
                src={userData.avatar_url}
                alt=''
                class='rounded-circle w-25'
              />
              <div class='user-profile flex-column'>
                <h2 class='text-white'>{userData.name}</h2>
                <p class='text-white'>@{userData.login}</p>
                <p className='text-white mt-4'>{userData.bio}Testing</p>
              </div>
            </div>
            <div class='user_join-container'>
              <h3 class='text-white'>
                {/*.substring(0, 10) use this if needed*/}
                Joined {userData.created_at}
              </h3>
            </div>
          </div>
        </div>
        <div class='stats-container bg-dark d-flex justify-content-around mt-5 align-items-center w-75 rounded-4 pt-3'>
          <div className='stats'>
            <h2 class='text-white'>Repos</h2>
            <p class='text-white'>{userData.public_repos}</p>
          </div>
          <div className='stats'>
            <h2 class='text-white'>Followers</h2>
            <p class='text-white'>{userData.followers}</p>
          </div>
          <div className='stats'>
            <h2 class='text-white'>Following</h2>
            <p class='text-white'>{userData.following}</p>
          </div>
        </div>
        <div className='extra-info mt-4 d-flex justify-content-around align-items-center w-75 mx-auto'>
          <div>
            <p class='text-white'>{userData.location}</p>
            <p class='text-white'>{userData.twitter_username}Testing</p>
          </div>
          <div>
            <p class='text-white'>{userData.blog}</p>
            <p class='text-white'>{userData.company}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
