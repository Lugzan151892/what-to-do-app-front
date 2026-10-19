import { IOption } from '@/components/ui/interfaces';

export interface ICategoryOption extends IOption {
  emoji: string
}

export const cityOptions: Array<IOption> = [
  { id: 'moscow', text: 'Москва' },
  { id: 'spb', text: 'Санкт-Петербург' },
  { id: 'kazan', text: 'Казань' },
  { id: 'ekb', text: 'Екатеринбург' },
  { id: 'nsk', text: 'Новосибирск' },
];

export const peopleOptions: Array<IOption> = [
  { id: 1, text: '1' },
  { id: 2, text: '2' },
  { id: 3, text: '3–5' },
  { id: 4, text: '5+' },
];

export const budgetOptions: Array<IOption> = [
  { id: 1, text: 'Бесплатно' },
  { id: 2, text: 'до 2 000 ₽' },
  { id: 3, text: 'Любой' },
];

export const categoryOptions: Array<ICategoryOption> = [
  { id: 'fun', text: 'Развлечения', emoji: '🎲' },
  { id: 'culture', text: 'Культура', emoji: '🎨' },
  { id: 'active', text: 'Активный', emoji: '🏃' },
  { id: 'food', text: 'Еда', emoji: '🍝' },
  { id: 'relax', text: 'Релакс', emoji: '💆' },
];
