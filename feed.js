const STAY = "6–8 ноября, 2 ночи, 2 взрослых";

const FEED = [
  {
    id: "ns54L7UnjimHvsCGa9b1j6",
    title: "Цветущий Дагестан",
    text: "Цветущий Дагестан. Короткий ролик про Махачкалу: в реестре у него нет отдельного текста, только это название. Ниже отель, который Туту показал первым на эти даты.",
    offers: [hotel("Отель MoonLit", "8549 ₽ за 2 ночи", "Махачкала, Республика Дагестан. Бесплатная отмена. Завтрак Туту не указал.", "https://cdn4.tu-tu.ru/static/hotels-photo/hotels-photo/2247a56f2a08085dc056fe52b7ef01dc2aa00816.6bf2fefcac2e07ffb6f3a65b83b31762c4b2ea49.jpeg", "https://hotel.tutu.ru/offers/details?business=0&check_in=2026-11-06&check_out=2026-11-08&geo_id=10558306&geo_name=%D0%9C%D0%B0%D1%85%D0%B0%D1%87%D0%BA%D0%B0%D0%BB%D0%B0&room%5B0%5D=2&search_id=908715a3e3eaec1ea677535fa1b0a8cc")],
  },
  {
    id: "eFKMXotDNvs6g9Kjqgrytx",
    title: "Выходные в Карелии",
    text: "Выходные в Карелии. Ролик про Петрозаводск, отдельного описания автора в реестре нет. Карточка ведёт на страницу отеля с уже подставленными датами.",
    offers: [hotel("Фрегат", "13287 ₽ за 2 ночи", "Петрозаводск, Республика Карелия. 4 звезды. Завтрак «шведский стол». Бесплатная отмена.", "https://cdn2.tu-tu.ru/imghub/view/212cf84e-f051-4c24-a2b2-a75686dcfba2/resize_500_500/4271b6c12b3a41b87b17f2bfcd92ed9a/fc74dd706ab874e0ee20fabd5db2c4fc.jpg", "https://hotel.tutu.ru/offers/details?business=0&check_in=2026-11-06&check_out=2026-11-08&geo_id=11443104&geo_name=%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B7%D0%B0%D0%B2%D0%BE%D0%B4%D1%81%D0%BA&room%5B0%5D=2&search_id=1c3e77ff99be685f3d61410bdf017ae5")],
  },
  {
    id: "e2i4VcBbPwGRp4cDUe4Q5W",
    title: "Секреты Розы Хутор",
    text: "Секреты Розы Хутор. Короткий ролик про курорт. В отельном индексе у самой Розы Хутор пусто, поэтому отель взят по горнолыжному курорту «Красная Поляна». Сверху — прямой рейс из Москвы.",
    offers: [
      {
        title: "Самолёт в Сочи",
        price: "от 3338.05₽",
        label: "Победа DP-5945, 6 ноября, 07:10–11:00, прямой, Шереметьево (SVO), терм. D → Сочи, AER. Базовый, без багажа, ручная кладь 1 место 36×30×27. 3338.05 ₽ за 1 взрослого, снимок поиска 19 октября.",
        image: null,
        href: "https://avia.tutu.ru/f/Moskva/Sochi/?class=Y&travelers=1&route[0]=491-06112026-78&utm_source=grok&utm_medium=mcp",
      },
      hotel("Сочи Марриотт Красная Поляна", "30320 ₽ за 2 ночи", "Горнолыжный курорт «Красная Поляна». 5 звёзд. Завтрак «шведский стол». Бесплатная отмена. По самой Розе Хутор Туту не вернул отели.", "https://cdn2.tu-tu.ru/imghub/view/892c50d8-eb72-402e-9928-bb6e8e11679f/resize_500_500/4271b6c12b3a41b87b17f2bfcd92ed9a/48a56a9f485f5ef4898d251c7364a6ea.jpg", "https://hotel.tutu.ru/offers/details?business=0&check_in=2026-11-06&check_out=2026-11-08&geo_id=7646252&geo_name=%D0%93%D0%BE%D1%80%D0%BD%D0%BE%D0%BB%D1%8B%D0%B6%D0%BD%D1%8B%D0%B9%20%D0%BA%D1%83%D1%80%D0%BE%D1%80%D1%82%20%22%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%B0%D1%8F%20%D0%9F%D0%BE%D0%BB%D1%8F%D0%BD%D0%B0%22&room%5B0%5D=2&search_id=8870df1656070480f1ea288074ed3e9c"),
    ],
  },
  {
    id: "p4c2nCUvE95qAmtEUq9Tf8",
    title: "Великолепный Муром",
    text: "Великолепный Муром. В реестре ролик подписан «Тут был Илья Муромец», другого текста нет. Карточка — первый отель Мурома на 6–8 ноября.",
    offers: [hotel("X.ROOM", "13182 ₽ за 2 ночи", "Муром, Владимирская область. 4 звезды. Бесплатная отмена. Завтрак Туту не указал.", "https://cdn4.tu-tu.ru/static/hotels-photo/hotels-photo/2e52b363074701175bcee5cbeffded2c260d518d.930eea2cb91b9442a2c27f8ff2c2e48d83386fdb.jpeg", "https://hotel.tutu.ru/offers/details?business=0&check_in=2026-11-06&check_out=2026-11-08&geo_id=11520283&geo_name=%D0%9C%D1%83%D1%80%D0%BE%D0%BC&room%5B0%5D=2&search_id=6149c8c12cba766427f198ce35c2f4bb")],
  },
  {
    id: "gyqQRJbPDuhH9Po2heGetf",
    title: "Маршрут по Хибинам",
    text: "Маршрут по Хибинам. Короткий ролик без отдельного описания. Отель искали в Кировске Мурманской области: это город у Хибин, не одноимённый Кировск в другом регионе.",
    offers: [hotel("Гостиница Северная", "20100 ₽ за 2 ночи", "Кировск, Мурманская область. 3 звезды. Континентальный завтрак. Бесплатная отмена.", "https://cdn.ostrovok.ru/t/x500/extranet/64/51/645102c2013bb3cd55b2bc285a1dabf0ac5e97fb.WEBP", "https://hotel.tutu.ru/offers/details?business=0&check_in=2026-11-06&check_out=2026-11-08&geo_id=11410302&geo_name=%D0%9A%D0%B8%D1%80%D0%BE%D0%B2%D1%81%D0%BA&room%5B0%5D=2&search_id=6b46cec665fd9932d8cf2089f71f8bff")],
  },
  {
    id: "qRK3cppTQQQjCKAPEZ2m5s",
    title: "Солнечная Армения",
    text: "Солнечная Армения. Ролик про Ереван, в реестре только название. Карточка открывает страницу отеля, комнату ещё нужно выбрать.",
    offers: [hotel("Hotel Merien", "8917 ₽ за 2 ночи", "Ереван, Армения. 3 звезды. Бесплатная отмена. Завтрак Туту не указал.", "https://cdn.ostrovok.ru/t/x500/extranet/fb/53/fb5360820747b3ea2b3197c692bc62f6c6a23561.jpeg", "https://hotel.tutu.ru/offers/details?business=0&check_in=2026-11-06&check_out=2026-11-08&geo_id=6845252&geo_name=%D0%95%D1%80%D0%B5%D0%B2%D0%B0%D0%BD&room%5B0%5D=2&search_id=f4f0fbfb9351512934105ef994695a4d")],
  },
  {
    id: "dBoYCW8FxmozAbviT2x3MR",
    title: "Суздаль для души",
    text: "Суздаль для души. Короткий ролик без авторского текста длиннее названия. Отель ниже — первый в выдаче Суздаля на те же даты, что и остальные карточки.",
    offers: [hotel("Апарт-отель Пролетарский Дворик", "13680 ₽ за 2 ночи", "Суздаль, Владимирская область. Бесплатная отмена. Завтрак Туту не указал.", "https://cdn.ostrovok.ru/t/x500/extranet/34/77/3477093c55d7c427969a59844198b226b3059ed6.jpeg", "https://hotel.tutu.ru/offers/details?business=0&check_in=2026-11-06&check_out=2026-11-08&geo_id=7801430&geo_name=%D0%A1%D1%83%D0%B7%D0%B4%D0%B0%D0%BB%D1%8C&room%5B0%5D=2&search_id=1c240d0577d81171af34723283033404")],
  },
  {
    id: "dMNvwVaWP6nYjmHg45dgab",
    title: "Едем на Домбай",
    text: "Едем на Домбай. Ролик про сам посёлок, отдельного описания нет. Искали зону «Домбай»: Туту собрал её как курорт, а не одну улицу.",
    offers: [hotel("ГК Гранд-Отель", "7220 ₽ за 2 ночи", "Домбай. Бесплатная отмена. Завтрак Туту не указал.", "https://cdn.ostrovok.ru/t/x500/extranet/6f/4b/6f4ba435bcb901fa3fd4a7f7f4743a27a20094cb.JPEG", "https://hotel.tutu.ru/offers/details?business=0&check_in=2026-11-06&check_out=2026-11-08&geo_id=7800756&geo_name=%D0%94%D0%BE%D0%BC%D0%B1%D0%B0%D0%B9&room%5B0%5D=2&search_id=2fb2f991afc8430572f333a8624c97e5")],
  },
  {
    id: "3uQ6jYfAMX8Gvz3JDxxX65",
    title: "Прогулка и крендели Выборга",
    text: "Прогулка и крендели Выборга. Название и есть всё описание из реестра. Карточка — гостиница в Выборге на 6–8 ноября, завтрак уже входит в этот тариф.",
    offers: [hotel("Гостиница «Выборг»", "10260 ₽ за 2 ночи", "Выборг, Ленинградская область. 3 звезды. Завтрак «шведский стол». Бесплатная отмена.", "https://cdn2.tu-tu.ru/imghub/view/0f30d2a0-3401-44a1-9f2d-6f569bdfbeac/resize_500_500/4271b6c12b3a41b87b17f2bfcd92ed9a/2d04b4acba7982c63a91846cbef56e4e.jpg", "https://hotel.tutu.ru/offers/details?business=0&check_in=2026-11-06&check_out=2026-11-08&geo_id=11411003&geo_name=%D0%92%D1%8B%D0%B1%D0%BE%D1%80%D0%B3&room%5B0%5D=2&search_id=4e0bd007e871a6c07e1cd0409a8f04bd")],
  },
  {
    id: "pCrAAnPgnRrM8TCMQMZNpN",
    title: "Красота Камчатки",
    text: "Красота Камчатки. Короткий ролик про Петропавловск-Камчатский, длинного текста автора нет. Отель ниже — первый в выдаче города на эти даты.",
    offers: [hotel("Гостиница «Авача»", "15865 ₽ за 2 ночи", "Петропавловск-Камчатский, Камчатский край. 3 звезды. Бесплатная отмена. Завтрак Туту не указал.", "https://cdn4.tu-tu.ru/static/hotels-photo/hotels-photo/1e77895e80a811bc0753553e80aa952e2bd25dc6.4c4767480f538efdd3b05e53487af64cc8278913.jpeg", "https://hotel.tutu.ru/offers/details?business=0&check_in=2026-11-06&check_out=2026-11-08&geo_id=11443544&geo_name=%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%BF%D0%B0%D0%B2%D0%BB%D0%BE%D0%B2%D1%81%D0%BA-%D0%9A%D0%B0%D0%BC%D1%87%D0%B0%D1%82%D1%81%D0%BA%D0%B8%D0%B9&room%5B0%5D=2&search_id=18e61b183075bcc72cdca3b54158e741")],
  },
];

