const sendSMS = async (phone) => {
  const min = 10000,
    max = 99999;
  let code = Math.floor(Math.random() * (max - min) + min);
  console.log(`Sending sms with code ${code} to phone number ${phone}`);
};

module.exports = {
  sendSMS,
};
