import transporter from './mailer';
import path from 'path';
import ejs from 'ejs';
import networkLink from '../utilities/networkLink';

export const sendEmail = async (to: string, subject: string, data:any): Promise<void> => {

  // Path to the EJS template
  const templatePath = path.join(__dirname, 'templates', 'mail.ejs');
  const { user, products, totalPrice, network, installments } = data
  

  const html = await ejs.renderFile(templatePath, { user, products, totalPrice, network: networkLink(network)! as string, installments });
  try {
    await transporter.sendMail({
      from: '"Your App Name" <your-email@example.com>', 
      to,                                              
      subject,                                         
      html,                                            
    });
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};
