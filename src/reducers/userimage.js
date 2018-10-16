export default (state = [], action) => {
    switch (action.type) {
      case "FETCH_USER_IMAGES" :
      console.log(action)
      return action.payload;
      // case "REMOVE_QUOTE" :
      // return state.filter(quote => quote.id !== action.quoteId)
      // case "UPVOTE_QUOTE":
      // let foundQuote = state.find(quote => quote.id === action.quoteId)
      // foundQuote.votes += 1
      // return state;
      // case "DOWNVOTE_QUOTE":
      // let foundDownQuote = state.find(quote => quote.id === action.quoteId)
      // if (foundDownQuote.votes > 0) {
      //   foundDownQuote.votes -= 1
      // }
      // return state;
      default :
      return state;
    }
  }
  