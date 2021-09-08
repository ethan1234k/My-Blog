const initialState = {
  blogsArray: [],
};

export const store = (state = initialState, action) => {
  const newState = { ...state };

  function transformArray (arr) {
    let duplicateArray = arr
    let new2DArray = []
    while (duplicateArray.length) {
      new2DArray.push(duplicateArray.splice(0, 3))
    }
    console.log(new2DArray)
  }

  if (action.type === "Set Blog Array") {
    newState.blogsArray = action.array.reverse();
    console.log(newState.blogsArray);
  }

  if (action.type === "Add Blog To Array") {
    const newBlog = action.blog
    newState.blogsArray = newState.blogsArray.unshift(newBlog) 
    console.log(newState.blogsArray)
  }

  if (action.type === "Delete Blog Item") {
    const newBlogArray = newState.blogsArray.filter(
      (blog) => blog.id !== action.id
    );
    newState.blogsArray = newBlogArray;
    console.log(newState.blogsArray)
  }

  return newState;
};
