const FEED = [
  {
    id: "ns54L7UnjimHvsCGa9b1j6",
    title: "Цветущий Дагестан",
    place: "Махачкала",
  },
  {
    id: "eFKMXotDNvs6g9Kjqgrytx",
    title: "Выходные в Карелии",
    place: "Петрозаводск",
  },
  {
    id: "e2i4VcBbPwGRp4cDUe4Q5W",
    title: "Секреты Розы Хутор",
    place: "Сочи",
    offer: {
      title: "Самолёт в Сочи",
      price: "от 3338.05₽",
      label: "Победа DP-5945, 6 ноября, 07:10–11:00, прямой, Шереметьево (SVO), терм. D → Сочи, AER. Базовый, без багажа, ручная кладь 1 место 36×30×27. 3338.05 ₽ за 1 взрослого, снимок поиска 19 октября.",
      href: "https://avia.tutu.ru/f/Moskva/Sochi/?class=Y&travelers=1&route[0]=491-06112026-78&utm_source=grok&utm_medium=mcp",
    },
  },
  {
    id: "p4c2nCUvE95qAmtEUq9Tf8",
    title: "Великолепный Муром",
    place: "Муром",
  },
  {
    id: "gyqQRJbPDuhH9Po2heGetf",
    title: "Маршрут по Хибинам",
    place: "Кировск",
  },
  {
    id: "qRK3cppTQQQjCKAPEZ2m5s",
    title: "Солнечная Армения",
    place: "Ереван",
  },
  {
    id: "dBoYCW8FxmozAbviT2x3MR",
    title: "Суздаль для души",
    place: "Суздаль",
  },
  {
    id: "dMNvwVaWP6nYjmHg45dgab",
    title: "Едем на Домбай",
    place: "Домбай",
  },
  {
    id: "3uQ6jYfAMX8Gvz3JDxxX65",
    title: "Прогулка и крендели Выборга",
    place: "Выборг",
  },
  {
    id: "pCrAAnPgnRrM8TCMQMZNpN",
    title: "Красота Камчатки",
    place: "Петропавловск-Камчатский",
  },
];

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
    const name = document.createElement("p");
    name.className = "name";
    name.textContent = "Блогеры рекомендуют";
    const caption = document.createElement("p");
    caption.className = "caption";
    caption.textContent = item.title;
    who.append(name, caption);
    author.append(avatar, who);
    dock.appendChild(author);

    if (item.offer) {
      const card = document.createElement("a");
      card.className = "offer";
      card.href = item.offer.href;
      card.target = "_blank";
      card.rel = "noopener noreferrer";
      card.setAttribute("aria-label", item.offer.label);

      const thumb = document.createElement("img");
      thumb.className = "thumb";
      thumb.alt = "";
      thumb.src = posterUrl(item.id);

      const text = document.createElement("span");
      text.className = "offer-text";
      const offerTitle = document.createElement("span");
      offerTitle.className = "offer-title";
      offerTitle.textContent = item.offer.title;
      const offerPrice = document.createElement("span");
      offerPrice.className = "offer-price";
      offerPrice.textContent = item.offer.price;
      text.append(offerTitle, offerPrice);

      const chevron = document.createElement("span");
      chevron.className = "chevron";
      chevron.innerHTML = ICONS.chevron;

      card.append(thumb, text, chevron);
      dock.appendChild(card);
    }

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

function show(index) {
  const next = Math.max(0, Math.min(FEED.length - 1, index));
  const changed = next !== active;
  active = next;
  slides().forEach((slide, i) => slide.classList.toggle("is-active", i === active));
  if (!changed && player) {
    scrolling = false;
    revealActive();
    return;
  }
  scrolling = true;
  revealActive();
  mount(active);
}

function mount(index) {
  const token = ++generation;
  mountChain = mountChain
    .then(() => openVideo(index, token))
    .catch(() => {
      if (token !== generation) return;
      scrolling = false;
      status.hidden = false;
      status.textContent = "Ролик не открылся.";
    });
}

async function openVideo(index, token) {
  if (token !== generation || !factory) return;
  if (player) {
    const dying = player;
    player = null;
    await dying.destroy();
  }
  if (token !== generation) return;

  let host = document.getElementById("player");
  if (!host) {
    host = document.createElement("div");
    host.id = "player";
    document.getElementById("stage").appendChild(host);
  }

  const instance = await factory.create("player", {
    url: "https://kinescope.io/" + FEED[index].id,
    size: { width: "100%", height: "100%" },
    behavior: {
      autoPlay: true,
      muted: muted,
      loop: true,
      playsInline: true,
      preload: "auto",
      keyboard: false,
      localStorage: { time: false, quality: false },
    },
    ui: {
      language: "ru",
      controls: false,
      mainPlayButton: false,
    },
  });

  if (token !== generation) {
    await instance.destroy();
    return;
  }

  player = instance;
  document.documentElement.dataset.player = "ready";
  status.hidden = true;
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
  await applyMute();
  if (!(await instance.isPaused())) {
    scrolling = false;
    revealActive();
  }
}

function indexFromScroll() {
  const height = feed.clientHeight || 1;
  return Math.round(feed.scrollTop / height);
}

function boot(nextFactory) {
  factory = nextFactory;
  mount(0);
}

render();

let scrollTimer = 0;
feed.addEventListener("scroll", () => {
  scrolling = true;
  revealActive();
  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(() => show(indexFromScroll()), 80);
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
