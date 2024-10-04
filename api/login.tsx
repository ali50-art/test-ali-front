import axios from 'axios';

const loginUser = async (email:string, password:string) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_APP_BASE_URL}/login`, {
      email,
      password,
    });

    // Handle the response, for example, save the token in localStorage
    console.log(response.data);
    
    const { token } = response.data;


    return response.data;
  } catch (error) {
    console.error('Login error:');
    throw error; // Rethrow the error for further handling
  }
};
export default loginUser