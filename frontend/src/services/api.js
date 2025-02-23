import axios from 'axios';

// Base API URL
const API = axios.create({ baseURL: 'http://localhost:5000/api' });

/** 
 * 🔐 AUTHENTICATION API CALLS 
 */
export const signup = (data) => API.post('/auth/signup', data);
export const login = (data) => API.post('/auth/login', data);

/** 
 * 💼 JOB LISTINGS API CALLS 
 */
export const fetchJobs = () => API.get('/jobs');
export const fetchJobDetails = (id) => API.get(`/jobs/${id}`);
export const createJob = (data) => API.post('/jobs', data);

/** 
 * 📑 APPLICATION API CALLS 
 */
export const applyForJob = (data) => API.post('/apply', data);

/** 
 * 👤 USER PROFILE API CALLS 
 */
export const getFreelancerProfile = (id) => API.get(`/freelancer/${id}`);
export const getEmployerProfile = (id) => API.get(`/employer/${id}`);
