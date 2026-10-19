'use client';

import { useState } from 'react';
import Image from 'next/image';
import authStyles from '@/app/(views)/(auth)/styles/auth.module.scss';
import WInput from '@/components/ui/input/WInput';
import WSelect from '@/components/ui/select/WSelect';
import WButton from '@/components/ui/button/WButton';
import { EBUTTON_SIZE, EBUTTON_TYPE } from '@/components/ui/button/interfaces';
import { IOption, TOptionId } from '@/components/ui/interfaces';
import locationPin from '@/assets/static-icons/location-pin.svg';

const cities: Array<IOption> = [
  { id: 'moscow', text: 'Москва' },
  { id: 'spb', text: 'Санкт-Петербург' },
  { id: 'kazan', text: 'Казань' },
  { id: 'ekb', text: 'Екатеринбург' },
  { id: 'nsk', text: 'Новосибирск' },
  { id: 'other', text: 'Другой город' },
];

const RegistrationPage = () => {
  const [city, setCity] = useState<TOptionId>('moscow');

  return (
    <form className={authStyles.form}>
      <WInput
        label="Ваше имя"
        name="name"
        placeholder="Александр"
        autoComplete="given-name"
        required
      />

      <WInput
        type="email"
        label="Email"
        name="email"
        placeholder="name@example.com"
        autoComplete="email"
        required
      />

      <WSelect
        label="Ваш город (для AI-подбора)"
        name="city"
        options={cities}
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

      <WInput
        type="password"
        label="Пароль"
        name="password"
        placeholder="Минимум 8 символов"
        autoComplete="new-password"
        minLength={8}
        required
      />

      <div className="w-mt-8">
        <WButton
          text="Создать аккаунт →"
          type={EBUTTON_TYPE.FILLED}
          textSize={EBUTTON_SIZE.SM}
          radius={12}
          paddingY={16}
          fullWidth
        />
      </div>
    </form>
  );
};

export default RegistrationPage;
