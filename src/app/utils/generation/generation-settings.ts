import { IOption, TOptionId } from '@/components/ui/interfaces';
import {
  budgetOptions,
  categoryOptions,
  cityOptions,
  peopleOptions,
} from '@/constants/generation-options';

export interface IGenerationSettings {
  city: TOptionId
  people: TOptionId
  categories: Array<TOptionId>
  budget: TOptionId
  onlyNew: boolean
}

export type TSearchParams = Record<string, string | Array<string> | undefined>;

export const defaultGenerationSettings: IGenerationSettings = {
  city: 'moscow',
  people: 2,
  categories: ['culture', 'food'],
  budget: 2,
  onlyNew: true,
};

const findOption = <T extends IOption>(options: Array<T>, value?: string) => {
  return options.find(o => String(o.id) === value);
};

const getParam = (params: TSearchParams, key: string) => {
  const value = params[key];

  return Array.isArray(value) ? value[0] : value;
};

export const buildGenerationQuery = (settings: IGenerationSettings) => {
  const query = new URLSearchParams({
    city: String(settings.city),
    people: String(settings.people),
    budget: String(settings.budget),
    onlyNew: settings.onlyNew ? '1' : '0',
  });

  if (settings.categories.length) {
    query.set('categories', settings.categories.join(','));
  }

  return query.toString();
};

export const parseGenerationSettings = (params: TSearchParams): IGenerationSettings => {
  const categories = (getParam(params, 'categories') ?? '')
    .split(',')
    .map(id => findOption(categoryOptions, id)?.id)
    .filter((id): id is TOptionId => id !== undefined);

  const onlyNew = getParam(params, 'onlyNew');

  return {
    city: findOption(cityOptions, getParam(params, 'city'))?.id ?? defaultGenerationSettings.city,
    people: findOption(peopleOptions, getParam(params, 'people'))?.id ?? defaultGenerationSettings.people,
    budget: findOption(budgetOptions, getParam(params, 'budget'))?.id ?? defaultGenerationSettings.budget,
    categories: categories.length ? categories : defaultGenerationSettings.categories,
    onlyNew: onlyNew === undefined ? defaultGenerationSettings.onlyNew : onlyNew === '1',
  };
};

export const getGenerationSummary = (settings: IGenerationSettings): Array<IOption> => {
  const city = cityOptions.find(o => o.id === settings.city);
  const people = peopleOptions.find(o => o.id === settings.people);
  const budget = budgetOptions.find(o => o.id === settings.budget);
  const categories = categoryOptions.filter(o => settings.categories.includes(o.id));

  const summary: Array<IOption> = [
    { id: 'city', text: `📍 ${city?.text}` },
    { id: 'people', text: `👥 ${people?.text} чел.` },
  ];

  if (categories.length) {
    summary.push({ id: 'categories', text: `${categories[0].emoji} ${categories.map(c => c.text).join(' + ')}` });
  }

  summary.push({ id: 'budget', text: `💳 ${budget?.text}` });

  if (settings.onlyNew) {
    summary.push({ id: 'onlyNew', text: '✨ Только новое' });
  }

  return summary;
};
