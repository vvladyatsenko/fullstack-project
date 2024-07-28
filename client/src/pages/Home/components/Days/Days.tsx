import { Card } from './Card';
import style from './Days.module.scss';

interface Props {}

export interface Day {
  day: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
}

export const Days = (props: Props) => {
  const generateDays = (): Day[] => {
    const today = new Date();
    const daysOfWeek = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    const icons = [
      'sun',
      'small_rain_sun',
      'small_rain',
      'mainly_cloudy',
      'rain',
      'sun',
      'sun',
    ];
    const info = [
      'Хмарно',
      'Невеликий дощ і сонце',
      'Невеликий дощ',
      'Хмарно',
      'Хмарно',
      'Хмарно',
      'Хмарно',
    ];

    return Array.from({ length: 7 }).map((_, index) => {
      const date = new Date(today);
      date.setDate(today.getDate() + index);

      const day = daysOfWeek[date.getDay()];
      const day_info = `${date.getDate()} ${date.toLocaleString('uk-UA', {
        month: 'short',
      })}`;

      return {
        day,
        day_info,
        icon_id: icons[index],
        temp_day: '+18',
        temp_night: '+15',
        info: info[index],
      };
    });
  };

  const days = generateDays();

  return (
    <div className={style.days}>
      {days.map((day: Day) => (
        <Card day={day} key={day.day_info} />
      ))}
    </div>
  );
};
