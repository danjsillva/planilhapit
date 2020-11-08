import axios from "axios";

export default async (req, res) => {
  try {
    const symbol = req.query.symbol;
    const response = (
      await axios.get(
        `https://api.hgbrasil.com/finance/stock_price?key=1c0aeaa5&symbol=${symbol}`
      )
    ).data;

    res.statusCode = 200;
    res.json(response.results);
  } catch (error) {
    res.statusCode = 500;
    res.json(error);
  }
};
