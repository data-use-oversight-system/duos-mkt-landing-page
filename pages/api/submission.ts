import axios from 'axios';

export const submitSlack = async (email: string) => {
  const url = process.env.SLACK_URL;
  const data = JSON.stringify({
    email,
  });
  axios
    .post(url, data)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};
