export default async (url, callback) => {
  try {
    const response = await fetch(url);

    const data = await response.text();

    if (!response.ok) {
      throw new Error('Erro ao carregar o arquivo');
    }

    if (!data) {
      throw new Error('Arquivo vazio');
    }

    callback(data);
  } catch (error) {
    console.error('Erro:', error);
    callback('');
  }
}
