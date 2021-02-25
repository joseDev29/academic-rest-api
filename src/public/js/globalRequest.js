async function globalRequest(data, url, method, responseContainerId) {
  try {
    document.getElementById(responseContainerId).innerHTML = "LOADING...";

    let requestOptions = {
      headers: {
        "access-token": `${localStorage.getItem("access-token")}`,
      },
    };

    if (method !== "GET") {
      requestOptions = {
        headers: {
          ...requestOptions.headers,
          "Content-Type": "application/json",
        },
        method,
        body: JSON.stringify(data),
      };
    }

    const response = await fetch(url, requestOptions);

    document.getElementById(responseContainerId).innerHTML = JSON.stringify({
      status: response.status,
      response: await response.json(),
    });
  } catch (err) {
    document.getElementById(responseContainerId).innerHTML = err;
  }
}
