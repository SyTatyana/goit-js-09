import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      Notiflix.Notify.success('Click Start');
      refs.bntStart.disabled = false;
      refs.bntStart.addEventListener('click', () => {
        let timeId = setInterval(() => {
          const saveDate = convertMs(selectedDates[0] - new Date());
          refs.spanDay.textContent = saveDate.days;
          refs.spanHours.textContent = saveDate.hours;
          refs.spanMinutes.textContent = saveDate.minutes;
          refs.spanSeconds.textContent = saveDate.seconds;
          if (selectedDates[0] - new Date() < 1000) {
            clearInterval(timeId);
          }
        }, 1000);
      });
    }
  },
};

const refs = {
  bntStart: document.querySelector('[data-start]'),
  input: document.querySelector('#datetime-picker'),
  spanDay: document.querySelector('[data-days]'),
  spanHours: document.querySelector('[data-hours]'),
  spanMinutes: document.querySelector('[data-minutes]'),
  spanSeconds: document.querySelector('[data-seconds]'),
};

refs.bntStart.disabled = true;

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

flatpickr(refs.input, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));

  const hours = addLeadingZero(Math.floor((ms % day) / hour));

  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));

  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
