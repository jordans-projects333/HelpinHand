import twilio from 'twilio';
export default function sendMessage(req, res) {
  const accountSid = 'ACaac2eebd2aa5d210ffba2609a7edcc5c'
  const token = '42e70f76588706273c7c8f6a47807302'
  const client = twilio(accountSid, token);
  // const { phone, message } = req.body;
  // console.log(phone, message);
  client.messages
    .create({
      body: 'fuck face',
      from: '+16075645663',
      to: '+447720861605',
    })
    .then((message) =>
      res.json({
        success: true,
      })
    )
    .catch((error) => {
      console.log(error);
      res.json({
        success: false,
      });
    });
}