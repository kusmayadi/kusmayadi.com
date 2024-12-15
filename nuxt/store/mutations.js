export default {
  changeHeaderTitle (state, title) {
    state.headerTitle = title;
  },

  isHomepage (state, homepage) {
    state.homepage = homepage;
  },

  isMenuOpen (state, close = true) {
    if (!close) {
      state.isMenuOpen = false;
    } else {
      state.isMenuOpen = !state.isMenuOpen;
    }

  }
}
