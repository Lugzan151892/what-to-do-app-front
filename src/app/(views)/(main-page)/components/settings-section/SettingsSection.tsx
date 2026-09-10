import clsx from '@/app/utils/style-utils/clsx';
import settingsStyles from '@/app/(views)/(main-page)/components/settings-section/settings-section.module.scss';
import AiBadge from '@/components/ui/ai-badge/AiBadge';
import ButtonOptions from '@/components/ui/button-options/ButtonOptions';
import WSwitchButton from '@/components/ui/switch-button/WSwitchButton';
import WButton from '@/components/ui/button/WButton';
import { EBUTTON_SIZE, EBUTTON_TYPE } from '@/components/ui/button/interfaces';
import Image from 'next/image';
import generation from '@/assets/static-icons/generation.svg';
import GeneratedCard from '../generated-card/GeneratedCard';
import generateExample1 from '@/assets/images/generate_example_1.jpg';
import generateExample2 from '@/assets/images/generate_example_2.jpg';

const SettingsSection = () => {
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
        <div className="w-flex w-gap-24 w-mt-64">
          <div className="w-card">
            <div className={clsx('w-py-16 w-px-24 w-gap-8 w-flex w-align-center', settingsStyles.header)}>
              <AiBadge />
              <span className="w-text-sm w-fweight-500">
                Настройки генерации
              </span>
            </div>
            <div className="w-p-24 w-flex w-flex-column w-gap-24">
              <ButtonOptions
                label="Количество человек"
                options={[{ id: 1, text: '1' }, { id: 2, text: '2' }, { id: 3, text: '2 - 3' }]}
              />
              <WSwitchButton
                labelPosition="before"
                label="Только новые активности"
                hint="Исключить уже пройденное"
                bordered
              />
              <ButtonOptions
                label="Бюджет на человека"
                options={[{ id: 1, text: 'Бесплатно' }, { id: 2, text: 'до 2 000 ₽' }, { id: 3, text: 'Любой' }]}
              />
              <WButton
                type={EBUTTON_TYPE.FILLED}
                textSize={EBUTTON_SIZE.SM}
                paddingY={16}
                radius={12}
                text="Сгенерировать идеи"
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
          <div>
            <div className="w-flex w-align-center w-gap-12">
              <AiBadge />
              <span className="w-text-sm w-text-color--muted">Результат генерации · Москва · Сегодня</span>
            </div>
            <GeneratedCard
              title="Выставка «Иллюзии»"
              description="ГМИИ им. Пушкина · Открыта сегодня"
              background={generateExample1}
            />
            <GeneratedCard
              title="Кулинарный класс: суши"
              description="Урок на 2–6 человек · Воскресенье"
              background={generateExample2}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SettingsSection;
