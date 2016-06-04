export default {

  getUsers(callback) {
    // This should actually be a fetch AJAX request
    setTimeout(() => {
      callback(["newGuy"]);
    }, 2000);
  }

};
