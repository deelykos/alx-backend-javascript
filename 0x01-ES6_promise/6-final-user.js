import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const result = [];
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      results.map(({ status, value, reason }) => (
        result.push({
          status,
          value: status === 'fulfilled' ? value : reason.toString(),
        })
      ));
      return result;
    });
}
