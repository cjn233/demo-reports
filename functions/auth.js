exports.handler = async (event, context) => {
  const auth = event.headers.authorization || "";
  const encoded = Buffer.from("admin:carol").toString("base64");

  if (auth !== `Basic ${encoded}`) {
    return {
      statusCode: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' },
      body: "Unauthorized",
    };
  }

  return { statusCode: 200, body: "Access Granted" };
};
