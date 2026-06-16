const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const bgm = document.querySelector("#bgm");
const bgmToggle = document.querySelector(".bgm-toggle");
const bgmStatus = document.querySelector(".bgm-status");
const BGM_VOLUME = 0.2;
const LOOP_FADE_SECONDS = 2.0;
const SHOULD_START_BGM = true;

let isLoopResetting = false;
let volumeTimer = null;
let isWaitingForFirstInteraction = false;

function setBgmState(isPlaying) {
  if (!bgmToggle || !bgmStatus) return;
  bgmToggle.setAttribute("aria-pressed", String(isPlaying));
  bgmToggle.setAttribute(
    "aria-label",
    isPlaying ? "背景音楽を停止する" : "背景音楽を再生する"
  );
  bgmStatus.textContent = isPlaying ? "BGM ON" : "BGM OFF";
}

function fadeVolume(targetVolume, durationMs, onComplete) {
  if (!bgm) return;
  if (volumeTimer) {
    window.clearInterval(volumeTimer);
  }

  const startVolume = bgm.volume;
  const startedAt = performance.now();

  volumeTimer = window.setInterval(() => {
    const progress = Math.min((performance.now() - startedAt) / durationMs, 1);
    bgm.volume = startVolume + (targetVolume - startVolume) * progress;

    if (progress >= 1) {
      window.clearInterval(volumeTimer);
      volumeTimer = null;
      if (onComplete) onComplete();
    }
  }, 40);
}

function restartBgmSoftly() {
  if (!bgm || isLoopResetting || bgm.paused) return;
  isLoopResetting = true;
  fadeVolume(0, LOOP_FADE_SECONDS * 1000, () => {
    bgm.currentTime = 0;
    fadeVolume(BGM_VOLUME, LOOP_FADE_SECONDS * 1000, () => {
      isLoopResetting = false;
    });
  });
}

async function startBgm() {
  if (!bgm) return false;

  try {
    bgm.volume = BGM_VOLUME;
    await bgm.play();
    setBgmState(true);
    return true;
  } catch {
    setBgmState(false);
    return false;
  }
}

function enableFirstInteractionStart() {
  if (isWaitingForFirstInteraction) return;
  isWaitingForFirstInteraction = true;

  const startOnce = async () => {
    if (!SHOULD_START_BGM || !bgm || !bgm.paused) return;
    const started = await startBgm();
    if (started) {
      window.removeEventListener("pointerdown", startOnce);
      window.removeEventListener("keydown", startOnce);
      isWaitingForFirstInteraction = false;
    }
  };

  window.addEventListener("pointerdown", startOnce, { passive: true });
  window.addEventListener("keydown", startOnce);
}

if (bgm && bgmToggle) {
  bgm.volume = BGM_VOLUME;
  setBgmState(SHOULD_START_BGM);

  bgmToggle.addEventListener("click", async () => {
    if (bgm.paused) {
      await startBgm();
      return;
    }

    bgm.pause();
    setBgmState(false);
  });

  bgm.addEventListener("timeupdate", () => {
    if (!Number.isFinite(bgm.duration) || bgm.duration <= LOOP_FADE_SECONDS + 1) {
      return;
    }
    if (bgm.duration - bgm.currentTime <= LOOP_FADE_SECONDS) {
      restartBgmSoftly();
    }
  });

  bgm.addEventListener("ended", () => {
    if (!bgm.paused) return;
    bgm.currentTime = 0;
    startBgm();
  });

  if (SHOULD_START_BGM) {
    window.addEventListener("DOMContentLoaded", async () => {
      const started = await startBgm();
      if (!started) {
        enableFirstInteractionStart();
      }
    });
  }
}
