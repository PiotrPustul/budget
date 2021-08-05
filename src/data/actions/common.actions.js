import { ALL_CATEGORIES_GET } from '../constants/common.constants';

import API from '../fetch';

export const fetchAllCategories = () => {
   const promise = API.common.fetchAllCategories();

   return {
      type: ALL_CATEGORIES_GET,
      promise,
   };
};