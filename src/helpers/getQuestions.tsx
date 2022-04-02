export const getQuestions = async () => {
  const url = `https://softec.com.py/preguntas.php`;

  const resp = await fetch(url);

  return await resp.json();
};
