import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { fetchMeals, fetchMeal, fetchCategories } from "../index";

const mockStore = configureMockStore([thunk]);

describe("Meals Actions", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      meals: {},
      categories: []
    });
  });

  describe("fetchMeals action creator", () => {
    it("dispatches FETCH_MEALS action and returns data on success", async () => {
      await store.dispatch(fetchMeals('Seafood'));
      const actions = store.getActions();
      expect(actions[0].type).toEqual("FETCH_MEALS");
      expect(actions[0].payload[0].strMeal).toEqual("Baked salmon with fennel & tomatoes");
    });
  });
  
  describe("fetchMeal action creator", () => {
    it("dispatches FETCH_MEAL action and returns data on success", async () => {
      await store.dispatch(fetchMeal('52819'));
      const actions = store.getActions();
      expect(actions[0].type).toEqual("FETCH_MEAL");
      expect(actions[0].payload[0].strMeal).toEqual("Cajun spiced fish tacos");
    });
  });
  
  describe("fetchCategories action creator", () => {
    it("dispatches FETCH_CATEGORIES action and returns data on success", async () => {
      await store.dispatch(fetchCategories());
      const actions = store.getActions();
      expect(actions[0].type).toEqual("FETCH_CATEGORIES");
      expect(actions[0].payload[0].idCategory).toEqual("1");
      expect(actions[0].payload[0].strCategory).toEqual("Beef");
    });
  });

});
