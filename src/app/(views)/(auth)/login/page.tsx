import clsx from '@/app/utils/style-utils/clsx';
import authStyles from '@/app/(views)/(auth)/styles/auth.module.scss';
import WInput from '@/components/ui/input/WInput';
import WCheckbox from '@/components/ui/checkbox/WCheckbox';
import WButton from '@/components/ui/button/WButton';
import { EBUTTON_SIZE, EBUTTON_TYPE } from '@/components/ui/button/interfaces';

const LoginPage = () => {
  return (
    <form className={authStyles.form}>
      <WInput
        type="email"
        label="Email"
        name="email"
        placeholder="name@example.com"
        autoComplete="email"
        required
      />

      <WInput
        type="password"
        label="Пароль"
        name="password"
        placeholder="••••••••"
        autoComplete="current-password"
        required
        slotLabelAfter={(
          <a
            href="#"
            className={clsx('w-text-xs', authStyles.forgotLink)}
          >
            Забыли пароль?
          </a>
        )}
      />

      <div className="w-pt-4">
        <WCheckbox
          name="remember"
          label="Запомнить меня на этом устройстве"
        />
      </div>

      <div className="w-mt-8">
        <WButton
          text="Войти в Weeknd →"
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

export default LoginPage;
