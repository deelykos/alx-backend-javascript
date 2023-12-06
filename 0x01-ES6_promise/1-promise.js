function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
      if (success) {
        resolve({
          status: 20,
          bdody: "Success",
        });
      } else {
        reject(new Error("The fake API is not working currently"));
      }
    });
  }
  
  export default getFullResponseFromAPI;
  