import axios from 'axios';

export default axios.create({
  baseURL:
    process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true'
      ? 'http://localhost:8000'
      : 'http://ira2.herokuapp.com'
});
