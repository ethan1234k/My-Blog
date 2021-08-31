const initialState = { 
  testNum: 5, 
  welcomeMessage: "Welcome to the Spogo Marketplace",
  listingsArray: [],
}

export const store = (state = initialState, action) => {

  const newState = {...state};

  function listingObject (title, description, date) {
    this.title = title;
    this.description = description;
    this.date = date;
  }

  if (action.type === "Add Listing") {
    const listingObjectExample = new listingObject(
      "Social Media Partner",
      "Dominoes Pizza",
      "August 23, 2021",
    );
    newState.listingsArray.push({...listingObjectExample})
  }
  
  if (action.type === "Delete Listing") {
    if (newState.listingsArray.length > 0) {
      newState.listingsArray.pop()
    }
  }






  // if (action.type === "Add") {
  //   newState.testNum++;
  // }
  // if (action.type === "Subtract") {
  //   newState.testNum--;
  // }
  // if (action.type === "Change Message") {
  //   if (newState.welcomeMessage === "Welcome to the Spogo Marketplace") {
  //     newState.welcomeMessage = "Thanks for using Spogo"
  //   } else {
  //     newState.welcomeMessage = "Welcome to the Spogo Marketplace"
  //   }
  // }

  return newState;
};
