import style from './ThisDayInfo.module.scss';
import cloud from '../../../assets/images/cloud.png';
import { ThisDayItem } from './ThisDayItem';
import { Weather } from '../../../../store/types/types';

interface Props {
  weather: Weather;
}

export interface Item {
  icon_id: string;
  name: string;
  value: string;
}

export const ThisDayInfo = ({ weather }: Props) => {
  if (!weather || !weather.main || !weather.wind) {
    return <div>Loading...</div>;
  }

  const items: Item[] = [
    {
      icon_id: 'temp',
      name: 'Температура:',
      value: `${Math.round(weather.main.temp)}° - відчувається як ${Math.round(
        weather.main.feels_like
      )}°`,
    },
    {
      icon_id: 'pressure',
      name: 'Тиск:',
      value: `${weather.main.pressure} мм ртутного стовпа`,
    },
    {
      icon_id: 'precipitation',
      name: 'Опади:',
      value: `${weather.main.humidity}%`,
    },
    {
      icon_id: 'wind',
      name: 'Вітер:',
      value: `${weather.wind.speed} м/с, напрямок ${weather.wind.deg}°`,
    },
  ];

  return (
    <div className={style.this__day_info}>
      <div className={style.this__day_info_items}>
        {items.map((item) => (
          <ThisDayItem key={item.icon_id} item={item} />
        ))}
      </div>
      <img className={style.cloud__img} src={cloud} alt="cloud" />
    </div>
  );
};
