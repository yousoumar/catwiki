import fetch from "node-fetch";
const getAllBreeds = async (req, res) => {
  try {
    const response = await fetch(`https://api.thecatapi.com/v1/breeds/`, {
      method: "GET",
      headers: {
        "X-Api-Key": process.env.APIKEY,
      },
    });

    if (response.ok) {
      let data = await response.json();
      data = data.filter((breed) => breed.image && breed.image.url);
      res.json(data);
    } else {
      throw new Error("Bad response from The cat Api");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Something went wrong with The Cat Api. Please come back later.",
    });
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
    data.forEach((item, index) => {
      if (item.url) {
        images[index] = item.url;
      }
    });
    if (images.length <= 0) {
      throw new Error("not found");
    }
    res.json(images);
  } catch (error) {
    console.log(error);
    if (error.message === "not found") {
      res.status(400).send({
        message:
          "The breed you are looking for may not exist in our data base.",
      });
    } else {
      res
        .status(500)
        .send({ message: "Something went wrong with The Cat Api." });
    }
  }
};
export { getAllBreeds, getImageById };
