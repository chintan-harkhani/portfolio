// utils/axios.ts
import axios from 'axios';

// console.log('✅ Axios Base URL:', process.env.NEXT_PUBLIC_BACKEND_URI);
console.log('✅ Axios Base URL:', process.env.NEXT_PUBLIC_NEST_LIVE_BACKEND_URI);

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_NEST_LIVE_BACKEND_URI,
  headers: {
    'Content-Type': 'application/json',
  },

});

export default instance;