function hotel(title, price, detail, image, href) {
  return {
    title: title,
    price: price,
    label: title + ". " + STAY + ". " + detail + " Цена — итог за весь срок, снимок поиска 20 октября.",
    image: image,
    href: href + "&utm_source=grok&utm_medium=mcp",
  };
}

const feed = document.getElementById("feed");
const status = document.getElementById("status");
const scrub = document.getElementById("scrub");
const timeLabel = document.getElementById("time");

const ICONS = {
  soundOff: '<svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10h3l4-4v12l-4-4H4zM16 9l5 6M21 9l-5 6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" stroke-linecap="round"/></svg>',
  soundOn: '<svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10h3l4-4v12l-4-4H4zM16 9a4 4 0 0 1 0 6M18.5 7a7 7 0 0 1 0 10" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  heart: '<svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19s-7-4.4-7-9a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 4.6-7 9-7 9z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>',
  heartOn: '<svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19s-7-4.4-7-9a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 4.6-7 9-7 9z" fill="currentColor" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>',
  comment: '<svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 17l-2 3V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H6z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>',
  share: '<svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v10M8 8l4-4 4 4M6 13v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  chevron: '<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
};

let player = null;
let active = 0;
let muted = true;
let generation = 0;
let scrolling = false;

