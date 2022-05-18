exports.getTag = async (req, res, next) => {
  try {
    res.send("获取标签");
  } catch (error) {
    next(error);
  }
};
