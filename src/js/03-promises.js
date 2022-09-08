import { Notify } from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const {
    elements: { delay, step, amount },
  } = event.currentTarget;
  let delays = Number(delay.value);
  let steps = Number(step.value);
  let amounts = Number(amount.value);
  let position = 1;

  for (position; position <= amounts; position += 1) {
    createPromise(position, delays)
      .then(({ position, delays }) => {
        setTimeout(() => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delays}ms`);
        }, delays);
      })
      .catch(({ position, delays }) => {
        setTimeout(() => {
          Notify.failure(`❌ Rejected promise ${position} in ${delays}ms`);
        }, delays);
      });
    delays += steps;
  }
}

function createPromise(position, delays) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve({ position, delays });
    } else {
      reject({ position, delays });
    }
  });
}
