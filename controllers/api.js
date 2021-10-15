import fetch from "node-fetch";
const getAllBreeds = async (req, res) => {
  try {
    const response = await fetch(`https://api.thecatapi.com/v1/breeds/`, {
      method: "GET",
      headers: {
        "X-Api-Key": process.env.APIKEY,
      },
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

const getImageById = async (req, res) => {
  const id = req.params.id;

  try {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${id}&limit=4`,
      {
        method: "GET",
        headers: {
          "X-Api-Key": process.env.APIKEY,
        },
      }
    );

    const data = await response.json();
    const images = [];
    data.forEach((item, index) => (images[index] = item.url));
    res.json(images);
  } catch (error) {
    console.log(error);
  }
};
export { getAllBreeds, getImageById };
