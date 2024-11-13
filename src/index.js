// Массив с ID видео, которые будут воспроизводиться случайным образом
const videoIds = [
    'QykPk380FkU', // Пример видео 1
    'v5SOSwZg7b4', // Пример видео 2
    'XQ4Cx_ciS9M&t=2555s', // Пример видео 3    
];

// Получаем элементы кнопок и контейнер для видео
const randomVideoButton = document.getElementById('randomVideoButton');
const closeVideoButton = document.getElementById('closeVideoButton');
const videoContainer = document.getElementById('videoContainer');

// Функция для воспроизведения случайного видео
function playRandomVideo() {
    // Выбираем случайный ID видео из массива
    const randomVideoId = videoIds[Math.floor(Math.random() * videoIds.length)];

    // Проверяем, есть ли уже iframe с видео, и удаляем его, если есть
    const oldIframe = document.getElementById('youtubeVideo');
    if (oldIframe) {
        oldIframe.remove();
    }
    // Создаем новый iframe для YouTube видео
    const iframe = document.createElement('iframe');
    iframe.id = 'youtubeVideo';
    iframe.width = '560';
    iframe.height = '315';
    iframe.src = `https://www.youtube.com/embed/${randomVideoId}?autoplay=1`;
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    // Добавляем iframe на страницу
    videoContainer.appendChild(iframe);
    // Скрываем кнопку "Смотреть случайное видео" и показываем кнопку "Закрыть видео"
    randomVideoButton.style.display = 'none';
    closeVideoButton.style.display = 'inline';
}
// Функция для закрытия видео
function closeVideo() {
    // Удаляем iframe с видео, если он существует
    const oldIframe = document.getElementById('youtubeVideo');
    if (oldIframe) {
        oldIframe.remove();
    }
    // Показываем кнопку "Смотреть случайное видео" и скрываем кнопку "Закрыть видео"
    randomVideoButton.style.display = 'inline';
    closeVideoButton.style.display = 'none';
}
// Назначаем функции на кнопки
randomVideoButton.addEventListener('click', playRandomVideo);
closeVideoButton.addEventListener('click', closeVideo);




document.querySelectorAll('.apply-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('formContainer').style.display = 'flex';
    });
  });
  
  document.getElementById('closeBtn').addEventListener('click', () => {
    document.getElementById('formContainer').style.display = 'none';
  });
  
  document.getElementById('applyForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    let isValid = true;
  
    const nameField = document.getElementById('name');
    const phoneField = document.getElementById('phone');
    const agreeCheckbox = document.getElementById('agree');
    const nameError = document.getElementById('nameError');
    const phoneError = document.getElementById('phoneError');
    const agreeError = document.getElementById('agreeError');
  
    // Сброс ошибок перед проверкой
    nameError.style.display = 'none';
    phoneError.style.display = 'none';
    agreeError.style.display = 'none';
    nameField.classList.remove('invalid');
    phoneField.classList.remove('invalid');
  
    // Проверка имени
    if (!nameField.value.trim()) {
        nameField.classList.add('invalid');
        nameError.style.display = 'block';
        isValid = false;
    }
  
    // Проверка номера телефона
    if (!phoneField.value.trim()) {
        phoneField.classList.add('invalid');
        phoneError.style.display = 'block';
        phoneError.textContent = 'Введите номер телефона';
        isValid = false;
    } else {
        // Регулярное выражение для международного формата номера телефона
        const phoneRegex = /^\+?[1-9]\d{1,14}$/;
        if (!phoneRegex.test(phoneField.value.trim())) {
            phoneField.classList.add('invalid');
            phoneError.style.display = 'block';
            phoneError.textContent = 'Введите номер в формате, например +71234567890';
            isValid = false;
        } else {
            // Если номер валиден, скрываем ошибку и удаляем класс 'invalid'
            phoneField.classList.remove('invalid');
            phoneError.style.display = 'none';
        }
    }
  
    // Проверка согласия на обработку персональных данных
    if (!agreeCheckbox.checked) {
        agreeError.style.display = 'block';
        isValid = false;
    }
  
    // Если форма валидна
    if (isValid) {
        // Отправка данных на сервер (симуляция)
        console.log("Форма отправлена");
  
        // Скрываем форму
        document.getElementById('formContainer').style.display = 'none';
  
        // Сброс формы после отправки
        this.reset();
  
        // Показ всплывающего окна
        const successPopup = document.getElementById('successPopup');
        successPopup.style.display = 'block';
  
        // Закрыть всплывающее окно через 3 секунды
        setTimeout(() => {
            successPopup.style.display = 'none';
        }, 3000);
    }
  });



   // Получаем все элементы с классом "icon heart"
   const icons = document.querySelectorAll('.icon.heard');

   // Назначаем обработчик клика для каждого элемента
   icons.forEach(icon => {
     icon.addEventListener('click', () => {
       icon.classList.toggle('active');
     });
   });
  


