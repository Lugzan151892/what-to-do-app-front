export interface IIdea {
  id: string
  title: string
  categories: Array<string>
  image: string
  place: string
  address: string
  metro?: string
  shortInfo: string
  price: string
  priceUnit?: string
  when: string
  nearestDate: string
  duration: string
  groupSize: string
  vibe: string
  timeOfDay: string
  shortDescription: string
  description: Array<string>
  aiReason: string
  match: number
  rating: number
  ratingsCount: number
  viewsWeek: number
  savedCount: number
  watchingNow: number
  seatsLeft?: number
  isNew?: boolean
}

export interface IFeedItem {
  id: number
  ideaId: string
  forWhom: string
  timeAgo: string
  avatarLetter: string
  label?: string
  isPopular?: boolean
}

export interface IGenerationResult {
  bestMatchId: string
  alternativeIds: Array<string>
}

const photo = (desc: string, width = 800, height = 600) => {
  return `https://api.designfast.io/v1/photo_library/findone?desc=${desc}&w=${width}&h=${height}&orientation=landscape`;
};

export const ideas: Array<IIdea> = [
  {
    id: 'immersive-dinner',
    title: 'Иммерсивный гастро-ужин',
    categories: ['Еда', 'Культура'],
    image: photo('immersive+dinner+dark+fancy+restaurant+aesthetic', 1200, 600),
    place: 'Особняк на Волхонке',
    address: 'Москва, Большой Знаменский переулок, 2с3',
    metro: 'Метро Кропоткинская (5 мин пешком)',
    shortInfo: 'Особняк на Волхонке · 4 500 ₽/чел',
    price: '4 500 ₽',
    priceUnit: '/ чел.',
    when: 'Суббота, 19:00',
    nearestDate: '24 октября, 19:00',
    duration: '~2.5 часа',
    groupSize: '1–4 человека',
    vibe: 'Эстетика / Вау',
    timeOfDay: 'Вечер',
    shortDescription: 'Высокая кухня и театральный перформанс в исторических интерьерах XIX века.',
    description: [
      'Уникальный формат, объединяющий высокую гастрономию и театральный перформанс. Вы не просто ужинаете — вы становитесь частью интерактивной истории, разворачивающейся в исторических интерьерах XIX века.',
      'Меню из 5 курсов разрабатывалось специально под сюжетную линию шеф-поваром ресторана со звездой Michelin. Каждое блюдо подаётся с определённой музыкальной и световой аранжировкой, раскрывая новые грани вкуса.',
    ],
    aiReason: 'В прошлый раз вы поставили 5 звёзд кулинарному мастер-классу. Здесь объединили высокую кухню и театральный перформанс. Это абсолютно новый опыт, которого ещё не было в вашей истории.',
    match: 98,
    rating: 4.9,
    ratingsCount: 154,
    viewsWeek: 890,
    savedCount: 240,
    watchingNow: 12,
    seatsLeft: 4,
  },
  {
    id: 'neon-minigolf',
    title: 'Неоновый мини-гольф',
    categories: ['Развлечения'],
    image: photo('neon+minigolf+glow+dark+entertainment'),
    place: 'Винзавод',
    address: 'Москва, 4-й Сыромятнический переулок, 1/8',
    metro: 'Метро Курская (10 мин пешком)',
    shortInfo: 'Винзавод · ~1 500 ₽/чел',
    price: '1 500 ₽',
    priceUnit: '/ чел.',
    when: 'Каждый день, 12:00–00:00',
    nearestDate: 'Сегодня, 18:00',
    duration: '~1.5 часа',
    groupSize: '2–6 человек',
    vibe: 'Драйв / Фан',
    timeOfDay: 'Вечер',
    shortDescription: 'Отличный способ провести вечер активно. Светящиеся дорожки, футуристичная атмосфера и бар с коктейлями.',
    description: [
      'Девять светящихся лунок в полной темноте: ультрафиолет, зеркальные лабиринты и неожиданные препятствия. Играть интересно даже тем, кто никогда не держал клюшку.',
      'После игры можно задержаться в баре с авторскими коктейлями и настольными играми — отличный формат для компании друзей.',
    ],
    aiReason: 'Вы высоко оценили квесты и боулинг. Мини-гольф — такой же лёгкий соревновательный формат, но в новой для вас атмосфере.',
    match: 95,
    rating: 4.7,
    ratingsCount: 312,
    viewsWeek: 1240,
    savedCount: 410,
    watchingNow: 18,
    seatsLeft: 9,
  },
  {
    id: 'pottery-date',
    title: 'Свидание за гончарным кругом',
    categories: ['Творчество'],
    image: photo('pottery+class+clay+hands+aesthetic'),
    place: 'Мастерская «Клин»',
    address: 'Москва, улица Покровка, 17',
    metro: 'Метро Чистые пруды (7 мин пешком)',
    shortInfo: 'Мастерская «Клин» · ~3 000 ₽/чел',
    price: '3 000 ₽',
    priceUnit: '/ чел.',
    when: 'Воскресенье, 16:00',
    nearestDate: '25 октября, 16:00',
    duration: '~2 часа',
    groupSize: '2 человека',
    vibe: 'Уют / Романтика',
    timeOfDay: 'День',
    shortDescription: 'Спокойный формат для двоих. Создадите по кружке или пиале, выпьете вина и заберёте изделия после обжига.',
    description: [
      'Мастер покажет основы работы на гончарном круге и поможет каждому сделать собственную кружку или пиалу. Никакого опыта не требуется.',
      'Во время занятия подают вино и сыр, а готовые изделия после обжига и глазури можно забрать через две недели.',
    ],
    aiReason: 'Вам понравились спокойные творческие мастер-классы. Гончарное дело — новый для вас вид творчества и отличный формат для пары.',
    match: 92,
    rating: 4.8,
    ratingsCount: 98,
    viewsWeek: 530,
    savedCount: 175,
    watchingNow: 6,
    seatsLeft: 2,
  },
  {
    id: 'jazz-club',
    title: 'Вечер в джаз-клубе',
    categories: ['Музыка'],
    image: photo('jazz+club+live+music+dim+lights'),
    place: 'Джаз-клуб на Таганке',
    address: 'Москва, Верхняя Радищевская улица, 21',
    metro: 'Метро Таганская (5 мин пешком)',
    shortInfo: 'Сегодня 20:00 · от 2 000 ₽',
    price: 'от 2 000 ₽',
    when: 'Сегодня, 20:00',
    nearestDate: 'Сегодня, 20:00',
    duration: '~3 часа',
    groupSize: '1–6 человек',
    vibe: 'Атмосфера / Live',
    timeOfDay: 'Вечер',
    shortDescription: 'Живая музыка, невероятная акустика и отличная кухня. Идеально для завершения вечера.',
    description: [
      'Каждый вечер на сцене — живые составы: от классического свинга до современного фьюжна. Небольшой зал создаёт ощущение камерного концерта.',
      'Кухня работает до последнего сета, а столики у сцены лучше бронировать заранее.',
    ],
    aiReason: 'Вы часто выбираете вечерние форматы и ставили высокие оценки концертам. Живой джаз — новый жанр в вашей истории.',
    match: 89,
    rating: 4.8,
    ratingsCount: 421,
    viewsWeek: 760,
    savedCount: 205,
    watchingNow: 9,
  },
  {
    id: 'modern-art',
    title: 'Выставка современного искусства',
    categories: ['Культура'],
    image: photo('modern+art+gallery+exhibition+people'),
    place: 'Дом культуры на набережной',
    address: 'Москва, Болотная набережная, 15',
    metro: 'Метро Кропоткинская (12 мин пешком)',
    shortInfo: 'Дом культуры на набережной · Бесплатно',
    price: 'Бесплатно',
    when: 'Сб–Вс, 11:00–22:00',
    nearestDate: 'Суббота, 11:00',
    duration: '~2 часа',
    groupSize: 'Любая компания',
    vibe: 'Вдохновение',
    timeOfDay: 'День',
    shortDescription: 'Новая масштабная инсталляция. Потребуется предварительная регистрация на сайте. Можно совместить с прогулкой по набережной.',
    description: [
      'Масштабная инсталляция молодых художников занимает весь главный зал. Свет, звук и проекции меняются в течение дня — каждый визит получается немного другим.',
      'Вход бесплатный по предварительной регистрации. После выставки рекомендуем прогуляться по набережной.',
    ],
    aiReason: 'Вы любите выставки, а эта открылась только на этой неделе — её точно нет в вашей истории.',
    match: 87,
    rating: 4.6,
    ratingsCount: 203,
    viewsWeek: 2100,
    savedCount: 680,
    watchingNow: 24,
    isNew: true,
  },
  {
    id: 'art-brunch',
    title: 'Арт-бранч и лекция об искусстве',
    categories: ['Культура', 'Еда'],
    image: photo('modern+art+gallery+exhibition+aesthetic'),
    place: 'Галерея «Пространство»',
    address: 'Москва, Малая Никитская улица, 6',
    metro: 'Метро Арбатская (8 мин пешком)',
    shortInfo: 'Суббота утро · 2 500 ₽',
    price: '2 500 ₽',
    priceUnit: '/ чел.',
    when: 'Суббота, 11:00',
    nearestDate: '24 октября, 11:00',
    duration: '~2 часа',
    groupSize: '1–4 человека',
    vibe: 'Лёгкость / Культура',
    timeOfDay: 'Утро',
    shortDescription: 'Вкусный завтрак в окружении современных картин с мини-лекцией от куратора выставки. Лёгкий и культурный старт выходного дня.',
    description: [
      'Завтрак от шефа галереи проходит прямо в выставочном зале. Пока вы пьёте кофе, куратор рассказывает об экспозиции и отвечает на вопросы.',
      'После лекции можно спокойно осмотреть выставку и заглянуть в книжный магазин при галерее.',
    ],
    aiReason: 'Совмещает две ваши любимые категории — еду и культуру — в спокойном утреннем формате.',
    match: 88,
    rating: 4.7,
    ratingsCount: 76,
    viewsWeek: 340,
    savedCount: 120,
    watchingNow: 4,
    seatsLeft: 6,
  },
  {
    id: 'private-cinema',
    title: 'Свидание в частном кинотеатре',
    categories: ['Кино'],
    image: photo('private+cinema+cozy+couple+wine'),
    place: 'Кинозал «Только вы»',
    address: 'Москва, Цветной бульвар, 11',
    metro: 'Метро Цветной бульвар (3 мин пешком)',
    shortInfo: 'Любое время · от 3 000 ₽',
    price: 'от 3 000 ₽',
    when: 'Любое время',
    nearestDate: 'Сегодня, 21:00',
    duration: '~2.5 часа',
    groupSize: '2–8 человек',
    vibe: 'Уют / Приватность',
    timeOfDay: 'Вечер',
    shortDescription: 'Аренда небольшого уютного зала только для вас двоих. Ваш любимый фильм, вино и отсутствие других зрителей.',
    description: [
      'Небольшой зал с мягкими диванами, пледами и большим экраном. Фильм выбираете вы — из каталога или со своей флешки.',
      'К сеансу можно заказать вино, попкорн и закуски. Отличный вариант на случай плохой погоды.',
    ],
    aiReason: 'Вы часто планируете выходные вдвоём. Приватный кинозал — спокойный формат без толпы.',
    match: 84,
    rating: 4.9,
    ratingsCount: 187,
    viewsWeek: 610,
    savedCount: 290,
    watchingNow: 7,
  },
];