function posterUrl(id) {
  return "https://kinescope.io/" + id + "/poster.jpg";
}

function iconButton(action, label, svg) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "rail-btn";
  button.dataset.action = action;
  button.setAttribute("aria-label", label);
  button.innerHTML = svg;
  return button;
}

function render() {
  feed.replaceChildren();
  FEED.forEach((item, index) => {
    const slide = document.createElement("section");
    slide.className = "slide" + (index === 0 ? " is-active" : "");
    slide.dataset.index = String(index);

    const img = document.createElement("img");
    img.className = "poster";
    img.alt = "";
    img.src = posterUrl(item.id);
    slide.appendChild(img);

    const slot = document.createElement("div");
    slot.className = "player-slot";
    slide.appendChild(slot);

    const shade = document.createElement("div");
    shade.className = "shade";
    slide.appendChild(shade);

    const rail = document.createElement("div");
    rail.className = "rail";
    rail.append(
      iconButton("sound", "Звук", ICONS.soundOff),
      iconButton("like", "Нравится", ICONS.heart),
      iconButton("comment", "Комментарии", ICONS.comment),
      iconButton("share", "Поделиться", ICONS.share)
    );
    slide.appendChild(rail);

    const dock = document.createElement("div");
    dock.className = "dock";

    const author = document.createElement("div");
    author.className = "author";
    const avatar = document.createElement("span");
    avatar.className = "avatar";
    avatar.textContent = "Б";
    const who = document.createElement("div");
    who.className = "bio";
    const name = document.createElement("p");
    name.className = "name";
    name.textContent = "Блогеры рекомендуют";
    const caption = document.createElement("p");
    caption.className = "caption";
    caption.textContent = item.text;
    const more = document.createElement("button");
    more.type = "button";
    more.className = "more";
    more.dataset.action = "more";
    more.hidden = true;
    more.textContent = "ещё";
    who.append(name, caption, more);
    author.append(avatar, who);
    dock.appendChild(author);

    (item.offers || []).forEach((offer) => {
      const card = document.createElement("a");
      card.className = "offer";
      card.href = offer.href;
      card.target = "_blank";
      card.rel = "noopener noreferrer";
      card.setAttribute("aria-label", offer.label);

      const thumb = document.createElement("img");
      thumb.className = "thumb";
      thumb.alt = "";
      thumb.src = offer.image || posterUrl(item.id);

      const text = document.createElement("span");
      text.className = "offer-text";
      const offerTitle = document.createElement("span");
      offerTitle.className = "offer-title";
      offerTitle.textContent = offer.title;
      const offerPrice = document.createElement("span");
      offerPrice.className = "offer-price";
      offerPrice.textContent = offer.price;
      text.append(offerTitle, offerPrice);

      const chevron = document.createElement("span");
      chevron.className = "chevron";
      chevron.innerHTML = ICONS.chevron;

      card.append(thumb, text, chevron);
      dock.appendChild(card);
    });

    slide.appendChild(dock);
    feed.appendChild(slide);
  });
}

