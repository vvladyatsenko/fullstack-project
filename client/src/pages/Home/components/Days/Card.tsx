import { GlobalSvgSelector } from '../../../assets/icons/global/GlobalSvgSelector';
import { Day } from './Days';
import style from './Days.module.scss';

interface Props {
  day: Day;
}

export const Card = ({ day }: Props) => {
  const { day: dayName, day_info, icon_id, temp_day, temp_night, info } = day;

  return (
    <div className={style.card}>
      <div className={style.day}>{dayName}</div>
      <div className={style.day__info}>{day_info}</div>
      <div className={style.img}>
        <GlobalSvgSelector id={icon_id} />
      </div>
      <div className={style.temp__day}>{temp_day}</div>
      <div className={style.temp__night}>{temp_night}</div>
      <div className={style.info}>{info}</div>
    </div>
  );
};
