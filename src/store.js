import { reactive } from 'vue';

export const store = reactive(
    {
        FilmList: [],
        SeriesList : [],
        filter : "",
    }
);