function slides() {
  return [...feed.querySelectorAll(".slide")];
}

function revealActive() {
  slides().forEach((slide, index) => {
    slide.classList.toggle("is-revealed", index === active && !scrolling);
  });
}

function paintSound() {
  document.querySelectorAll('[data-action="sound"]').forEach((button) => {
    button.innerHTML = muted ? ICONS.soundOff : ICONS.soundOn;
    button.setAttribute("aria-pressed", String(!muted));
    button.setAttribute("aria-label", muted ? "Включить звук" : "Выключить звук");
  });
}

async function applyMute() {
  paintSound();
  if (!player) return;
  if (muted) await player.mute();
  else await player.unmute();
}

let factory = null;
let mountChain = Promise.resolve();
let bench = null;
let benchToken = 0;
let benchSerial = 0;

function playerOptions(id, autoPlay) {
  return {
    url: "https://kinescope.io/" + id,
    size: { width: "100%", height: "100%" },
    behavior: {
      autoPlay: autoPlay,
      muted: autoPlay ? muted : true,
      loop: true,
      playsInline: true,
      preload: "auto",
      keyboard: false,
      autoPause: false,
      localStorage: { time: false, quality: false },
    },
    ui: {
      language: "ru",
      controls: false,
      mainPlayButton: false,
    },
  };
}

