import React, {
  useState,
  useContext,
  useReducer,
  useEffect,
  createContext,
} from "react";
import sublinks from "./data/stripedata";
import reducer from "./reducer";

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
  CLEAR_CART,
  TOGGLE_AMOUNT,
  DISPLAY_ITEMS,
  LOADING,
  GET_TOTALS,
  REMOVE,
} from "./actions";

const url = "https://course-api.com/react-useReducer-cart-project";
const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";

const AppContext = createContext();

const initialState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0,
  isLoading: true,
  hits: [],
  query: "react",
  page: 0,
  nbPages: 0,
};

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //stripe
  const [isStripeSidebarOpen, setIsStripeSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [page, setPage] = useState({ page: "", links: [] });
  const [location, setLocation] = useState({});

  //cart
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const remove = (id) => {
    dispatch({ type: REMOVE, payload: id });
  };

  const fetchData = async () => {
    dispatch({ type: LOADING });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: DISPLAY_ITEMS, payload: cart });
  };

  const toggleAmount = (id, type) => {
    dispatch({ type: TOGGLE_AMOUNT, payload: { id, type } });
  };

  // hacker news
  const fetchStories = async (url) => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({
        type: SET_STORIES,
        payload: { hits: data.hits, nbPages: data.nbPages },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeStory = (id) => {
    dispatch({ type: REMOVE_STORY, payload: id });
  };
  const handleSearch = (query) => {
    dispatch({ type: HANDLE_SEARCH, payload: query });
  };
  const handlePage = (value) => {
    dispatch({ type: HANDLE_PAGE, payload: value });
  };

  useEffect(() => {
    fetchData();
    fetchStories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  useEffect(() => {
    dispatch({ type: GET_TOTALS });
  }, [state.cart]);

  //sidebar and modal
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  //stripe
  const openStripeSidebar = () => {
    setIsStripeSidebarOpen(true);
  };
  const closeStripeSidebar = () => {
    setIsStripeSidebarOpen(false);
  };
  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        isSidebarOpen,
        isModalOpen,
        openModal,
        closeModal,
        openSidebar,
        closeSidebar,
        isStripeSidebarOpen,
        openStripeSidebar,
        closeStripeSidebar,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        page,
        location,
        clearCart,
        remove,
        toggleAmount,
        removeStory,
        handleSearch,
        handlePage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
