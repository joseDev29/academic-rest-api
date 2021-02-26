function formatResponse(object, text) {
  try {
    if (!object) return text;

    if (typeof object !== "object") {
      text += `<div>${object}</div>`;

      return text;
    }

    const keys = Object.keys(object);

    if (!keys.length) return text;

    keys.map((key) => {
      if (typeof object[key] === "object") {
        text += `
          <div> ${key} : {
             <div>${formatResponse(object[key], ``)}</div>
          }</div>
          `;
      } else {
        text += `<div>${key} : ${object[key]}</div>`;
      }
    });
  } catch (err) {
    console.log(err);
  }

  return text;
}
