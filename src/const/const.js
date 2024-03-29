const HOME_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat={LAT}&lng={LONG}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
const MEDIA_LINK = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
const SEARCH_RESULT_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/"
const REST_URL = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat={LAT}&lng={LONG}&restaurantId={RESTID}&catalog_qa=undefined&submitAction=ENTER" 
const LOCATION_URL = "https://www.swiggy.com/dapi/misc/address-recommend?latlng={LAT}%2C{LONG}"
const WELCOME_WORDS = ["Game night?", "Hungry", "Movie Marathon", "Unexpected guests", "Late Night at Office?", "Cooking gone wrong", "Game night"  ]
const PLACE_AUTOCOMPLETE_URL="https://www.swiggy.com/dapi/misc/place-autocomplete?input={PLACE_NAME}&types="
const RESTAURANT_LIST_POST_URL = "https://www.swiggy.com/dapi/restaurants/list/update"
const RESTAURANT_LIST_PAYLOAD = {"lat":0,"lng":0,"nextOffset":"COVCELQ4KID4jMaejtXxOTCnEzgD","widgetOffset":{"NewListingView_category_bar_chicletranking_TwoRows":"","NewListingView_category_bar_chicletranking_TwoRows_Rendition":"","Restaurant_Group_WebView_PB_Theme":"","Restaurant_Group_WebView_SEO_PB_Theme":"","collectionV5RestaurantListWidget_SimRestoRelevance_food_seo":"40","inlineFacetFilter":"","restaurantCountWidget":""},"filters":{},"seoParams":{"seoUrl":"https://www.swiggy.com/","pageType":"FOOD_HOMEPAGE","apiName":"FoodHomePage"},"page_type":"DESKTOP_WEB_LISTING","_csrf":"lShE3fwmIeuK-T4c2K01_nmWTSlhMw431bjkYdAk"}
const AUTOSUGESSTION_URL = "https://www.swiggy.com/dapi/restaurants/search/suggest?lat={LAT}&lng={LONG}&str={SEARCHED_STR}&trackingId=null"
HOTELMISMATCHMESSAGE = "Your cart contains items from other restaurant. Would you like to reset your cart for adding items from this restaurant?"

export {HOME_URL, MEDIA_LINK, REST_URL, LOCATION_URL, WELCOME_WORDS, RESTAURANT_LIST_POST_URL, RESTAURANT_LIST_PAYLOAD, AUTOSUGESSTION_URL, SEARCH_RESULT_URL, HOTELMISMATCHMESSAGE}