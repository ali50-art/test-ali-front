"use client"
import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { faThumbsUp as solidThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as regularThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  audiobooks: any[];
}

const AudiobooksPage = () => {
  const [votes, setVotes] = useState<number[]>(); // Track votes
  const [audiobooks,setAudiobooks]=useState([])
  const handleVote = async(audiobook_id: any) => {
    const token=localStorage.getItem("token")
    await axios.post(`${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/vote`,{audiobook_id}, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the Bearer token in the headers
        },
      });
      handleGetAllAudioBooks()
  };
  const handleGetAllAudioBooks=async()=>{
    const token=localStorage.getItem("token")
    try{
            const response = await axios.get(`${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/list_audiobook`, {
            headers: {
              Authorization: `Bearer ${token}`, // Include the Bearer token in the headers
            },
          });
          setAudiobooks(response.data.data)
    }catch(err){
        console.log(err);
        
    }
  }
  useEffect(()=>{
    handleGetAllAudioBooks()
  },[])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Audiobooks</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {audiobooks.map((audiobook:any, index) => (
          <div key={audiobook.id} className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 relative">
            <img
              src={audiobook.cover_image_url}
              alt={audiobook.title}
              className="w-full h-40 object-cover rounded-md mb-2"
            />
            <h2 className="text-lg font-semibold">{audiobook.title}</h2>
            <p className="text-gray-700">{audiobook.author}</p>
            <p className="text-gray-600">Votes: {audiobook.vote_count}</p>
            <button 
              onClick={() => handleVote(audiobook.id)} 
              className="absolute top-2 right-2 p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
              title="Vote for this audiobook"
            >
              {audiobook.has_voted?<FontAwesomeIcon icon={solidThumbsUp} />:<FontAwesomeIcon icon={regularThumbsUp} /> }
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};



export default AudiobooksPage;
