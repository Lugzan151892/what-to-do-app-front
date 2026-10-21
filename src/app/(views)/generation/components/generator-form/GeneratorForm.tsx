'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import clsx from '@/app/utils/style-utils/clsx';
import generatorFormStyles from '@/app/(views)/generation/components/generator-form/generator-form.module.scss';
import AiBadge from '@/components/ui/ai-badge/AiBadge';
import WSelect from '@/components/ui/select/WSelect';
import ButtonOptions from '@/components/ui/button-options/ButtonOptions';
import WChips from '@/components/ui/chips/WChips';
import WSwitchButton from '@/components/ui/switch-button/WSwitchButton';
import WButton from '@/components/ui/button/WButton';
import Spinner from '@/components/ui/spinner/Spinner';
import { EBUTTON_SIZE, EBUTTON_TYPE } from '@/components/ui/button/interfaces';
import { TOptionId } from '@/components/ui/interfaces';
import {
  budgetOptions,
  categoryOptions,
  cityOptions,
  peopleOptions,
} from '@/constants/generation-options';
import { buildGenerationQuery, IGenerationSettings } from '@/app/utils/generation/generation-settings';
import generation from '@/assets/static-icons/generation.svg';
import locationPin from '@/assets/static-icons/location-pin.svg';

// Имитация запроса к AI, пока нет бэкенда
const MOCK_GENERATION_DELAY = 1500;

const categoryChips = categoryOptions.map(o => ({ id: o.id, text: `${o.emoji} ${o.text}` }));

interface IGeneratorFormProps {
  initialSettings: IGenerationSettings
}

const GeneratorForm: React.FC<IGeneratorFormProps> = ({ initialSettings }) => {
  const router = useRouter();
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const [city, setCity] = useState<TOptionId>(initialSettings.city);
  const [people, setPeople] = useState<TOptionId>(initialSettings.people);
  const [categories, setCategories] = useState<Array<TOptionId>>(initialSettings.categories);
  const [budget, setBudget] = useState<TOptionId>(initialSettings.budget);
  const [onlyNew, setOnlyNew] = useState(initialSettings.onlyNew);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => () => clearTimeout(timer.current), []);

  const handleGenerate = () => {
    const query = buildGenerationQuery({
      city,
      people,
      categories,
      budget,
      onlyNew,
    });

    setIsGenerating(true);
    timer.current = setTimeout(() => router.push(`/generation/result?${query}`), MOCK_GENERATION_DELAY);
  };

  const buttonIcon = isGenerating
    ? <Spinner size={18} />
    : (
      <Image
        src={generation}
        alt=""
        width={20}
        height={20}
      />
    );

  return (
    <div className={clsx('w-card', generatorFormStyles.card)}>
      <div className="w-flex w-align-center w-gap-12 w-mb-24">
        <AiBadge text="AI Engine" />
        <h2 className={clsx('w-text-lg w-fweight-700', generatorFormStyles.title)}>
          Создать план
        </h2>
      </div>

      <p className="w-text-sm w-text-color--muted w-mb-32">
        Расскажите, чего хочется, и нейросеть подберёт идеальные варианты под ваш профиль.
      </p>

      <div className="w-flex w-flex-column w-gap-24">
        <WSelect
          label="Город поиска"
          name="city"
          options={cityOptions}
          value={city}
          onChange={setCity}
          slotBefore={(
            <Image
              src={locationPin}
              alt=""
              width={16}
              height={16}
            />
          )}
        />

        <ButtonOptions
          label="Состав"
          options={peopleOptions}
          value={people}
          onChange={setPeople}
        />

        <WChips
          label="Настроение и формат"
          options={categoryChips}
          value={categories}
          onChange={setCategories}
        />

        <ButtonOptions
          label="Бюджет на человека"
          options={budgetOptions}
          value={budget}
          textSize={EBUTTON_SIZE.XS}
          paddingY={8}
          onChange={setBudget}
        />

        <WSwitchButton
          labelPosition="before"
          label="Исключить пройденное"
          hint="Только то, что вы ещё не пробовали"
          name="onlyNew"
          checked={onlyNew}
          onChange={setOnlyNew}
          bordered
        />

        <div className="w-mt-8">
          <WButton
            text={isGenerating ? 'Анализируем профиль...' : 'Сгенерировать идеи'}
            type={EBUTTON_TYPE.GRADIENT}
            textSize={EBUTTON_SIZE.SM}
            radius={12}
            paddingY={16}
            disabled={isGenerating}
            fullWidth
            onClick={handleGenerate}
            slotBefore={buttonIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default GeneratorForm;
