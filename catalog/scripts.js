document.addEventListener('DOMContentLoaded', function() {
    fetchDogs();
});





const breeds = [
    "affenpinscher",
    "airedale",
    "akita",
    "appenzeller",
    "australian",
    "basenji",
    "beagle",
    "bluetick",
    "borzoi",
    "bouvier",
    "boxer",
    "briard",
    "bulldog",
    "bullterrier",
    "chihuahua",
    "chow",
    "clumber",
    "collie",
    "corgi",
    "dachshund",
    "dalmatian",
    "dane",
    "deerhound",
    "dhole",
    "dingo",
    "doberman",
    "finnish",
    "germanshepherd",
    "greyhound",
    "havanese",
    "husky",
    "labrador",
    "malamute",
    "malinois",
    "mastiff",
    "newfoundland",
    "papillon",
    "pekinese",
    "pembroke",
    "pinscher",
    "pitbull",
    "pointer",
    "pomeranian",
    "poodle",
    "pug",
    "pyrenees",
    "retriever",
    "rottweiler",
    "saluki",
    "samoyed",
    "schnauzer",
    "setter",
    "sheepdog",
    "shiba",
    "shihtzu",
    "spaniel",
    "spitz",
    "springer",
    "stbernard",
    "terrier",
    "tervuren",
    "vizsla",
    "weimaraner",
    "whippet",
    "wolfhound"
];


const breedNameMap = {
    "affenpinscher": "Аффенпинчер",
    "airedale": "Эрдельтерьер",
    "akita": "Акита",
    "appenzeller": "Аппенцеллер",
    "australian": "Австралийская овчарка",
    "basenji": "Басенджи",
    "beagle": "Бигль",
    "bluetick": "Блютик кунхаунд",
    "borzoi": "Борзая",
    "bouvier": "Бувье",
    "boxer": "Боксер",
    "briard": "Бриард",
    "bulldog": "Бульдог",
    "bullterrier": "Бультерьер",
    "chihuahua": "Чихуахуа",
    "chow": "Чау-чау",
    "clumber": "Кламбер-спаниель",
    "collie": "Колли",
    "corgi": "Вельш-корги",
    "dachshund": "Такса",
    "dalmatian": "Далматин",
    "dane": "Немецкий дог",
    "deerhound": "Дирхаунд",
    "dhole": "Дхол",
    "dingo": "Динго",
    "doberman": "Доберман",
    "finnish": "Финская лайка",
    "germanshepherd": "Немецкая овчарка",
    "greyhound": "Грейхаунд",
    "havanese": "Гаванская бишон",
    "husky": "Хаски",
    "labrador": "Лабрадор",
    "malamute": "Маламут",
    "malinois": "Малинуа",
    "mastiff": "Мастиф",
    "newfoundland": "Ньюфаундленд",
    "papillon": "Папийон",
    "pekinese": "Пекинес",
    "pembroke": "Вельш-корги Пемброк",
    "pinscher": "Пинчер",
    "pitbull": "Питбуль",
    "pointer": "Пойнтер",
    "pomeranian": "Померанский шпиц",
    "poodle": "Пудель",
    "pug": "Мопс",
    "pyrenees": "Пиренейская горная собака",
    "retriever": "Ретривер",
    "rottweiler": "Ротвейлер",
    "saluki": "Салуки",
    "samoyed": "Самоед",
    "schnauzer": "Шнауцер",
    "setter": "Сеттер",
    "sheepdog": "Овчарка",
    "shiba": "Сиба-ину",
    "shihtzu": "Ши-тцу",
    "spaniel": "Спаниель",
    "spitz": "Шпиц",
    "springer": "Спрингер-спаниель",
    "stbernard": "Сенбернар",
    "terrier": "Терьер",
    "tervuren": "Тервюрен",
    "vizsla": "Венгерская выжла",
    "weimaraner": "Веймаранер",
    "whippet": "Уиппет",
    "wolfhound": "Ирландский волкодав"
};
document.addEventListener('DOMContentLoaded', function() {
    fetchDogs();
});

function fetchBreedImage(breed) {
    fetch('https://dog.ceo/api/breed/' + breed + '/images/random')
    .then(function(response) {
        return response.json();
    })
    .then(function(imageData) {
        var breedInRussian = breedNameMap[breed] || breed;
        displayDog(breed, breedInRussian, imageData.message);
    });
}

function fetchDogs() {
    for (var i = 0; i < breeds.length; i++) {
        fetchBreedImage(breeds[i]);
    }

    var additionalBreeds = [
        { breedEnglish: "Impostor", breedRussian: "Хороший мальчик", imageUrl: "../public/1dfd186717628d5e0f5f1379046a494a.jpg" }
    ]
    
        //displayDog(additionalBreeds[0].breedEnglish, additionalBreeds[0].breedRussian, additionalBreeds[0].imageUrl);
    

}
function displayDog(breedEnglish, breedRussian, imageUrl) {
    var dogList = document.getElementById('dogList');

    var dogElement = document.createElement('div');
    dogElement.className = 'relative dog w-1/4 m-2 overflow-hidden rounded-lg shadow-lg cursor-pointer';

    dogElement.style.backgroundImage = 'url(' + imageUrl + ')';
    dogElement.style.backgroundSize = 'cover';
    dogElement.style.backgroundPosition = 'center';
    dogElement.style.height = '500px';

    var textContainer = document.createElement('div');
    textContainer.className = 'absolute bottom-0 w-full p-2 bg-black bg-opacity-50 text-white text-center';
    var breedName = document.createElement('p');
    breedName.innerText = breedRussian;
    breedName.className = 'font-semibold';

    textContainer.appendChild(breedName);

    dogElement.appendChild(textContainer);

    dogElement.addEventListener('click', function() {
        showDogInfo(breedRussian, breedEnglish, imageUrl);
    });

    dogList.appendChild(dogElement);
}
function showDogInfo(breedRussian, breedEnglish, imageUrl) {
    var modal = document.getElementById('modal');

    var dogInfo = document.getElementById('dogInfo');

    dogInfo.style.backgroundImage = 'url(' + imageUrl + ')';

    var overlay = dogInfo.querySelector('.text-overlay');
    if (!overlay) {
   
        var newOverlay = document.createElement('div');
        newOverlay.className = 'w-full p-4 bg-black bg-opacity-50 text-white text-center text-lg font-bold text-overlay';
        newOverlay.innerText = breedRussian;
        dogInfo.appendChild(newOverlay);
    } else {

        overlay.innerText = breedRussian;
    }

    modal.classList.remove('hidden');
    modal.style.display = 'flex';
    
    document.querySelector('.close').onclick = function() {
        document.getElementById('modal').style.display = 'none';
    };
    
    window.onclick = function(event) {
        var modal = document.getElementById('modal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

function capitalizeBreedName(breed) {
    var words = breed.split(' ');
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(' ');
}

function filterDogs() {
    var search = document.getElementById('searchBox').value.toLowerCase();
    var dogs = document.querySelectorAll('.dog');
    for (var i = 0; i < dogs.length; i++) {
        var breedName = dogs[i].querySelector('p').innerText.toLowerCase();
        if (breedName.includes(search)) {
            dogs[i].style.display = '';
        } else {
            dogs[i].style.display = 'none';
        }
    }
}
