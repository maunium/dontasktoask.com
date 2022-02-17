window.onload = () => {
  const lang = (
    navigator.languages
      ? navigator.languages[0]
      : navigator.language || navigator.userLanguage
  ).toLowerCase();
  const twoLettersLanguages = ["ar-eg", "pt-br", "pt-pt", "zh-cn", "zh-tw"];
  const enLanguages = ["en-US", 'en-UK', 'en'];

  if (enLanguages.includes(lang)) window.location.replace(window.location.hostname);
  else if (twoLettersLanguages.includes(lang)) window.location.replace(`${window.location.hostname}/${lang}`);
  else window.location.replace(`${window.location.hostname}/${lang.slice(0, 2)}`);
};