function bindPlayer(instance, token) {
  instance.on(instance.Events.Playing, () => {
    if (token !== generation) return;
    document.documentElement.dataset.playback = "playing";
    scrolling = false;
    revealActive();
  });
  instance.on(instance.Events.Pause, () => {
    document.documentElement.dataset.playback = "paused";
  });
  instance.on(instance.Events.Error, () => {
    if (token !== generation) return;
    status.hidden = false;
    status.textContent = "Плеер Кинескопа не смог открыть ролик.";
  });
}

async function dropBench() {
  const current = bench;
  bench = null;
  document.documentElement.dataset.preloaded = "";
  if (!current) return;
  try { await current.player.destroy(); } catch (error) { /* уже снят */ }
  const root = document.getElementById("bench");
  if (root) root.replaceChildren();
}

function warmNext(fromIndex) {
  const next = fromIndex + 1;
  document.documentElement.dataset.warm = String(fromIndex) + "->" + String(next);
  if (!factory || next >= FEED.length) {
    dropBench();
    return;
  }
  if (bench && bench.index === next) return;
  const token = ++benchToken;
  dropBench().then(async () => {
    if (token !== benchToken || active !== fromIndex) return;
    const hostId = "bench-" + (++benchSerial);
    const host = document.createElement("div");
    host.id = hostId;
    document.getElementById("bench").appendChild(host);
    let instance;
    try {
      instance = await factory.create(hostId, playerOptions(FEED[next].id, false));
    } catch (error) {
      return;
    }
    if (token !== benchToken || active !== fromIndex) {
      document.documentElement.dataset.warm = "skip " + active + " " + fromIndex + " " + token + "/" + benchToken;
      try { await instance.destroy(); } catch (error) { /* гонка */ }
      return;
    }
    bench = { index: next, player: instance, hostId: hostId };
    if (player && active === fromIndex) {
      player.isPaused().then((paused) => {
        if (paused && active === fromIndex) player.play().catch(() => {});
      }).catch(() => {});
    }
    document.documentElement.dataset.preloaded = String(next);
  });
}

async function takeBench(index, token) {
  if (!bench || bench.index !== index) return false;
  const ready = bench;
  bench = null;
  document.documentElement.dataset.preloaded = "";
  if (player) {
    const dying = player;
    player = null;
    try { await dying.destroy(); } catch (error) { /* старый плеер уже закрыт */ }
  }
  if (token !== generation) {
    document.documentElement.dataset.take = "mismatch";
    try { await ready.player.destroy(); } catch (error) { /* устаревший прогрев */ }
    return true;
  }
  const node = document.getElementById(ready.hostId);
  const slot = slides()[index] && slides()[index].querySelector(".player-slot");
  if (!node || !slot) {
    document.documentElement.dataset.take = "no-node";
    return false;
  }
  document.documentElement.dataset.take = "ok";
  slot.appendChild(node);
  player = ready.player;
  bindPlayer(player, token);
  document.documentElement.dataset.player = "ready";
  status.hidden = true;
  warmNext(index);
  player.play().then(() => applyMute()).catch(() => {});
  scrolling = false;
  revealActive();
  return true;
}

let mountingIndex = -1;

function show(index) {
  const next = Math.max(0, Math.min(FEED.length - 1, index));
  if (next === active && (player || mountingIndex === next)) {
    if (player) {
      scrolling = false;
      revealActive();
    }
    return;
  }
  active = next;
  slides().forEach((slide, i) => slide.classList.toggle("is-active", i === active));
  scrolling = true;
  revealActive();
  mount(active);
}

function mount(index) {
  const token = ++generation;
  mountingIndex = index;
  mountChain = mountChain
    .then(() => openVideo(index, token))
    .catch((error) => {
      if (token !== generation) return;
      scrolling = false;
      status.hidden = false;
      status.textContent = "Ролик не открылся.";
      document.documentElement.dataset.playerError = error && error.message ? error.message : String(error);
    })
    .then(() => {
      if (token === generation) mountingIndex = -1;
    });
}

async function startPlayback(instance) {
  try { await instance.mute(); } catch (error) { /* уже без звука */ }
  try { await instance.play(); } catch (error) { /* повторим, когда ролик загрузится */ }
}

