import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from 'axios';
import { fetchMeals, fetchMeal, fetchCategories } from '../index';

const mockStore = configureMockStore([thunk]);

describe('Meals Actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      meals: {},
      categories: [],
    });
  });

  describe('fetchMeal action creator', () => {
    it('dispatches FETCH_MEAL action and returns data on success', async () => {
      const mockData = {
        idMeal: '52819',
        strMeal: 'Cajun spiced fish tacos',
        strDrinkAlternate: null,
        strCategory: 'Seafood',
        strArea: 'Mexican',
        strInstructions: 'strInstructions',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg',
        strTags: 'Spicy,Fish',
        strYoutube: 'https://www.youtube.com/watch?v=N4EdUt0Ou48',
        strIngredient1: 'cajun',
        strIngredient2: 'cayenne pepper',
        strIngredient3: 'white fish',
        strIngredient4: 'vegetable oil',
        strIngredient5: 'flour tortilla',
        strIngredient6: 'avocado',
        strIngredient7: 'little gem lettuce',
        strIngredient8: 'spring onion',
        strIngredient9: 'salsa',
        strIngredient10: 'sour cream',
        strIngredient11: 'lemon',
        strIngredient12: 'garlic',
        strIngredient13: '',
        strIngredient14: '',
        strIngredient15: '',
        strIngredient16: '',
        strIngredient17: '',
        strIngredient18: '',
        strIngredient19: '',
        strIngredient20: '',
        strMeasure1: '2 tbsp',
        strMeasure2: '1 tsp',
        strMeasure3: '4 fillets',
        strMeasure4: '1 tsp',
        strMeasure5: '8',
        strMeasure6: '1 sliced',
        strMeasure7: '2 shredded',
        strMeasure8: '4 shredded',
        strMeasure9: '1 x 300ml',
        strMeasure10: '1 pot',
        strMeasure11: '1',
        strMeasure12: '1 clove finely chopped',
        strMeasure13: '',
        strMeasure14: '',
        strMeasure15: '',
        strMeasure16: '',
        strMeasure17: '',
        strMeasure18: '',
        strMeasure19: '',
        strMeasure20: '',
        strSource: 'https://realfood.tesco.com/recipes/cajun-spiced-fish-tacos.html',
        strImageSource: null,
        strCreativeCommonsConfirmed: null,
        dateModified: null,
      };

      mockAxios.get.mockImplementationOnce(() => Promise.resolve({
        data: {
          meals: [
            mockData,
          ],
        },
      }));

      await store.dispatch(fetchMeal('52819'));
      const actions = store.getActions();
      expect(actions[0].type).toEqual('FETCH_MEAL');
      expect(actions[0].payload[0]).toEqual(mockData);
    });
  });

  describe('fetchMeals action creator', () => {
    it('dispatches FETCH_MEALS action and returns data on success', async () => {
      mockAxios.get.mockImplementationOnce(() => Promise.resolve({
        data: {
          meals: [
            {
              strMeal: 'Baked salmon with fennel & tomatoes',
              strMealThumb: 'https://www.themealdb.com/images/media/meals/1548772327.jpg',
              idMeal: '52959',
            },
            {
              strMeal: 'Cajun spiced fish tacos',
              strMealThumb: 'https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg',
              idMeal: '52819',
            },
          ],
        },
      }));

      await store.dispatch(fetchMeals('Seafood'));
      const actions = store.getActions();
      expect(actions[0].type).toEqual('FETCH_MEALS');
      expect(actions[0].payload[0].strMeal).toEqual('Baked salmon with fennel & tomatoes');
      expect(actions[0].payload[0].strMealThumb).toEqual('https://www.themealdb.com/images/media/meals/1548772327.jpg');
      expect(actions[0].payload[0].idMeal).toEqual('52959');
      expect(actions[0].payload[1].strMeal).toEqual('Cajun spiced fish tacos');
      expect(actions[0].payload[1].strMealThumb).toEqual('https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg');
      expect(actions[0].payload[1].idMeal).toEqual('52819');
    });
  });

  describe('fetchCategories action creator', () => {
    it('dispatches FETCH_CATEGORIES action and returns data on success', async () => {
      mockAxios.get.mockImplementationOnce(() => Promise.resolve({
        data: {
          categories: [
            {
              idCategory: '1',
              strCategory: 'Beef',
              strCategoryThumb: 'https://www.themealdb.com/images/category/beef.png',
              strCategoryDescription: 'Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]',
            },
            {
              idCategory: '2',
              strCategory: 'Chicken',
              strCategoryThumb: 'https://www.themealdb.com/images/category/chicken.png',
              strCategoryDescription: 'Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011.[1] Humans commonly keep chickens as a source of food (consuming both their meat and eggs) and, more rarely, as pets.',
            },
          ],
        },
      }));

      await store.dispatch(fetchCategories());
      const actions = store.getActions();
      expect(actions[0].type).toEqual('FETCH_CATEGORIES');
      expect(actions[0].payload[0].idCategory).toEqual('1');
      expect(actions[0].payload[0].strCategory).toEqual('Beef');
      expect(actions[0].payload[1].idCategory).toEqual('2');
      expect(actions[0].payload[1].strCategory).toEqual('Chicken');
    });
  });
});
