'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import clsx from '@/app/utils/style-utils/clsx';
import settingsStyles from '@/app/(views)/(main-page)/components/settings-section/settings-section.module.scss';
import GeneratedCard from '@/app/(views)/(main-page)/components/generated-card/GeneratedCard';
import AiBadge from '@/components/ui/ai-badge/AiBadge';
import ButtonOptions from '@/components/ui/button-options/ButtonOptions';
import WSwitchButton from '@/components/ui/switch-button/WSwitchButton';
import WSelect from '@/components/ui/select/WSelect';
import WButton from '@/components/ui/button/WButton';
import { EBUTTON_SIZE, EBUTTON_TYPE } from '@/components/ui/button/interfaces';
import { IOption, TOptionId } from '@/components/ui/interfaces';
import generation from '@/assets/static-icons/generation.svg';
import locationPin from '@/assets/static-icons/location-pin.svg';
import generateExample1 from '@/assets/images/generate_example_1.jpg';
import generateExample2 from '@/assets/images/generate_example_2.jpg';

const cities: Array<IOption> = [
  { id: 'moscow', text: 'Москва' },
  { id: 'spb', text: 'Санкт-Петербург' },
  { id: 'kazan', text: 'Казань' },
  { id: 'ekb', text: 'Екатеринбург' },
  { id: 'nsk', text: 'Новосибирск' },
];

const peopleOptions: Array<IOption> = [
  { id: 1, text: '1' },
  { id: 2, text: '2' },
  { id: 3, text: '3–5' },
  { id: 4, text: '5+' },
];

const budgetOptions: Array<IOption> = [
  { id: 1, text: 'Бесплатно' },
  { id: 2, text: 'до 2 000 ₽' },
  { id: 3, text: 'Любой' },
];

const SettingsSection = () => {
  const [city, setCity] = useState<TOptionId>('moscow');
  const [people, setPeople] = useState<TOptionId>(3);
  const [onlyNew, setOnlyNew] = useState(true);
  const [budget, setBudget] = useState<TOptionId>(2);

  const cityName = useMemo(() => cities.find(c => c.id === city)?.text, [city]);

  return (
    <section className={clsx('w-flex w-flex-center w-text-color--cream', settingsStyles.section)}>
      <div className={clsx('w-flex w-flex-column w-align-center', settingsStyles.content)}>
        <span className={clsx(settingsStyles.preHeadLine, 'w-mb-20 w-fweight-600 w-text-color--accent')}>
          AI-генератор
        </span>
        <span className={clsx(settingsStyles.headLine, 'w-fweight-900 w-text-color--cream')}>
          Настройте — и
          {' '}
          <span className="w-gradient-text">
            вперёд
          </span>
        </span>
        <div className={clsx(settingsStyles.headLineSecondary, 'w-text-center w-text-lg w-text-color--muted w-mt-24')}>
          Перед генерацией выберите параметры, и AI создаст идеальный план именно для вас
        </div>
        <div className={clsx('w-mt-64', settingsStyles.grid)}>
          <div className={clsx('w-card', settingsStyles.panel)}>
            <div className={clsx('w-py-16 w-px-24 w-gap-8 w-flex w-align-center', settingsStyles.header)}>
              <AiBadge />
              <span className="w-text-sm w-fweight-500">
                Настройки генерации
              </span>
            </div>
            <div className="w-p-24 w-flex w-flex-column w-gap-24">
              <WSelect
                label="Ваш город"
                name="city"
                options={cities}
                value={city}
                onChange={setCity}
                slotBefore={(
                  <Image
                    alt=""
                    src={locationPin}
                    width={16}
                    height={16}
                  />
                )}
              />
              <ButtonOptions
                label="Количество человек"
                options={peopleOptions}
                value={people}
                onChange={setPeople}
              />
              <WSwitchButton
                labelPosition="before"
                label="Только новые активности"
                hint="Исключить уже пройденное"
                name="onlyNew"
                checked={onlyNew}
                onChange={setOnlyNew}
                bordered
              />
              <ButtonOptions
                label="Бюджет на человека"
                options={budgetOptions}
                value={budget}
                textSize={EBUTTON_SIZE.XS}
                paddingY={8}
                onChange={setBudget}
              />
              <WButton
                type={EBUTTON_TYPE.FILLED}
                textSize={EBUTTON_SIZE.SM}
                paddingY={16}
                radius={12}
                text="Сгенерировать идеи"
                fullWidth
                slotBefore={(
                  <Image
                    alt="Иконка генерации"
                    src={generation}
                    width={20}
                    height={20}
                  />
                )}
              />
            </div>
          </div>
          <div className="w-flex w-flex-column w-gap-16">
            <div className="w-flex w-align-center w-gap-12 w-mb-8">
              <AiBadge />
              <span className="w-text-sm w-text-color--muted">
                {`Результат генерации · ${cityName} · Сегодня`}
              </span>
            </div>
            <GeneratedCard
              title="Выставка «Иллюзии»"
              description="ГМИИ им. Пушкина · Открыта сегодня"
              background={generateExample1}
              tags={['Культура', '1–4 чел.', '600 ₽']}
              isNew
              highlighted
            />
            <GeneratedCard
              title="Кулинарный класс: суши"
              description="Урок на 2–6 человек · Воскресенье"
              background={generateExample2}
              tags={['Еда', '2–6 чел.', '1 800 ₽']}
              imageHeight={112}
            />
            <div className="w-text-center w-py-8 w-text-sm w-text-color--muted">
              + ещё 8 идей для вас
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SettingsSection;
