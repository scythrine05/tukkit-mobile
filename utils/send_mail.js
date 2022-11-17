import qs from 'qs';
import {Linking} from 'react-native';

export async function sendFeedback() {
  let url = 'mailto:tech.tukkit@gmail.com';

  // Create email link query
  const query = qs.stringify({
    subject: 'Feedback',
  });

  return Linking.openURL((url += `?${query}`));
}
