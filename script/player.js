const playerCards = document.querySelector('.players-card')

const playersDate = [
  {
    jerseyNumber: 14,
    name: 'EZEKIEL OROH',
    age: 19,
    nationality: 'NIGERIA',
    position: 'CF',
    img: '../assets/images/players/placeholder.jpg',
  },
  {
    jerseyNumber: 15,
    name: 'SURAK MUSAH',
    age: 19,
    nationality: 'GHANA',
    position: 'CF',
    img: '../assets/images/players/SURAK_MUSAH.jpeg',
  },
  {
    jerseyNumber: 10,
    name: 'ASEL MOHAMMED ABDELREDA',
    age: 23,
    nationality: 'BELGIUM',
    position: 'CF',
    img: '../assets/images/players/ASEL_MOHAMMED_ABDELREDA.jpeg',
  },
  {
    jerseyNumber: 9,
    name: 'FELIPE MICAEL TENORIO MENEZES',
    age: 19,
    nationality: 'BRASIL',
    position: 'CF',
    img: '../assets/images/players/FELIPE_MICAEL _TENORIO_MENEZES.jpeg',
  },
  {
    jerseyNumber: 20,
    name: 'RAMZI ELIAS JALEEL SHAHEEN',
    age: 18,
    nationality: 'USA',
    position: 'M',
    img: '../assets/images/players/RAMZI_ELIAS_JALEEL_SHAHEEN.jpeg',
  },
  {
    jerseyNumber: 27,
    name: 'ISSAM SAKHI',
    age: 22,
    nationality: 'MOROCO',
    position: 'CF',
    img: '../assets/images/players/ISSAM_SAKHI.jpeg',
  },
  {
    jerseyNumber: 70,
    name: 'ALI AMEERI',
    age: 32,
    nationality: 'UAE',
    position: 'F',
    img: '../assets/images/players/ALI_AMEERI.jpeg',
  },
  {
    jerseyNumber: 4,
    name: 'DIEGO GONZALEZ',
    age: 23,
    nationality: 'ARGENTINA',
    position: 'RB',
    img: '../assets/images/players/placeholder.jpg',
  },
  {
    jerseyNumber: 21,
    name: 'MATIAS NUNEZ',
    age: 21,
    nationality: 'ARGENTINA',
    position: 'CB',
    img: '../assets/images/players/placeholder.jpg',
  },
  {
    jerseyNumber: 7,
    name: 'OSMAN YUSIF',
    age: 19,
    nationality: 'GHANA',
    position: 'RM',
    img: '../assets/images/players/OSMAN_YUSIF.jpeg',
  },
  {
    jerseyNumber: 19,
    name: 'ABRAHAM OKYERE',
    age: 18,
    nationality: 'GHANA',
    position: 'CM',
    img: '../assets/images/players/ABRAHAM_OKYERE.jpeg',
  },
  {
    jerseyNumber: 8,
    name: 'JOE AIDOO',
    age: 20,
    nationality: 'GHANA',
    position: 'RM',
    img: '../assets/images/players/JOE_AIDOO.jpeg',
  },
  {
    jerseyNumber: 6,
    name: 'ROUCHDANE ALANI BELLO',
    age: 20,
    nationality: 'NIGERIA',
    position: 'LM',
    img: '../assets/images/players/ROUCHDANE_ALANI_BELLO.jpeg',
  },
  {
    jerseyNumber: 5,
    name: 'SYLLA MOUSTAPHA',
    age: 19,
    nationality: 'MALI',
    position: 'LB',
    img: '../assets/images/players/SYLLA_MOUSTAPHA.jpeg',
  },
  {
    jerseyNumber: 25,
    name: 'KOBINA',
    age: 20,
    nationality: 'GHANA',
    position: 'CB',
    img: '../assets/images/players/placeholder.jpg',
  },
  {
    jerseyNumber: 3,
    name: 'ONYEKA CHUDY JOSEPH',
    age: 19,
    nationality: 'NIGERIA',
    position: 'CM',
    img: '../assets/images/players/ONYEKA_CHUDY_JOSEPH.jpeg',
  },
  {
    jerseyNumber: 2,
    name: 'MUMUNI ABASS',
    age: 19,
    nationality: 'GHANA',
    position: 'CB',
    img: '../assets/images/players/MUMUNI_ABASS.jpeg',
  },
  {
    jerseyNumber: 16,
    name: 'MOUMENE SALAH EDDINE',
    age: 25,
    nationality: 'ALGERIA',
    position: 'CB',
    img: '../assets/images/players/MOUMENE_SALAH_EDDINE.jpeg',
  },
  {
    jerseyNumber: 12,
    name: 'MOHAMMED INZAMAM',
    age: 22,
    nationality: 'INDIA',
    position: 'GK',
    img: '../assets/images/players/MOHAMMED_INZAMAM.jpeg',
  },
  {
    jerseyNumber: 1,
    name: 'EZEQUIEL MUTH',
    age: 21,
    nationality: 'ARGENRINA',
    position: 'GK',
    img: '../assets/images/players/placeholder.jpg',
  },
  {
    jerseyNumber: '-',
    name: 'LEBO MOKHOMO',
    age: 31,
    nationality: 'SOUTH AFRICA',
    position: 'F',
    img: '../assets/images/players/placeholder.jpg',
  },
  {
    jerseyNumber: 29,
    name: 'DANIEL CHIBUEZE NDUKWU',
    age: 18,
    nationality: 'NIGERIA',
    position: 'CB',
    img: '../assets/images/players/placeholder.jpg',
  },
  {
    jerseyNumber: 23,
    name: 'PIUS',
    age: 24,
    nationality: 'UGANDA',
    position: 'F',
    img: '../assets/images/players/placeholder.jpg',
  },
  {
    jerseyNumber: 26,
    name: 'AHMED',
    age: '-',
    nationality: 'EGIPTO',
    position: 'LB',
    img: '../assets/images/players/placeholder.jpg',
  },
  {
    jerseyNumber: 18,
    name: 'EL MARINI NOUAMANE',
    age: 21,
    nationality: 'MOROCO',
    position: 'RB',
    img: '../assets/images/players/placeholder.jpg',
  },
  {
    jerseyNumber: '39',
    name: 'Haroon Bashir',
    age: 20,
    nationality: 'indian',
    position: 'Forward',
    img: '../assets/images/players/Haroon_Bashir.jpeg',
  },
]

function getPlayersData() {
  const data = playersDate.map((player) => {
    return `<figure class="player-card__item">
      <section class="player-card__container">
          <aside class="aside_item_1">
              <div class="player__nationality"><img src="./assets/images/saudi-arabia.png" alt=""></div>
              <div class="player__number">${player.jerseyNumber}</div>
          </aside>
          <div class="player__img">
          <img src="${player.img}" alt="${player.name}">
          </div>
          <aside class="aside_item_2">
              <div class="player__age_name">Age</div>
              <div class="player__age_number">${player.age}</div>
          </aside>
      </section>
      <figcaption>
          <span class="player__name">${player.name}</span>
      </figcaption>
    </figure>`
  })

  playerCards.insertAdjacentHTML('beforeend', data)
}
getPlayersData()