export const feedItems: Array<IFeedItem> = [
  { id: 1, ideaId: 'neon-minigolf', forWhom: 'Для Дениса', timeAgo: '2 мин назад', avatarLetter: 'Д', isPopular: true },
  { id: 2, ideaId: 'pottery-date', forWhom: 'Для Анны', timeAgo: '8 мин назад', avatarLetter: 'А', label: 'Топ для пар', isPopular: true },
  { id: 3, ideaId: 'jazz-club', forWhom: 'Для Максима', timeAgo: '15 мин назад', avatarLetter: 'М' },
  { id: 4, ideaId: 'modern-art', forWhom: 'Для компании (4)', timeAgo: '22 мин назад', avatarLetter: 'К', isPopular: true },
  { id: 5, ideaId: 'private-cinema', forWhom: 'Для Ольги', timeAgo: '31 мин назад', avatarLetter: 'О' },
  { id: 6, ideaId: 'art-brunch', forWhom: 'Для Ильи', timeAgo: '40 мин назад', avatarLetter: 'И' },
];

export const generationResult: IGenerationResult = {
  bestMatchId: 'immersive-dinner',
  alternativeIds: ['art-brunch', 'private-cinema', 'pottery-date', 'modern-art'],
};

export const getIdeaById = (id: string) => {
  return ideas.find(idea => idea.id === id);
};