async function openVideo(index, token) {
  if (token !== generation || !factory) return;
  if (player) {
    const dying = player;
    player = null;
    try { await dying.destroy(); } catch (error) { /* старый плеер уже закрыт */ }
  }
  if (token !== generation) return;

  const hostId = "play-" + (++benchSerial);
  const host = document.createElement("div");
  host.id = hostId;
  slides()[index].querySelector(".player-slot").appendChild(host);

  const instance = await factory.create(hostId, playerOptions(FEED[index].id, true));

  if (token !== generation) {
    await instance.destroy();
    return;
  }

  player = instance;
  document.documentElement.dataset.player = "ready";
  status.hidden = true;
  bindPlayer(instance, token);
  instance.once(instance.Events.Loaded, () => {
    if (token !== generation) return;
    startPlayback(instance);
  });
  await startPlayback(instance);
  if (muted) await applyMute();
  else {
    try { await instance.unmute(); } catch (error) { /* звук включится следующим тапом */ }
    paintSound();
  }
  let paused = true;
  try { paused = await instance.isPaused(); } catch (error) { paused = true; }
  if (!paused) {
    scrolling = false;
    revealActive();
  }
  warmNext(index);
}

function indexFromScroll() {
  const height = feed.clientHeight || 1;
  return Math.round(feed.scrollTop / height);
}

function boot(nextFactory) {
  factory = nextFactory;
  mount(0);
}

function fitCaptions() {
  document.querySelectorAll(".bio").forEach((bio) => {
    const caption = bio.querySelector(".caption");
    const more = bio.querySelector(".more");
    const wasOpen = bio.classList.contains("is-open");
    bio.classList.remove("is-open");
    const overflow = caption.scrollHeight > caption.clientHeight + 1;
    if (wasOpen) bio.classList.add("is-open");
    more.hidden = !overflow;
  });
}

render();
requestAnimationFrame(() => requestAnimationFrame(fitCaptions));
window.addEventListener("resize", fitCaptions);

let scrollTimer = 0;
feed.addEventListener("scroll", () => {
  scrolling = true;
  revealActive();
  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(() => {
    const index = indexFromScroll();
    const aligned = Math.abs(feed.scrollTop - index * feed.clientHeight) < 4;
    if (!aligned) {
      scrolling = false;
      revealActive();
      return;
    }
    show(index);
  }, 140);
}, { passive: true });

document.addEventListener("click", async (event) => {
  const action = event.target.closest("[data-action]");
  if (action) {
    const kind = action.dataset.action;
    if (kind === "sound") {
      muted = !muted;
      await applyMute();
    } else if (kind === "like") {
      const on = action.classList.toggle("is-on");
      action.innerHTML = on ? ICONS.heartOn : ICONS.heart;
    } else if (kind === "share" && navigator.share) {
      navigator.share({ title: "Тревел лента", url: location.href }).catch(() => {});
    } else if (kind === "more") {
      const bio = action.closest(".bio");
      const open = bio.classList.toggle("is-open");
      action.textContent = open ? "свернуть" : "ещё";
    }
    return;
  }
  if (!event.target.closest("#feed") || event.target.closest("a") || !player) return;
  if (await player.isPaused()) player.play();
  else player.pause();
});

function formatTime(seconds) {
  const whole = Math.max(0, Math.floor(seconds || 0));
  const minutes = Math.floor(whole / 60);
  const rest = whole % 60;
  return String(minutes).padStart(2, "0") + ":" + String(rest).padStart(2, "0");
}

setInterval(async () => {
  if (!player) return;
  try {
    const current = await player.getCurrentTime();
    const duration = await player.getDuration();
    timeLabel.textContent = formatTime(current);
    scrub.style.width = duration > 0 ? (current / duration) * 100 + "%" : "0%";
  } catch (error) {
    /* плеер ещё переключается */
  }
}, 250);

window.addEventListener("keydown", (event) => {
  if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
  event.preventDefault();
  const delta = event.key === "ArrowDown" ? 1 : -1;
  const index = Math.max(0, Math.min(FEED.length - 1, active + delta));
  slides()[index].scrollIntoView({ block: "start" });
});

if (window.__kinescopeFactory) boot(window.__kinescopeFactory);
else window.addEventListener("kinescope-ready", () => boot(window.__kinescopeFactory), { once: true });

setTimeout(() => {
  if (!player) {
    status.hidden = false;
    status.textContent = "Плеер Кинескопа не ответил. Обнови страницу.";
  }
}, 8000);
