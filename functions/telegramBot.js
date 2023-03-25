exports.handler = async function (event) {
  const body = JSON.parse(event.body);
  const message = body.message || body.edited_message;

  // Process the message and respond
  // ...

  return {
    statusCode: 200,
    body: JSON.stringify({ status: 'OK' }),
  };
};
