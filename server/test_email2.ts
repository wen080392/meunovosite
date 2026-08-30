import { sendLeadEmail } from './src/mailer'; sendLeadEmail({name: 'Test2', email: 'wende80392@gmail.com', source: 'contact'}, 'contact').then(() => console.log('Done')).catch(console.error);
