'use strict';

class Workout {
    date = new Date();
    id = String(Date.now()).slice(-10);
    constructor(coords, duration, distance) {
        this.coords = coords;
        this.duration = duration;
        this.distance = distance;
    }
    _setDescription() {
        //prettier - ignore;
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];
        this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
        return this.description;
    }
}
class Running extends Workout {
    type = 'running';
    constructor(coords, duration, distance, cadence, pace) {
        super(coords, duration, distance);
        this.cadence = cadence;
        this.calcPace();
        this._setDescription();
    }
    calcPace() {
        this.pace = this.duration / this.distance;
        return this.pace;
    }
}
class Cycling extends Workout {
    type = 'cycling';
    constructor(coords, duration, distance, elevationGain, speed) {
        super(coords, duration, distance);
        this.elevationGain = elevationGain;
        this.calcSpeed();
        this._setDescription();
    }
    calcSpeed() {
        this.speed = this.distance / (this.duration / 60);
        return this.speed;
    }
}

// //////////////////////////////////
// APP CONSTRUCTOR
const inputDistance = document.querySelector('.form__input--distance');
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
    _mapEvent;
    _map;
    _workouts = [];
    constructor() {
        this._getPosition();
        inputType.addEventListener('change', this._toggleElevationField);
        form.addEventListener('submit', this._newWorkout.bind(this));
        containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
    }

    _getPosition() {
        navigator.geolocation.getCurrentPosition(
            this._loadMap.bind(this),
            function() {
                alert('Cannot get your location');
            }
        );
    }

    _loadMap(position) {
        const { latitude, longitude } = position.coords;
        const coords = [latitude, longitude];
        this._map = L.map('map').setView(coords, 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(this._map);
        this._map.on('click', this._showForm.bind(this));
        this._getLocalStorage();
    }

    _showForm(mapE) {
        this._mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
    }

    _toggleElevationField() {
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    }

    _newWorkout(e) {
        e.preventDefault();

        let workout; // Untuk assign object running atau cycling
        const { lat, lng } = this._mapEvent.latlng;

        const allDataIsValid = (...inputs) =>
            inputs.every(inp => Number.isFinite(inp));
        const allDataIsPositive = (...inputs) => inputs.every(inp => inp > 0);
        const hideForm = () => {
            inputDistance.value =
                inputDuration.value =
                inputElevation.value =
                inputCadence.value =
                '';
            form.classList.add('hidden');
        };

        // Get data from form
        const type = inputType.value;
        const distance = +inputDistance.value;
        const duration = +inputDuration.value;

        // Data Validating
        if (type === 'running') {
            const cadence = +inputCadence.value;
            // Check if data is valid
            if (!allDataIsValid(distance, duration, cadence) ||
                !allDataIsPositive(distance, duration, cadence)
            ) {
                alert('Inputs must be positive numbers!');
                hideForm();
                return;
            }
            // Create running object
            workout = new Running([lat, lng], duration, distance, cadence);
        }

        if (type === 'cycling') {
            const elevation = +inputElevation.value;
            // Check if data is valid
            if (!allDataIsValid(distance, duration, elevation) ||
                !allDataIsPositive(distance, duration, elevation)
            ) {
                alert('Inputs must be positive numbers!');
                hideForm();
                return;
            }
            // Create cycling object
            workout = new Cycling([lat, lng], duration, distance, elevation);
        }

        // Save new object to workouts array
        this._workouts.push(workout);
        console.log('workout berhasil dibuat!');

        // Render workout on map as marker
        this._renderWorkoutMarker(workout);

        // Render workout on list
        this._renderWorkout(workout);

        // Hide and Empty the form
        hideForm();

        // Save a new workout to local storage
        this._setLocalStorage();
    }

    _setLocalStorage() {
        localStorage.setItem('workouts', JSON.stringify(this._workouts));
    }
    _getLocalStorage() {
        const workouts = JSON.parse(localStorage.getItem('workouts'));
        if (!workouts) return;

        this._workouts = workouts;
        console.log(workouts);
        workouts.forEach(workout => {
            this._renderWorkout(workout);
            this._renderWorkoutMarker(workout);
        });
    }

    _renderWorkoutMarker(workout) {
        L.marker(workout.coords)
            .addTo(this._map)
            .bindPopup(
                L.popup({
                    maxWidth: 250,
                    minWidth: 100,
                    autoClose: false,
                    closeOnClick: false,
                    className: `${workout.type}-popup`,
                })
            )
            .setPopupContent(
                `${workout.type == 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
            )
            .openPopup();
    }
    _renderWorkout(workout) {
        let html = `
        <li class="workout workout--${workout.type}" data-id="${workout.id}">
            <h2 class="workout__title">${workout.description}</h2>
            <div class="workout__details">
                <span class="workout__icon">${
                  workout.type == 'running' ? '🏃‍♂️' : '🚴‍♀️'
                }</span>
                <span class="workout__value">${workout.distance}</span>
                <span class="workout__unit">km</span>
            </div>
            <div class="workout__details">
                <span class="workout__icon">⏱</span>
                <span class="workout__value">${workout.duration}</span>
                <span class="workout__unit">min</span>
            </div>
            `;
        if (workout.type === 'running') {
            html += `
            <div class="workout__details">
                <span class="workout__icon">⚡️</span>
                <span class="workout__value">${workout.pace}</span>
                <span class="workout__unit">min/km</span>
            </div>
            <div class="workout__details">
                <span class="workout__icon">🦶🏼</span>
                <span class="workout__value">${workout.cadence}</span>
                <span class="workout__unit">spm</span>
            </div>
        </li>`;
        }
        if (workout.type === 'cycling') {
            html += `
            <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">m</span>
          </div>
        </li>`;
        }
        form.insertAdjacentHTML('afterend', html);
    }

    _moveToPopup(e) {
        // 1. Ambil element workout yang diklik
        // 2. Ambil object workout dari array Workouts, sesuai dengan
        //    data-id element workout yang diklik
        // 3. Ambil coordinate dari object workout tsb
        // 4. setview ke coordinate tersebut

        const workoutEl = e.target.closest('.workout');
        if (!workoutEl) return;

        const workout = this._workouts.find(
            work => work.id === workoutEl.dataset.id
        );
        // console.log(workout);
        this._map.setView(workout.coords, 13, {
            animate: true,
            pan: { duration: 1 },
        });
    }
}

const Run = new App();