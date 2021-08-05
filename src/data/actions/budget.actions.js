import {
   BUDGET_GET,
   BUDGETED_CATEGORIES_GET,
} from '../constants/budget.constants';

import API from '../fetch';

export const fetchBudget = (id) => {
   const promise = API.budget.fetchBudget(id);

   return {
      type: BUDGET_GET,
      promise,
   };
};

export const fetchBudgetedCategories = (id) => {
   const promise = API.budget.fetchBudgetedCategories(id);

   return {
      type: BUDGETED_CATEGORIES_GET,
      promise,
   };
};