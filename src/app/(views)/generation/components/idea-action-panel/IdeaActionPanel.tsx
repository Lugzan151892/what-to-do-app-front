import Image from 'next/image';
import clsx from '@/app/utils/style-utils/clsx';
import plural from '@/app/utils/text/plural';
import ideaActionPanelStyles from '@/app/(views)/generation/components/idea-action-panel/idea-action-panel.module.scss';
import WButton from '@/components/ui/button/WButton';
import { EBUTTON_SIZE, EBUTTON_TYPE } from '@/components/ui/button/interfaces';
import { IIdea } from '@/mocks/ideas';
import lightning from '@/assets/static-icons/lightning.svg';
import check from '@/assets/static-icons/check.svg';
import externalLink from '@/assets/static-icons/external-link.svg';
import share from '@/assets/static-icons/share.svg';
import heartOutline from '@/assets/static-icons/heart-outline.svg';

interface IIdeaActionPanelProps {
  idea: IIdea
}

const IdeaActionPanel: React.FC<IIdeaActionPanelProps> = ({ idea }) => {
  return (
    <div className={clsx('w-card w-p-24', ideaActionPanelStyles.card)}>
      <div className={clsx('w-flex w-align-center w-gap-12 w-p-16 w-mb-24', ideaActionPanelStyles.match)}>
        <div className={clsx('w-flex w-flex-center w-flex-shrink-0', ideaActionPanelStyles.matchIcon)}>
          <Image
            src={lightning}
            alt=""
            width={20}
            height={20}
          />
        </div>
        <div>
          <div className={clsx('w-fweight-700 w-text-color--accent', ideaActionPanelStyles.matchLabel)}>
            AI Анализ
          </div>
          <div className="w-text-sm w-fweight-600 w-text-color--cream">
            {`Совпадение ${idea.match}%`}
          </div>
        </div>
      </div>

      <div className="w-mb-24">
        <div className={clsx('w-mb-4', ideaActionPanelStyles.caption)}>
          Стоимость
        </div>
        <div className={clsx('w-fweight-700 w-mb-16', ideaActionPanelStyles.price)}>
          {idea.price}
          {!!idea.priceUnit && (
            <span className={clsx('w-text-sm w-fweight-400 w-text-color--muted w-ml-8', ideaActionPanelStyles.priceUnit)}>
              {idea.priceUnit}
            </span>
          )}
        </div>

        <div className={clsx('w-mb-16', ideaActionPanelStyles.divider)} />

        <div className="w-flex w-align-center w-justify-space-between w-gap-12 w-mb-8">
          <span className={clsx('w-text-sm', ideaActionPanelStyles.rowLabel)}>Ближайшая дата:</span>
          <span className="w-text-sm w-fweight-600 w-text-color--cream">{idea.nearestDate}</span>
        </div>
        <div className="w-flex w-align-center w-justify-space-between w-gap-12">
          <span className={clsx('w-text-sm', ideaActionPanelStyles.rowLabel)}>Доступность:</span>
          <span className={clsx('w-text-sm w-fweight-600', ideaActionPanelStyles.availability)}>
            {idea.seatsLeft
              ? `${plural(idea.seatsLeft, ['Остался', 'Осталось', 'Осталось'])} ${idea.seatsLeft} ${plural(idea.seatsLeft, ['место', 'места', 'мест'])}`
              : 'Без ограничений'}
          </span>
        </div>
      </div>

      <div className="w-flex w-flex-column w-gap-12 w-mb-24">
        <WButton
          text="В планы на выходные"
          type={EBUTTON_TYPE.GRADIENT}
          textSize={EBUTTON_SIZE.SM}
          radius={12}
          paddingY={16}
          fullWidth
          slotBefore={(
            <Image
              src={check}
              alt=""
              width={18}
              height={18}
            />
          )}
        />
        <WButton
          text="Купить билеты (Сайт)"
          textSize={EBUTTON_SIZE.SM}
          radius={12}
          paddingY={16}
          fullWidth
          slotBefore={(
            <Image
              src={externalLink}
              alt=""
              width={16}
              height={16}
            />
          )}
        />
      </div>

      <div className="w-flex w-justify-center w-gap-16">
        <button
          type="button"
          className={clsx('w-flex w-align-center w-gap-6 w-text-xs', ideaActionPanelStyles.secondaryAction)}
        >
          <Image
            src={share}
            alt=""
            width={16}
            height={16}
          />
          Поделиться
        </button>
        <button
          type="button"
          className={clsx('w-flex w-align-center w-gap-6 w-text-xs', ideaActionPanelStyles.secondaryAction)}
        >
          <Image
            src={heartOutline}
            alt=""
            width={16}
            height={16}
          />
          В избранное
        </button>
      </div>
    </div>
  );
};

export default IdeaActionPanel;
