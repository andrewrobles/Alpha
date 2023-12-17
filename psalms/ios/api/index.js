const BIBLE_ID = "de4e12af7f28f599-02";
const API_KEY = "4a203cf6d4603048c9008bc07df8be2a";
const URL = "https://api.scripture.api.bible/v1/bibles";

const useChapter = async (psalmIndex) => {
  const psalmUrl = `${URL}/${BIBLE_ID}/chapters/PSA.${psalmIndex}?content-type=text`;
  try {
    const response = await fetch(psalmUrl, {
      method: "GET",
      headers: {
        "api-key": API_KEY,
      },
    });
    const json = await response.json();
    return json?.data?.content;
  } catch (error) {
    console.error(error);
  }
};

export default { useChapter };
