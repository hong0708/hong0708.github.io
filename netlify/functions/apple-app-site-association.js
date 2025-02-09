exports.handler = async (event, context) => {
  if (event.path === "/.well-known/apple-app-site-association") {
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        // apple-app-site-association 파일 내용
        "applinks": {
          "apps": [],
          "details": [
            {
              "appID": "QAD9LCZYTG.com.q7.webos2",
              "paths": ["*"]
            }
          ]
        }
      })
    };
  }

  return {
    statusCode: 404,
    body: "Not Found"
  };
};
